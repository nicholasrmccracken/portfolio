'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useLayoutEffect, useEffect } from 'react';
import * as THREE from 'three';

export function RuneRing({ radius, rotation = [0, 0, 0] }: { radius: number; rotation?: [number, number, number] }) {
  const ticks = useRef<THREE.InstancedMesh>(null);
  useLayoutEffect(() => {
    if (!ticks.current) return;
    const tick = new THREE.Object3D();
    for (let i = 0; i < 48; i++) {
      const angle = i / 48 * Math.PI * 2;
      tick.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      tick.rotation.set(0, 0, angle);
      tick.scale.set(i % 4 === 0 ? 0.095 : 0.04, 0.009, 0.012);
      tick.updateMatrix();
      ticks.current.setMatrixAt(i, tick.matrix);
    }
    ticks.current.instanceMatrix.needsUpdate = true;
  }, [radius]);
  return <group rotation={rotation}>
    <mesh><torusGeometry args={[radius, 0.014, 6, 160]} /><meshStandardMaterial color="#bd9d60" metalness={0.85} roughness={0.3} /></mesh>
    <mesh><torusGeometry args={[radius + 0.055, 0.004, 4, 160]} /><meshBasicMaterial color="#82704e" /></mesh>
    <instancedMesh ref={ticks} args={[undefined, undefined, 48]}><boxGeometry args={[1, 1, 1]} /><meshBasicMaterial color="#b3a078" /></instancedMesh>
  </group>;
}
export function MagicalLights() {
  return <><ambientLight intensity={0.9}/><directionalLight position={[-3, 5, 5]} color="#f5dfb0" intensity={3}/><pointLight position={[3, -1, 3]} color="#bbaa77" intensity={5}/></>;
}
function CompassNeedle() {
  const shape = useMemo(() => {
    const triangle = new THREE.Shape();
    triangle.moveTo(0, 1.22); triangle.lineTo(-0.2, 0); triangle.lineTo(0.2, 0); triangle.closePath();
    return triangle;
  }, []);
  return <group position={[0, 0, 0.22]}>
    <mesh><extrudeGeometry args={[shape, { depth: 0.035, bevelEnabled: false }]}/><meshStandardMaterial color="#b98650" metalness={0.75} roughness={0.3}/></mesh>
    <mesh rotation={[0, 0, Math.PI]}><extrudeGeometry args={[shape, { depth: 0.035, bevelEnabled: false }]}/><meshStandardMaterial color="#c8c1a0" metalness={0.6} roughness={0.35}/></mesh>
    <mesh position={[0,0,0.07]}><sphereGeometry args={[0.115,12,8]}/><meshStandardMaterial color="#d2ad68" metalness={0.8} roughness={0.2}/></mesh>
  </group>;
}
function Artifact({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const needle = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  const { gl } = useThree();
  const pointer = useRef({x:0,y:0});
  useEffect(() => {
    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const bounds = gl.domElement.closest('.artifact-display')?.getBoundingClientRect();
      if (!bounds || event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) { reset(); return; }
      pointer.current = {x:THREE.MathUtils.clamp((event.clientX-bounds.left)/bounds.width*2-1,-1,1),y:THREE.MathUtils.clamp(1-(event.clientY-bounds.top)/bounds.height*2,-1,1)};
    };
    const reset = () => { pointer.current = {x:0,y:0}; };
    window.addEventListener('pointermove', move, {passive:true});
    window.addEventListener('blur', reset);
    document.addEventListener('pointerleave', reset);
    return () => { window.removeEventListener('pointermove',move); window.removeEventListener('blur',reset); document.removeEventListener('pointerleave',reset); };
  }, [gl]);
  useFrame((_, delta) => {
    if (reduced) return;
    const step = Math.min(delta, 0.04);
    elapsed.current += step;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, -0.25 + pointer.current.x * 0.6, 3.5, step);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, 0.25 + pointer.current.y * 0.45, 3.5, step);
      group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, -0.2 + pointer.current.x * 0.4 + Math.sin(elapsed.current * 0.3) * 0.08, 3.5, step);
      group.current.position.y = Math.sin(elapsed.current * 0.7) * 0.045;
    }
    if (needle.current) needle.current.rotation.z = THREE.MathUtils.damp(needle.current.rotation.z, Math.sin(elapsed.current * 0.3) * 0.08 + 0.35 + pointer.current.x * 2.6 + pointer.current.y * 0.65, 3, step);
  });
  return <group ref={group} rotation={[0.25,-0.25,-0.2]}>
    <mesh rotation={[Math.PI / 2,0,0]}><cylinderGeometry args={[1.65,1.65,0.18,64]}/><meshStandardMaterial color="#987341" metalness={0.8} roughness={0.38}/></mesh>
    <mesh position={[0,0,0.101]}><circleGeometry args={[1.51,64]}/><meshStandardMaterial color="#272b20" roughness={0.8}/></mesh>
    <group position={[0,0,0.14]}><RuneRing radius={1.58}/><RuneRing radius={1.34}/></group>
    <mesh position={[0,0,0.115]}><ringGeometry args={[1.13,1.14,64]}/><meshBasicMaterial color="#817854"/></mesh>
    {Array.from({length:8},(_,i)=><group key={i} rotation={[0,0,i*Math.PI/4]} position={[0,0,0.13]}><mesh position={[0,0.63,0]} scale={[0.12,i%2===0?0.65:0.44,0.025]}><octahedronGeometry args={[1,0]}/><meshStandardMaterial color={i%2===0?'#8f8762':'#5a5f47'} roughness={0.7}/></mesh></group>)}
    <group ref={needle}><CompassNeedle/></group>
    <mesh position={[0,1.91,0]}><torusGeometry args={[0.21,0.055,8,32]}/><meshStandardMaterial color="#b38a4c" metalness={0.8} roughness={0.3}/></mesh>
  </group>;
}
export function SceneEnvironment({ reduced }: { reduced: boolean }) {
  return <><MagicalLights/><Artifact reduced={reduced}/></>;
}
export default function HeroArtifact({ reduced, active }: { reduced: boolean; active: boolean }) {
  return <Canvas camera={{position:[0,0,6],fov:44}} dpr={[1,1.5]} frameloop={reduced||!active?'demand':'always'} gl={{antialias:true,alpha:true,powerPreference:'low-power'}} aria-hidden="true"><SceneEnvironment reduced={reduced||!active}/></Canvas>;
}
