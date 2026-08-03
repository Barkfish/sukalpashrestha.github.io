/* ==========================================================================
   MEPP 436 — Definitive Interactive Guide · shared behaviour + figures
   ========================================================================== */
(function(){
"use strict";

/* ---------- small utilities ---------- */
window.U = {
  shuffle:function(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;},
  byBlock:function(list,b){return list.filter(x=>x.block===b);},
  esc:function(s){return String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}
};

/* tag → coloured chip */
function tagChip(tag){
  if(tag==="feb25") return '<span class="chip y25">Feb 2025</span>';
  if(tag==="jul25") return '<span class="chip jul">Jul 2025</span>';
  if(tag==="internal26") return '<span class="chip out" style="background:#fde8cf;border-color:#f0c088;color:#9a4a06">★ Internal 2026</span>';
  if(tag==="out") return '<span class="chip out">beyond slides</span>';
  return '<span class="chip model">model</span>';
}
window.tagChip = tagChip;
function tagsChips(tags){return (tags||[]).map(tagChip).join(' ');}
window.tagsChips = tagsChips;

/* ==========================================================================
   INLINE SVG FIGURES  (referenced from data.js via __SVG_KEY__ tokens,
   and directly from the study guide)
   ========================================================================== */
const AX="#14324f", A2="#2b6cb0", GR="#2f855a", OR="#c05621", RD="#c53030", MU="#5b6b7b";
window.FIGS = {
ceramic:`<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ceramic stress-strain curve">
 <line x1="45" y1="175" x2="300" y2="175" stroke="${AX}" stroke-width="1.5"/>
 <line x1="45" y1="175" x2="45" y2="20" stroke="${AX}" stroke-width="1.5"/>
 <text x="170" y="200" font-size="12" fill="${MU}" text-anchor="middle">Strain ε</text>
 <text x="16" y="100" font-size="12" fill="${MU}" transform="rotate(-90 16 100)" text-anchor="middle">Stress σ</text>
 <line x1="45" y1="175" x2="210" y2="45" stroke="${A2}" stroke-width="2.5"/>
 <text x="228" y="40" font-size="20" fill="${RD}" font-weight="700">×</text>
 <text x="150" y="120" font-size="11" fill="${A2}" transform="rotate(-38 150 120)">slope = E (high)</text>
 <text x="212" y="62" font-size="11" fill="${RD}">brittle fracture</text>
 <text x="150" y="30" font-size="11" fill="${MU}">no yield · no plasticity</text>
</svg>`,
yield:`<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tresca hexagon in Von Mises ellipse">
 <line x1="20" y1="150" x2="280" y2="150" stroke="${MU}" stroke-width="1"/>
 <line x1="150" y1="20" x2="150" y2="280" stroke="${MU}" stroke-width="1"/>
 <text x="285" y="146" font-size="12" fill="${MU}">σ₁</text><text x="156" y="26" font-size="12" fill="${MU}">σ₂</text>
 <ellipse cx="150" cy="150" rx="118" ry="118" fill="none" stroke="${A2}" stroke-width="2" transform="rotate(45 150 150)" style="transform-box:fill-box;transform-origin:center"/>
 <polygon points="245,150 205,55 55,55 55,150 95,245 245,245" fill="rgba(47,133,90,.10)" stroke="${GR}" stroke-width="2"/>
 <text x="196" y="112" font-size="12" fill="${A2}" font-weight="700">Von Mises</text>
 <text x="70" y="205" font-size="12" fill="${GR}" font-weight="700">Tresca</text>
 <text x="150" y="298" font-size="10.5" fill="${MU}" text-anchor="middle">Tresca hexagon is inscribed in (more conservative than) the ellipse</text>
</svg>`,
modes:`<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three crack modes">
 <g>
  <rect x="30" y="45" width="80" height="90" fill="#eef3f8" stroke="${AX}"/>
  <line x1="70" y1="70" x2="70" y2="110" stroke="${RD}" stroke-width="2.5"/>
  <line x1="70" y1="35" x2="70" y2="20" stroke="${AX}" stroke-width="1.5" marker-end="url(#a1)"/>
  <line x1="70" y1="145" x2="70" y2="160" stroke="${AX}" stroke-width="1.5" marker-end="url(#a1)"/>
  <text x="70" y="15" font-size="10" fill="${AX}" text-anchor="middle">σ</text>
  <text x="70" y="176" font-size="12" fill="${AX}" text-anchor="middle" font-weight="700">Mode I</text>
  <text x="70" y="30" font-size="9.5" fill="${MU}" text-anchor="middle">Opening</text>
 </g>
 <g>
  <rect x="210" y="45" width="80" height="90" fill="#eef3f8" stroke="${AX}"/>
  <line x1="250" y1="70" x2="250" y2="110" stroke="${RD}" stroke-width="2.5"/>
  <line x1="200" y1="60" x2="230" y2="60" stroke="${AX}" stroke-width="1.5" marker-end="url(#a1)"/>
  <line x1="300" y1="120" x2="270" y2="120" stroke="${AX}" stroke-width="1.5" marker-end="url(#a1)"/>
  <text x="250" y="176" font-size="12" fill="${AX}" text-anchor="middle" font-weight="700">Mode II</text>
  <text x="250" y="30" font-size="9.5" fill="${MU}" text-anchor="middle">Sliding (in-plane shear)</text>
 </g>
 <g>
  <rect x="390" y="45" width="80" height="90" fill="#eef3f8" stroke="${AX}"/>
  <line x1="430" y1="70" x2="430" y2="110" stroke="${RD}" stroke-width="2.5"/>
  <line x1="405" y1="55" x2="405" y2="30" stroke="${AX}" stroke-width="1.5" marker-end="url(#a1)"/>
  <line x1="455" y1="125" x2="455" y2="150" stroke="${AX}" stroke-width="1.5" marker-end="url(#a1)"/>
  <text x="430" y="176" font-size="12" fill="${AX}" text-anchor="middle" font-weight="700">Mode III</text>
  <text x="430" y="30" font-size="9.5" fill="${MU}" text-anchor="middle">Tearing (out-of-plane)</text>
 </g>
 <defs><marker id="a1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="${AX}"/></marker></defs>
</svg>`,
fatload:`<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Repeated fatigue loading">
 <line x1="45" y1="185" x2="405" y2="185" stroke="${AX}" stroke-width="1.5"/>
 <line x1="45" y1="30" x2="45" y2="185" stroke="${AX}" stroke-width="1.5"/>
 <text x="225" y="205" font-size="11" fill="${MU}" text-anchor="middle">time →</text>
 <text x="16" y="110" font-size="11" fill="${MU}" transform="rotate(-90 16 110)" text-anchor="middle">stress σ</text>
 <path d="M45,150 Q75,55 105,150 T165,150 T225,150 T285,150 T345,150 T405,150" fill="none" stroke="${A2}" stroke-width="2.2"/>
 <line x1="45" y1="150" x2="405" y2="150" stroke="${MU}" stroke-dasharray="3 3"/>
 <line x1="45" y1="102" x2="405" y2="102" stroke="${GR}" stroke-dasharray="4 3"/>
 <line x1="45" y1="55" x2="405" y2="55" stroke="${RD}" stroke-dasharray="3 3"/>
 <text x="360" y="66" font-size="10" fill="${RD}">σmax</text>
 <text x="360" y="113" font-size="10" fill="${GR}">σm</text>
 <text x="360" y="163" font-size="10" fill="${MU}">σmin=0</text>
 <text x="110" y="45" font-size="10.5" fill="${MU}">R = 0 (repeated)</text>
</svg>`,
dadn:`<svg viewBox="0 0 400 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="da/dN vs Delta K curve">
 <line x1="55" y1="235" x2="380" y2="235" stroke="${AX}" stroke-width="1.5"/>
 <line x1="55" y1="20" x2="55" y2="235" stroke="${AX}" stroke-width="1.5"/>
 <text x="215" y="258" font-size="11.5" fill="${MU}" text-anchor="middle">log ΔK →</text>
 <text x="18" y="130" font-size="11.5" fill="${MU}" transform="rotate(-90 18 130)" text-anchor="middle">log (da/dN)</text>
 <path d="M90,215 C120,213 128,150 150,120 L270,70 C300,55 305,35 320,30" fill="none" stroke="${A2}" stroke-width="2.6"/>
 <line x1="90" y1="20" x2="90" y2="235" stroke="${MU}" stroke-dasharray="3 3"/>
 <line x1="205" y1="20" x2="205" y2="235" stroke="${MU}" stroke-dasharray="3 3"/>
 <line x1="315" y1="20" x2="315" y2="235" stroke="${MU}" stroke-dasharray="3 3"/>
 <text x="72" y="52" font-size="11" fill="${AX}" font-weight="700">I</text>
 <text x="150" y="52" font-size="11" fill="${AX}" font-weight="700">II</text>
 <text x="262" y="52" font-size="11" fill="${AX}" font-weight="700">III</text>
 <text x="66" y="228" font-size="9" fill="${MU}">ΔK_th</text>
 <text x="300" y="228" font-size="9" fill="${MU}">K→Kᴵᴄ</text>
 <text x="150" y="145" font-size="10" fill="${A2}" transform="rotate(-34 150 145)">da/dN=C(ΔK)ᵐ</text>
</svg>`,
bathtub:`<svg viewBox="0 0 420 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bathtub curve">
 <line x1="50" y1="195" x2="405" y2="195" stroke="${AX}" stroke-width="1.5"/>
 <line x1="50" y1="20" x2="50" y2="195" stroke="${AX}" stroke-width="1.5"/>
 <text x="228" y="218" font-size="11.5" fill="${MU}" text-anchor="middle">time →</text>
 <text x="17" y="115" font-size="11.5" fill="${MU}" transform="rotate(-90 17 115)" text-anchor="middle">failure rate λ</text>
 <path d="M60,55 C95,150 140,160 175,160 L285,160 C330,160 360,120 385,45" fill="none" stroke="${A2}" stroke-width="2.6"/>
 <line x1="175" y1="20" x2="175" y2="195" stroke="${MU}" stroke-dasharray="3 3"/>
 <line x1="285" y1="20" x2="285" y2="195" stroke="${MU}" stroke-dasharray="3 3"/>
 <text x="112" y="188" font-size="9.5" fill="${MU}" text-anchor="middle">infant</text>
 <text x="112" y="199" font-size="9.5" fill="${MU}" text-anchor="middle">mortality</text>
 <text x="230" y="188" font-size="9.5" fill="${GR}" text-anchor="middle">useful life</text>
 <text x="230" y="199" font-size="9.5" fill="${GR}" text-anchor="middle">(constant λ)</text>
 <text x="345" y="188" font-size="9.5" fill="${MU}" text-anchor="middle">wear-out</text>
 <text x="95" y="45" font-size="9.5" fill="${MU}">decreasing</text>
 <text x="330" y="40" font-size="9.5" fill="${MU}">increasing</text>
</svg>`,
sncurve:`<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="S-N curve">
 <line x1="55" y1="215" x2="380" y2="215" stroke="${AX}" stroke-width="1.5"/>
 <line x1="55" y1="20" x2="55" y2="215" stroke="${AX}" stroke-width="1.5"/>
 <text x="215" y="238" font-size="11.5" fill="${MU}" text-anchor="middle">log N (cycles to failure)</text>
 <text x="18" y="120" font-size="11.5" fill="${MU}" transform="rotate(-90 18 120)" text-anchor="middle">stress amplitude S</text>
 <path d="M75,45 C150,70 200,140 260,150 L370,150" fill="none" stroke="${A2}" stroke-width="2.6"/>
 <line x1="260" y1="150" x2="370" y2="150" stroke="${GR}" stroke-width="2.6"/>
 <line x1="55" y1="150" x2="260" y2="150" stroke="${GR}" stroke-dasharray="4 3"/>
 <text x="300" y="143" font-size="10" fill="${GR}">endurance limit (steel)</text>
 <text x="78" y="40" font-size="10" fill="${A2}">0.9 Sᵤ @ 10³</text>
 <path d="M75,55 C150,90 220,175 370,190" fill="none" stroke="${OR}" stroke-width="1.8" stroke-dasharray="5 3"/>
 <text x="300" y="185" font-size="9.5" fill="${OR}">Al (no true limit)</text>
</svg>`,
stresscube:`<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3D stress element">
 <polygon points="70,80 160,80 160,170 70,170" fill="#eef3f8" stroke="${AX}" stroke-width="1.5"/>
 <polygon points="70,80 110,45 200,45 160,80" fill="#e2ecf5" stroke="${AX}" stroke-width="1.5"/>
 <polygon points="160,80 200,45 200,135 160,170" fill="#dbe6f2" stroke="${AX}" stroke-width="1.5"/>
 <line x1="115" y1="80" x2="115" y2="30" stroke="${RD}" stroke-width="1.6" marker-end="url(#a2)"/><text x="108" y="26" font-size="10" fill="${RD}">σy</text>
 <line x1="200" y1="90" x2="235" y2="90" stroke="${RD}" stroke-width="1.6" marker-end="url(#a2)"/><text x="220" y="84" font-size="10" fill="${RD}">σx</text>
 <line x1="180" y1="63" x2="205" y2="40" stroke="${RD}" stroke-width="1.6" marker-end="url(#a2)"/><text x="205" y="36" font-size="10" fill="${RD}">σz</text>
 <text x="130" y="205" font-size="10.5" fill="${MU}" text-anchor="middle">σᵢⱼ : 9 components, 6 independent</text>
 <defs><marker id="a2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="${RD}"/></marker></defs>
</svg>`,
mohr:`<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mohr circle">
 <line x1="20" y1="130" x2="305" y2="130" stroke="${MU}"/><line x1="150" y1="30" x2="150" y2="215" stroke="${MU}"/>
 <text x="300" y="126" font-size="11" fill="${MU}">σ</text><text x="156" y="38" font-size="11" fill="${MU}">τ</text>
 <circle cx="170" cy="130" r="75" fill="rgba(43,108,176,.08)" stroke="${A2}" stroke-width="2"/>
 <circle cx="170" cy="130" r="2.5" fill="${AX}"/>
 <line x1="95" y1="130" x2="95" y2="130" /><circle cx="95" cy="130" r="3" fill="${GR}"/><circle cx="245" cy="130" r="3" fill="${GR}"/>
 <text x="78" y="148" font-size="10" fill="${GR}">σ₂</text><text x="240" y="148" font-size="10" fill="${GR}">σ₁</text>
 <line x1="170" y1="130" x2="170" y2="55" stroke="${RD}" stroke-dasharray="3 2"/><text x="175" y="60" font-size="10" fill="${RD}">τmax=R</text>
 <text x="150" y="230" font-size="10.5" fill="${MU}" text-anchor="middle">centre = σavg · radius = τmax · angles double</text>
</svg>`,
griffith:`<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Central crack in plate">
 <rect x="80" y="35" width="140" height="150" fill="#eef3f8" stroke="${AX}" stroke-width="1.5"/>
 <line x1="120" y1="110" x2="180" y2="110" stroke="${RD}" stroke-width="3"/>
 <ellipse cx="150" cy="110" rx="30" ry="6" fill="none" stroke="${RD}" stroke-width="1.2"/>
 <text x="150" y="103" font-size="10" fill="${RD}" text-anchor="middle">2a</text>
 <g stroke="${AX}" stroke-width="1.6">
  <line x1="105" y1="35" x2="105" y2="15" marker-end="url(#a3)"/><line x1="150" y1="35" x2="150" y2="15" marker-end="url(#a3)"/><line x1="195" y1="35" x2="195" y2="15" marker-end="url(#a3)"/>
  <line x1="105" y1="185" x2="105" y2="205" marker-end="url(#a3)"/><line x1="150" y1="185" x2="150" y2="205" marker-end="url(#a3)"/><line x1="195" y1="185" x2="195" y2="205" marker-end="url(#a3)"/>
 </g>
 <text x="245" y="115" font-size="11" fill="${A2}">σ (far-field)</text>
 <text x="150" y="12" font-size="10" fill="${AX}" text-anchor="middle">σ</text>
 <defs><marker id="a3" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="${AX}"/></marker></defs>
</svg>`,
fatstages:`<svg viewBox="0 0 440 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fatigue fracture surface">
 <rect x="30" y="40" width="150" height="100" rx="6" fill="#f2f6fa" stroke="${AX}"/>
 <circle cx="55" cy="65" r="5" fill="${RD}"/>
 <path d="M55,65 Q90,70 120,90" fill="none" stroke="${A2}" stroke-width="1"/>
 <path d="M55,65 Q100,75 135,105" fill="none" stroke="${A2}" stroke-width="1"/>
 <path d="M55,65 Q110,80 150,120" fill="none" stroke="${A2}" stroke-width="1"/>
 <polygon points="150,120 180,140 180,90 155,105" fill="#e7d7d7" stroke="${RD}" stroke-width="1"/>
 <text x="55" y="58" font-size="9" fill="${RD}">initiation</text>
 <text x="95" y="135" font-size="9" fill="${A2}">beach marks (Stage II)</text>
 <text x="200" y="70" font-size="11" fill="${AX}" font-weight="700">Stage I → II → III</text>
 <text x="200" y="90" font-size="10" fill="${MU}">I  initiation (slip bands)</text>
 <text x="200" y="106" font-size="10" fill="${MU}">II propagation (da/dN ~ ΔK)</text>
 <text x="200" y="122" font-size="10" fill="${MU}">III fast final fracture</text>
</svg>`,
threeparam:`<svg viewBox="0 0 420 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fracture design triangle">
 <text x="210" y="24" font-size="12" fill="${AX}" text-anchor="middle" font-weight="700">Fracture mechanics couples THREE quantities</text>
 <rect x="30" y="45" width="100" height="55" rx="8" fill="#eef3f8" stroke="${A2}"/><text x="80" y="70" font-size="11" fill="${AX}" text-anchor="middle" font-weight="700">Stress σ</text><text x="80" y="88" font-size="9.5" fill="${MU}" text-anchor="middle">applied</text>
 <rect x="160" y="45" width="100" height="55" rx="8" fill="#e6f4ec" stroke="${GR}"/><text x="210" y="70" font-size="11" fill="${AX}" text-anchor="middle" font-weight="700">Flaw size a</text><text x="210" y="88" font-size="9.5" fill="${MU}" text-anchor="middle">largest crack</text>
 <rect x="290" y="45" width="100" height="55" rx="8" fill="#fdf1e7" stroke="${OR}"/><text x="340" y="70" font-size="11" fill="${AX}" text-anchor="middle" font-weight="700">Toughness Kᴵᴄ</text><text x="340" y="88" font-size="9.5" fill="${MU}" text-anchor="middle">material</text>
 <text x="210" y="128" font-size="11.5" fill="${A2}" text-anchor="middle">Safe while  K = Yσ√(πa) &lt; Kᴵᴄ</text>
</svg>`
};

/* Keys whose figure is a real image cropped from the MEPP 436 slide decks /
   reference textbooks (assets/img/*.png). Everything else falls back to the
   inline SVG in window.FIGS (used only where no slide figure exists, e.g. the
   "draw-it-yourself" ceramic curve and the concept-summary boxes). */
const IMGKEYS={stresscube:1,mohr:1,yield:1,modes:1,griffith:1,sncurve:1,dadn:1,bathtub:1,ashby:1,fatload:1};
/* map a figure key to a curated SLIDEFIG key (student's own extracted figures) */
const SF_MAP={
  stresscube:'str_cube', yield:'str_yield', modes:'frac_modes', mohr:'str_mohr',
  griffith:'frac_ellipse', sncurve:'fat_sn', fatstages:'fat_stages', dadn:'fana_dadn',
  bathtub:'rel_bathtub', ashby:'mat_ashby', fatload:'fat_loading'
};
function imgTag(src,key){
  return '<img src="'+src+'" alt="'+key+' figure (from the MEPP 436 course materials)" loading="lazy" '+
    'style="max-width:100%;height:auto;background:#fff;border:1px solid var(--line);border-radius:10px;padding:4px">';
}
function figInner(key){
  // 1) curated SLIDEFIG image (from the student's own study notes) — preferred
  if(window.SLIDEFIG){
    var sk = window.SLIDEFIG[key] ? key : SF_MAP[key];
    if(sk && window.SLIDEFIG[sk]) return imgTag(window.SLIDEFIG[sk], key);
  }
  // 2) slide crop saved under assets/img
  if(IMGKEYS[key]) return imgTag('assets/img/'+key+'.png', key);
  // 3) inline SVG fallback (only where no photo exists, e.g. ceramic curve)
  return window.FIGS[key]||'';
}
window.figInner=figInner;
/* replace __SVG_KEY__ tokens inside solution HTML */
function expandFigs(html){
  const map={CERAMIC:'ceramic',YIELD:'yield',MODES:'modes',FATLOAD:'fatload',DADN:'dadn',BATHTUB:'bathtub'};
  return String(html).replace(/__SVG_([A-Z]+)__/g,(m,k)=>figInner(map[k]||''));
}
window.expandFigs = expandFigs;
window.fig = function(key,caption){return '<figure>'+figInner(key)+(caption?'<figcaption>'+caption+'</figcaption>':'')+'</figure>';};

/* ==========================================================================
   INTERACTIVE MCQ ENGINE
   ========================================================================== */
window.renderObjective = function(container, list, opts){
  opts = opts||{};
  container.innerHTML='';
  const state={answered:0,correct:0,total:list.length};
  function updateScore(){
    if(opts.scoreEl){
      opts.scoreEl.innerHTML='Answered <b>'+state.answered+'</b> / '+state.total+
        ' &nbsp;·&nbsp; Correct <b>'+state.correct+'</b>'+
        (state.answered? ' ('+Math.round(100*state.correct/state.answered)+'%)':'');
    }
  }
  list.forEach((q,i)=>{
    const card=document.createElement('div'); card.className='qcard'; card.id='q_'+q.id;
    const head=document.createElement('div'); head.className='qhead';
    head.innerHTML='<span class="qnum">Q'+(i+1)+'</span><span class="qtext">'+q.q+' '+tagChip(q.tag)+'</span>';
    card.appendChild(head);
    const wrap=document.createElement('div');
    const fb=document.createElement('div'); fb.className='feedback';
    q.opts.forEach((o,oi)=>{
      const b=document.createElement('button'); b.type='button'; b.className='opt';
      b.innerHTML='<span class="ol">'+'ABCD'[oi]+'.</span>'+o;
      b.addEventListener('click',function(){
        if(card.dataset.done) return;
        card.dataset.done='1';
        state.answered++;
        const right = oi===q.correct;
        if(right){state.correct++;}
        Array.from(wrap.children).forEach((btn,bi)=>{
          btn.classList.add('disabled');
          if(bi===q.correct) btn.classList.add('correct');
          if(bi===oi && !right) btn.classList.add('wrong');
        });
        fb.className='feedback show '+(right?'ok':'no');
        fb.innerHTML='<span class="verdict">'+(right?'✓ Correct':'✗ Not quite')+'</span>'+
          '<div class="reason">'+q.exp[oi]+'</div>'+
          (!right?'<div class="reason" style="margin-top:5px"><b>Key idea:</b> '+q.reason+'</div>':
                  '<div class="reason" style="margin-top:5px">'+q.reason+'</div>');
        updateScore();
      });
      wrap.appendChild(b);
    });
    card.appendChild(wrap); card.appendChild(fb);
    container.appendChild(card);
  });
  updateScore();
};

/* ==========================================================================
   SUBJECTIVE ACCORDION (browsable bank)
   ========================================================================== */
window.renderSubjective = function(container, list){
  container.innerHTML='';
  list.forEach((p,i)=>{
    const box=document.createElement('div'); box.className='subq'; box.id='s_'+p.id;
    const bar=document.createElement('div'); bar.className='qbar';
    const stars='★'.repeat(p.like||1);
    bar.innerHTML='<div class="qm"><b>'+(p.qlabel||('Q'+(i+1)))+'.</b> '+p.q+
      ' <span class="chip marks">'+p.marks+' mk</span> '+tagsChips(p.tags)+
      ' <span class="likelihood" title="likelihood">'+stars+'</span></div>'+
      '<span class="toggle">Show answer ▾</span>';
    const ans=document.createElement('div'); ans.className='ans';
    ans.innerHTML=(p.src?'<div class="box ref"><span class="lbl">Source</span>'+p.src+'</div>':'')+
      '<h5>Model answer</h5>'+expandFigs(p.sol);
    bar.addEventListener('click',function(){
      box.classList.toggle('open');
      bar.querySelector('.toggle').textContent = box.classList.contains('open')?'Hide answer ▴':'Show answer ▾';
    });
    box.appendChild(bar); box.appendChild(ans);
    container.appendChild(box);
  });
};

/* ==========================================================================
   MODEL-EXAM GENERATOR
   ========================================================================== */
/* Section A: pick 20 objectives spread across blocks, favouring seen/model. */
window.buildSectionA = function(){
  const O=window.OBJECTIVE;
  // weight distribution roughly like the real paper
  const want={A:3,B:3,C:4,D:4,E:2,F:2,G:2};
  let chosen=[];
  Object.keys(want).forEach(b=>{
    const pool=U.shuffle(O.filter(q=>q.block===b));
    chosen=chosen.concat(pool.slice(0,want[b]));
  });
  // top up to 20 if any block was short
  if(chosen.length<20){
    const rest=U.shuffle(O.filter(q=>chosen.indexOf(q)<0));
    chosen=chosen.concat(rest.slice(0,20-chosen.length));
  }
  return U.shuffle(chosen).slice(0,20);
};

/* Assemble one Section-B question from a block's parts up to a marks target. */
function assembleQ(blockTags, target){
  let pool=[];
  blockTags.forEach(t=> pool=pool.concat(window.PARTS.filter(p=>p.block===t)));
  pool=U.shuffle(pool);
  const parts=[]; let sum=0;
  for(const p of pool){
    if(sum>=target) break;
    if(sum+p.marks<=target+2){ parts.push(p); sum+=p.marks; }
  }
  if(parts.length===0 && pool.length) parts.push(pool[0]);
  return parts;
}
window.buildSectionB = function(){
  const meta=window.PAPER_META.secB;
  return meta.blocks.map((blk,qi)=>{
    const tags = blk.tag==="MIX" ? ["E","F","G"] : [blk.tag];
    // ensure MIX (Q4) draws from at least two of DFMA/reliability/ergonomics
    let parts = assembleQ(tags, blk.target);
    if(blk.tag==="MIX"){
      const groups={}; parts.forEach(p=>groups[p.block]=1);
      if(Object.keys(groups).length<2){ parts = pickMix(blk.target); }
    }
    return {label:blk.label, parts:parts, total:parts.reduce((s,p)=>s+p.marks,0)};
  });
};
function pickMix(target){
  const e=U.shuffle(window.PARTS.filter(p=>p.block==='E'));
  const f=U.shuffle(window.PARTS.filter(p=>p.block==='F'));
  const g=U.shuffle(window.PARTS.filter(p=>p.block==='G'));
  const parts=[e[0],f[0],g[0]].filter(Boolean);
  return parts;
}

})();
