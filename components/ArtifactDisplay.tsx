'use client';
import dynamic from 'next/dynamic';
import { Component, useEffect, useRef, useState, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';
const Scene = dynamic(() => import('./HeroArtifact'), { ssr: false });
class SceneBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}
export default function ArtifactDisplay() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  const [webgl, setWebgl] = useState(false);
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl2') || canvas.getContext('webgl');
    setWebgl(Boolean(context));
    context?.getExtension('WEBGL_lose_context')?.loseContext();
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting && !document.hidden));
    if (ref.current) observer.observe(ref.current);
    const visibility = () => setActive(!document.hidden && Boolean(ref.current && ref.current.getBoundingClientRect().bottom > 0));
    document.addEventListener('visibilitychange', visibility);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility); };
  }, []);
  return <div className="artifact-display" ref={ref} role="img" aria-label="A moonlit crystal suspended inside a brass celestial astrolabe">
    <div className="artifact-grid" />
    <div className={`artifact-fallback ${webgl ? 'behind-scene' : ''}`}><div className="fallback-orbit" /><div className="fallback-orbit second" /><div className="fallback-crystal" /></div>
    {webgl && <SceneBoundary onError={() => setWebgl(false)}><Scene reduced={Boolean(reduced)} active={active} /></SceneBoundary>}
    <span className="chart-label chart-top">FIG. 001 — THE CELESTIAL ENGINE</span>
    <span className="chart-direction north">N</span><span className="chart-direction west">W</span><span className="chart-direction east">E</span>
    <div className="artifact-caption"><span /> ENGINEERING × IMAGINATION</div>
  </div>;
}
