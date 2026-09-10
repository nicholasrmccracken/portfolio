'use client';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { animate, motion, useReducedMotion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { createPortal } from 'react-dom';
const landmarks = [
  {id:'experience', name:'Experience', subtitle:'The traveled road', x:190, y:166},
  {id:'projects', name:'Projects', subtitle:'The workshop', x:363, y:218},
  {id:'education', name:'Education', subtitle:'The academy', x:191, y:293},
  {id:'skills', name:'Skills', subtitle:'The toolkit', x:181, y:403},
  {id:'contact', name:'Contact', subtitle:'The next expedition', x:363, y:300},
];
export default function MapNavigation() {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  const [traveling, setTraveling] = useState('');
  const selected = landmarks.find(landmark => landmark.id === hovered);
  const cleanup = useRef<(() => void) | null>(null);
  useEffect(() => () => cleanup.current?.(), []);
  const navigate = (event: MouseEvent<Element>, id: string, name: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    cleanup.current?.();
    const destination = Math.min(document.documentElement.scrollHeight - innerHeight, Math.max(0, target.getBoundingClientRect().top + scrollY - 90));
    const finish = () => { history.pushState(null,'',`#${id}`); target.focus({preventScroll:true}); };
    if (reduced) { window.scrollTo({top:destination,behavior:'instant'}); finish(); return; }
    setTraveling(name);
    document.documentElement.classList.add('map-journey-active');
    const control: { stop?: () => void } = {};
    const clear = () => {
      control.stop?.();
      document.documentElement.classList.remove('map-journey-active');
      setTraveling('');
      window.removeEventListener('wheel',cancel);
      window.removeEventListener('touchstart',cancel);
      window.removeEventListener('keydown',cancel);
      cleanup.current = null;
    };
    const cancel = () => clear();
    cleanup.current = clear;
    window.addEventListener('wheel',cancel,{passive:true,once:true});
    window.addEventListener('touchstart',cancel,{passive:true,once:true});
    window.addEventListener('keydown',cancel,{once:true});
    const animation = animate(scrollY, destination, {delay:0.3,duration:1.35,ease:[0.65,0,0.2,1],onUpdate:top=>window.scrollTo({top,behavior:'instant'}),onComplete:()=>{clear();finish();target.animate([{filter:'brightness(1.2)'},{filter:'brightness(1)'}],{duration:650,easing:'ease-out'});}});
    control.stop = () => animation.stop();
  };
  return <>
    <nav className="map-navigation" aria-label="Explore the portfolio map">
      <svg viewBox="0 0 520 540">
        <g className="atlas-grid-labels" aria-hidden="true">{['A','B','C','D','E'].map((label,index)=><text key={label} x={100+index*80} y="51" textAnchor="middle">{label}</text>)}{[1,2,3,4,5].map((label,index)=><text key={label} x="47" y={105+index*80}>{label}</text>)}</g>
        {selected && <motion.g key={selected.id} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:reduced?0:0.3}} className="atlas-crosshair" aria-hidden="true"><path d={`M34 ${selected.y}H486M${selected.x} 36V504`}/><circle cx={selected.x} cy={selected.y} r="26"/><motion.circle cx={selected.x} cy={selected.y} r="34" fill="none" initial={{scale:reduced?1:0.6,opacity:0}} animate={{scale:1,opacity:0.8}} transition={{duration:reduced?0:0.5}} style={{transformOrigin:`${selected.x}px ${selected.y}px`}}/></motion.g>}
        <path className="map-route" d="M190 166C260 125 389 147 363 218S235 224 191 293C160 335 145 373 181 403C245 453 331 396 363 300" fill="none" opacity={hovered ? 0.85 : 0.35}/>
        {landmarks.map((landmark,index)=><a key={landmark.id} href={`#${landmark.id}`} aria-label={`Explore ${landmark.name}: ${landmark.subtitle}`} onClick={event=>navigate(event,landmark.id,landmark.name)} onMouseEnter={()=>setHovered(landmark.id)} onMouseLeave={()=>setHovered(null)} onFocus={()=>setHovered(landmark.id)} onBlur={()=>setHovered(null)} className={`map-landmark ${hovered===landmark.id?'selected':''} `}>
          <g transform={`translate(${landmark.x} ${landmark.y})`}><rect className="map-hit-area" x="-49" y="-23" width="98" height="62" rx="4"/><g className="landmark-sigil" aria-hidden="true"><circle r="23"/>{Array.from({length:8},(_,i)=><path key={i} transform={`rotate(${i*45})`} d="M0-21V-26M-2-28 0-30 2-28"/>)}</g><circle className="landmark-halo" r="16"/><path className="landmark-diamond" d="M0-10 10 0 0 10-10 0Z"/><text className="landmark-number" y="3" textAnchor="middle">{index+1}</text><text className="landmark-label" y="29" textAnchor="middle">{landmark.name}</text></g>
        </a>)}
      </svg>
    </nav>
    <span className="map-instruction">{hovered ? landmarks.find(l=>l.id===hovered)?.subtitle : 'Choose a landmark to explore'} <span aria-hidden="true">↗</span></span>
    {traveling&&createPortal(<><div className="atlas-departure" aria-hidden="true"><div className="atlas-departure-ring"/><div className="atlas-departure-ring inner"/><span className="atlas-departure-bearing">SETTING BEARING · {traveling.toUpperCase()}</span></div><div className="journey-toast" role="status"><Compass size={18}/><span>Charting a course to <strong>{traveling}</strong></span><motion.span className="journey-progress" initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:1.65,ease:'linear'}}/></div></>, document.body)}
  </>;
}
