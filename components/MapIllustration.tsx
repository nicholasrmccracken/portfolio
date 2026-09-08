/** Hand-drawn cartographic geometry; no image downloads or textures. */
export default function MapIllustration({ detail = false, archive = false }: { detail?: boolean; archive?: boolean }) {
  const contours = Array.from({ length: 8 }, (_, i) => {
    const n = i * 13;
    return `M ${-40+n} ${120+n} C ${60+n} ${30+n}, ${155+n} ${95+n}, ${189+n} ${25+n} S ${360+n} ${65+n}, ${490+n} ${-20+n}`;
  });
  return <svg className="map-illustration" viewBox="0 0 520 540" fill="none" aria-hidden="true">
    <defs><pattern id={detail?'hero-hatch':archive?'archive-hatch':'route-hatch'} width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(30)"><path d="M0 0V7" stroke="currentColor" strokeOpacity=".10"/></pattern></defs>
    <path d="M28 30H492V510H28Z" stroke="currentColor" strokeOpacity=".35"/>
    <path d="M34 36H486V504H34Z" stroke="currentColor" strokeOpacity=".16"/>
    <g stroke="currentColor" strokeOpacity=".11">{[100,180,260,340,420].map(x=><path d={`M${x} 36V504M34 ${x}H486`} key={x}/>)}</g>
    <path d="M35 57C85 63 105 94 92 126S125 148 106 184 149 215 136 239 161 283 124 306 148 344 111 367 118 416 77 438L34 461" fill="currentColor" fillOpacity=".07" stroke="currentColor" strokeOpacity=".6"/>
    <path d="M40 61C78 67 97 97 85 127S118 151 99 185 142 218 129 241 154 283 117 308 141 347 104 369 111 409 70 433L34 453" stroke="currentColor" strokeOpacity=".2"/>
    <g stroke="currentColor" strokeOpacity=".2" strokeWidth=".7">{contours.map((d,i)=><path key={i} d={d}/>)}<path d="M489 240c-70-24-110 27-91 74s-50 41-35 92-40 40-67 98M489 256c-55-19-95 22-77 60s-49 44-35 88-34 51-63 100M489 271c-44-14-79 16-64 51s-48 43-35 80-30 63-57 102M489 289c-33-13-61 10-49 41s-43 42-37 73-22 70-49 101"/></g>
    <path d="M319 42c-32 51 2 65-25 96s6 48-20 82-2 38-28 64-2 51-30 65-28 49-64 51" stroke="currentColor" strokeOpacity=".52" strokeWidth="2"/>
    <path d="M323 42c-32 51 2 65-25 96s6 48-20 82-2 38-28 64-2 51-30 65-28 49-64 51" stroke="currentColor" strokeOpacity=".23"/>
    <g stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">{[[174,110],[198,90],[220,122],[189,139],[342,238],[363,220],[389,246],[360,267],[185,430],[210,447]].map(([x,y],i)=><g key={i}><path d={`m${x-15} ${y+17} 15-30 19 30m-26-14 7-4 5 6 3-2m-8-10 4 25`} fill="currentColor" fillOpacity=".035"/><path d={`m${x+4} ${y+1} 9 16m-5-11 8 11`} strokeOpacity=".35"/></g>)}</g>
    <g className="map-woodland" stroke="currentColor" strokeWidth=".8" strokeOpacity=".8">{[[165,221],[184,228],[178,208],[197,215],[171,244],[191,250],[209,239],[421,111],[405,122],[428,135],[445,124],[411,146]].map(([x,y],i)=><path key={i} d={`m${x} ${y-8}-6 10h3l-5 6h16l-5-6h3l-6-10v20`}/>)}</g>
    {archive&&<g stroke="currentColor" strokeWidth="1.2"><path d="M240 328v-80l38-18 39 18v80l-39 18-38-18Zm0-80 38 18 39-18m-39 18v80m-28-59 20 9m-20 4 20 9m-20 4 20 9m18-22 20-9m-20 22 20-9m-20 22 20-9"/></g>}
    <g opacity={detail ? 0.4 : 1} fill="currentColor" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle"><text x="212" y="72" fontSize="13" letterSpacing="2">The Northern Reaches</text><text x="205" y="283" fontSize="14">Wilderwood</text><text x="352" y="191" fontSize="11">{archive?'The Great Archive':'Old Watchtower'}</text><text x="183" y="366" fontSize="11">Westhaven</text><text x="392" y="301" fontSize="12">Ironpeak</text><text x="65" y="286" fontSize="13" transform="rotate(-90 65 286)" letterSpacing="3">THE WANDERING SEA</text></g>
    <g transform="translate(429 411)" stroke="currentColor"><circle r="29" strokeOpacity=".3"/><path d="M0-41 5-7 23-23 7-5 41 0 7 5 23 23 5 7 0 41-5 7-23 23-7 5-41 0-7-5-23-23-5-7Z" fill="currentColor" fillOpacity=".07" strokeWidth=".8"/><path d="M0-41V41M-41 0H41" strokeOpacity=".4"/><text x="0" y="-47" fill="currentColor" stroke="none" textAnchor="middle" fontSize="10" fontFamily="Georgia,serif">N</text></g>
    <g stroke="currentColor" strokeOpacity=".6"><path d="M61 466H161m-100-4v8m25-4v4m25-8v8m25-4v4m25-8v8"/></g>
    <text x="61" y="486" fill="currentColor" fontSize="8" letterSpacing="1.5" fontFamily="Georgia,serif">0 ——— 50 LEAGUES</text>
    <path d="M34 36h18m-18 0v18m452-18h-18m18 0v18M34 504h18m-18 0v-18m452 18h-18m18 0v-18" stroke="currentColor"/>
  </svg>;
}
