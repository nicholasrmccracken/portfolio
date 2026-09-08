import Image from 'next/image';

function Node({ x, y, width = 120, label, detail }: { x: number; y: number; width?: number; label: string; detail?: string }) {
  return <g transform={`translate(${x} ${y})`}>
    <rect width={width} height="48" rx="4" fill="#29382b" stroke="#8c9971"/>
    <text x={width / 2} y={detail ? 20 : 29} textAnchor="middle" fill="#e0dfc5" fontSize="12">{label}</text>
    {detail && <text x={width / 2} y="36" textAnchor="middle" fill="#b8c4a5" fontSize="10">{detail}</text>}
  </g>;
}

export default function ProjectBanner({ motif }: { motif: string }) {
  if (motif === 'marine' || motif === 'robot') {
    const marine = motif === 'marine';
    return <div className={`project-banner project-photo banner-${motif}`}>
      <Image src={marine ? '/marine-seafloor.jpg' : '/airport-task-robot.png'} alt={marine ? 'Grainy ROV photograph of a yellow sea cucumber on the deep-sea floor.' : 'The Airport Task Robot with its bulldozer blade, wheels, and mounted controller.'} fill sizes="(max-width: 760px) 100vw, 550px" className={marine ? 'marine-photo' : 'robot-photo'}/>
      {marine && <a className="photo-credit" href="https://oceanexplorer.noaa.gov/multimedia/okeanos-explorations-ex2103-gallery-media-sea-cucumber/" target="_blank" rel="noreferrer">Photo: NOAA Ocean Exploration</a>}
    </div>;
  }
  const agents = motif === 'route';
  const arrow = `arrow-${motif}`;
  return <div className={`project-banner banner-${motif}`}>
    <svg viewBox="0 0 520 250" fill="none" role="img" aria-label={agents ? 'Agents exchange context with a context manager backed by shared memory. The context manager connects to retrieval and tools.' : 'Repository files are indexed in Elasticsearch. A question retrieves relevant context through hybrid search, which an LLM uses to answer.'}>
      <defs><marker id={arrow} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto-start-reverse"><path d="M0 0L7 3.5L0 7" fill="#bdb181"/></marker></defs>
      {agents ? <>
        <g stroke="#bdb181" markerEnd={`url(#${arrow})`} markerStart={`url(#${arrow})`}>
          <path d="M110 78V126H190"/><path d="M260 78V102"/><path d="M410 78V126H330"/>
          <path d="M220 150V179H145V187"/><path d="M300 150V179H375V187"/>
        </g>
        <Node x={50} y={30} label="Agent 1"/><Node x={200} y={30} label="Agent 2"/><Node x={350} y={30} label="Agent 3"/>
        <Node x={190} y={102} width={140} label="Context manager" detail="Shared memory"/>
        <Node x={85} y={187} label="Retrieval"/><Node x={315} y={187} label="Tools"/>
      </> : <>
        <g stroke="#bdb181" markerEnd={`url(#${arrow})`}>
          <path d="M150 56H200"/><path d="M320 56H370"/>
          <path d="M430 80V115H260V150"/>
          <path d="M150 174H200"/><path d="M320 174H370"/>
        </g>
        <Node x={30} y={32} label="Repository files" detail="Code + docs"/>
        <Node x={200} y={32} label="Chunk + embed" detail="LangChain"/>
        <Node x={370} y={32} label="Elasticsearch" detail="Vectors + keywords"/>
        <Node x={30} y={150} label="User question"/>
        <Node x={200} y={150} label="Hybrid retrieval" detail="Relevant context"/>
        <Node x={370} y={150} label="LLM answer"/>
        <text x="260" y="232" textAnchor="middle" fill="#b8c4a5" fontSize="11">INDEX THE REPOSITORY · RETRIEVE CONTEXT · ANSWER</text>
      </>}
    </svg>
  </div>;
}
