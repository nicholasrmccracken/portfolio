'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line } from '@react-three/drei';
import { useRef, useMemo, useLayoutEffect } from 'react';
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
export function FloatingParticles({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => new Float32Array(Array.from({ length: 240 }, (_, i) => Math.sin(i * 127.1 + 41.7) * 4.5)), []);
  useFrame((_, delta) => { if (ref.current && !reduced) ref.current.rotation.y += delta * 0.012; });
  return <points ref={ref}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry><pointsMaterial size={0.013} color="#c3d2cf" transparent opacity={0.5} sizeAttenuation depthWrite={false} /></points>;
}
export function MagicalLights() {
  return <><ambientLight intensity={0.6} /><directionalLight position={[3, 5, 4]} color="#d9c596" intensity={3} /><pointLight position={[-2, 1, 2]} color="#91c8db" intensity={9} /><pointLight position={[0, -1, 0]} color="#75b0bc" intensity={2} /></>;
}
function Artifact({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const crystal = useRef<THREE.Mesh>(null);
  useFrame(({ pointer, clock }, delta) => {
    if (reduced) return;
    if (group.current) { group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * 0.17 + Math.sin(clock.elapsedTime * 0.09) * 0.15, 2, delta); group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.y * 0.1, 2, delta); }
    if (crystal.current) crystal.current.rotation.y += delta * 0.1;
  });
  return <group ref={group} rotation={[0, 0, -0.12]}>
    <RuneRing radius={1.7} rotation={[0.4, 0.18, 0]} />
    <RuneRing radius={1.47} rotation={[1.1, 0.35, 0.6]} />
    <RuneRing radius={1.48} rotation={[0.35, 1.05, -0.4]} />
    <RuneRing radius={1.04} rotation={[Math.PI / 2, 0.2, 0]} />
    <mesh ref={crystal} scale={[0.67, 1.16, 0.67]} rotation={[0, 0.4, 0]}><octahedronGeometry args={[1, 0]} /><meshPhysicalMaterial color="#92bdc9" metalness={0.48} roughness={0.19} transparent opacity={0.9} emissive="#365f70" emissiveIntensity={0.6} clearcoat={1} flatShading /></mesh>
    <mesh scale={[0.69, 1.18, 0.69]} rotation={[0, 0.4, 0]}><octahedronGeometry args={[1, 0]} /><meshBasicMaterial color="#afdbe7" wireframe transparent opacity={0.22} /></mesh>
    <Line points={[[0, 2, 0], [0, 1.45, 0]]} color="#9e8659" lineWidth={1} />
    <Line points={[[0, -1.4, 0], [0, -2.05, 0]]} color="#9e8659" lineWidth={1} />
    {[2, -2.05].map(y => <mesh key={y} position={[0, y, 0]}><octahedronGeometry args={[0.07]} /><meshStandardMaterial color="#d1b77e" metalness={0.8} roughness={0.3} /></mesh>)}
  </group>;
}
export function SceneEnvironment({ reduced }: { reduced: boolean }) {
  return <><MagicalLights /><FloatingParticles reduced={reduced} /><Float speed={reduced ? 0 : 0.8} rotationIntensity={reduced ? 0 : 0.08} floatIntensity={reduced ? 0 : 0.22}><Artifact reduced={reduced} /></Float></>;
}
export default function HeroArtifact({ reduced, active }: { reduced: boolean; active: boolean }) {
  return <Canvas camera={{ position: [0, 0, 6], fov: 44 }} dpr={[1, 1.5]} frameloop={reduced || !active ? 'demand' : 'always'} gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }} aria-hidden="true"><SceneEnvironment reduced={reduced || !active} /></Canvas>;
}
