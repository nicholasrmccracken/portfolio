'use client';
import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const path = useRef<SVGPathElement>(null);
  useEffect(() => {
    const preference = matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    let points: { x: number; y: number; time: number }[] = [];
    let frame = 0;
    const draw = () => {
      const now = performance.now();
      points = points.filter(point => now - point.time < 650);
      if (path.current) {
        path.current.setAttribute('d', points.map((point, i) => `${i ? 'L' : 'M'}${point.x} ${point.y}`).join(' '));
        path.current.style.opacity = points.length > 1 ? String(Math.min(0.32, (650 - (now - points[points.length - 1].time)) / 1600)) : '0';
      }
      frame = points.length ? requestAnimationFrame(draw) : 0;
    };
    const move = (event: PointerEvent) => {
      if (!preference.matches || event.pointerType !== 'mouse') return;
      const last = points[points.length - 1];
      if (last && Math.hypot(event.clientX - last.x, event.clientY - last.y) < 9) return;
      points.push({x:event.clientX, y:event.clientY, time:performance.now()});
      points = points.slice(-12);
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const clear = () => { points = []; cancelAnimationFrame(frame); frame = 0; path.current?.setAttribute('d',''); };
    window.addEventListener('pointermove', move, {passive:true});
    window.addEventListener('scroll', clear, {passive:true});
    window.addEventListener('blur', clear);
    preference.addEventListener('change', clear);
    return () => { clear(); window.removeEventListener('pointermove',move); window.removeEventListener('scroll',clear); window.removeEventListener('blur',clear); preference.removeEventListener('change',clear); };
  }, []);
  return <svg className="cursor-trail" aria-hidden="true"><path ref={path} fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 8" strokeLinecap="round"/></svg>;
}
