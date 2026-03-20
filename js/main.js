/* ─── Portfolio JS ─── */
/* To update content: edit data/portfolio.json AND update the INLINE_DATA below */

const INLINE_DATA = {
  "profile": {
    "name": "Sukalpa Das Shrestha",
    "tagline": "Video Editor · Audio Engineer · Podcast Producer",
    "location": "Budhanilkantha, Kathmandu",
    "bio": "Mechanical Engineering student at Kathmandu University with over 10 years of experience in electronics, robotics, and creative media. I specialise in video editing, audio recording and engineering, podcast production, and event audio management.",
    "email": "shrestha.sukalpa@gmail.com",
    "instagram": "https://instagram.com/yourhandle",
    "youtube": "https://youtube.com/yourchannel"
  },
  "services": [
    { "id": "video", "icon": "▶", "title": "Video Editing", "description": "From raw footage to polished final cut. Corporate events, AGMs, drone footage, documentary, and podcast video for institutions and independent clients." },
    { "id": "audio", "icon": "◉", "title": "Audio Engineering", "description": "Professional recording, mixing, mastering, noise reduction, and sound design. Voice-over narration, music production, and broadcast-ready masters." },
    { "id": "podcast", "icon": "◎", "title": "Podcast Production", "description": "End-to-end podcast production — recording, audio engineering, editing, music, and delivery-ready masters. Full service from concept to platform." }
  ],
  "work": {
    "video": [
      { "id": "v1", "title": "Dr. Anish Ghimire: A Conversation about Environmental Engineering", "client": "FECAM — KU Environmental Engineering & Science Club", "description": "Digo Podcast Episode 1 — Video editing, audio engineering, and production. Conversation with Dr. Anish Ghimire, Environmental Engineer and Coordinator of the Environmental Engineering program at KU.", "type": "youtube", "url": "https://youtu.be/OGbaB13vaYU", "tags": ["Digo Podcast", "FECAM", "Episode 1", "Interview"] },
      { "id": "v2", "title": "Dr. Kumud Raj Kafle: Environmental Studies and Seismic Risks of Nepal", "client": "FECAM — KU Environmental Engineering & Science Club", "description": "Digo Podcast Episode 2 — Full video and audio production. Dr. Kumud Raj Kafle discusses environmental studies and the seismic risks facing Nepal.", "type": "youtube", "url": "https://youtu.be/Z5D9CHxrc1g", "tags": ["Digo Podcast", "FECAM", "Episode 2", "Interview"] },
      { "id": "v3", "title": "Dr. Bikash Adhikari: In Conversation with the Vice-Chairperson of NEC", "client": "FECAM — KU Environmental Engineering & Science Club", "description": "Digo Podcast — Video editing, audio mixing, and intro music. Conversation with Dr. Bikash Adhikari, Vice-Chairperson of the Nepal Engineering Council.", "type": "youtube", "url": "https://youtu.be/KojcgaWzxVI", "tags": ["Digo Podcast", "FECAM", "NEC", "Interview"] },
      { "id": "v4", "title": "Dr. Dhundi Raj Pathak: President of CREEW", "client": "FECAM — KU Environmental Engineering & Science Club", "description": "Digo Podcast — Conversation with Dr. Dhundi Raj Pathak, President of the Center of Research for Environment, Energy & Water (CREEW). Full video and audio production.", "type": "youtube", "url": "https://youtu.be/PwHWStQWshA", "tags": ["Digo Podcast", "FECAM", "CREEW", "Interview"] },
      { "id": "v5", "title": "Sanima Hydro — AGM & Marketing Videos", "client": "Sanima Hydro", "description": "Drone recording, directing, and editing for shareholder Annual General Meetings and marketing showcases of hydropower projects. Voice-over narration recording included.", "type": "local", "url": "", "tags": ["Corporate", "Drone", "AGM", "Hydropower"] },
      { "id": "v6", "title": "KU Robotics Club", "client": "Kathmandu University Robotics Club", "description": "Recording and video production for KURC events, showcases, and club activities. Sponsorship creative content and club branding.", "type": "local", "url": "", "tags": ["University", "Robotics", "Event"] }
    ],
    "audio": [
      { "id": "a1", "title": "Digo Podcast — Audio Engineering & Music", "client": "FECAM / ENE Club, Kathmandu University", "description": "Full audio recording, editing, mixing, and mastering for the Digo Podcast series. Composed and produced original intro music and background tracks for all episodes.", "type": "audio", "url": "", "duration": "--:--", "tags": ["Podcast", "Mixing", "Music Production", "Mastering"] },
      { "id": "a2", "title": "Sanima Hydro — Voice-Over Narration", "client": "Sanima Hydro", "description": "Professional narration recording and audio engineering for hydropower project showcase videos. Full recording chain — mic setup, noise reduction, EQ, compression, and delivery.", "type": "audio", "url": "", "duration": "--:--", "tags": ["Voice-Over", "Corporate", "Narration"] },
      { "id": "a3", "title": "Event Audio Management", "client": "Aaviyanta Multipurpose Hall / Kamal Mani Theatre", "description": "Stage sound organisation and technical direction for live events. Full PA setup, mix, and live audio engineering for performances and theatrical productions.", "type": "audio", "url": "", "duration": "--:--", "tags": ["Live Sound", "Event", "Theatre"] }
    ],
    "podcast": [
      { "id": "p1", "title": "Hospital Podcast Series", "client": "Healthcare Institution — Kathmandu", "description": "Ongoing weekly podcast production — 6 episodes per week, 40 minutes each. Full service: recording, audio engineering, editing, and delivery. Institutional contract.", "type": "audio", "url": "", "duration": "--:--", "tags": ["Ongoing", "Healthcare", "6 eps/week"] },
      { "id": "p2", "title": "Digo Podcast Series", "client": "FECAM — KU Environmental Engineering & Science Club", "description": "Full podcast production for the Digo Podcast — recording, audio engineering, original intro music composition, video editing, and thumbnail design. Multi-episode series featuring leading engineers and researchers.", "type": "audio", "url": "", "duration": "--:--", "tags": ["Digo Podcast", "FECAM", "Music Production"] }
    ]
  },
  "experience": [
    { "role": "Video Editor & Audio Engineer", "org": "Sanima Hydro", "period": "Professional", "desc": "Drone recording, directing, and editing for shareholder AGMs and hydropower marketing videos. Professional voice-over narration recording and engineering." },
    { "role": "Audio Recording & Video Production", "org": "Digo Podcast / FECAM, KU", "period": "Professional", "desc": "Full podcast production — audio engineering, original music composition, video editing, and thumbnail design for multi-episode series." },
    { "role": "Technical Director — Sound & Lighting", "org": "Kamal Mani Theatre", "period": "Event", "desc": "Directed and executed all aspects of sound and lighting production for theatrical performances, ensuring seamless technical operations." },
    { "role": "Stage Sound Organiser", "org": "Aaviyanta Multipurpose Hall", "period": "Event", "desc": "Managed and coordinated audio setup and operations for major events." },
    { "role": "Robotics & IoT Instructor", "org": "Kathmandu University / Rato Bangala School", "period": "2019–2024", "desc": "Taught IoT, Basic Robotics, and Electronics workshops at KU Dhulikhel, KU School of Arts, KU High School, and RBS." },
    { "role": "Executive Member & Project Lead", "org": "KU Robotics Club (KURC)", "period": "1 year", "desc": "Project Lead for Autonomous Submarine. Sponsorship & Creative Team Management. KURC–KUANA Collaboration Lead." }
  ],
  "gear": ["Sony a6700","Sigma 16mm f/1.4 DC DN","Tamron 70-180mm f/2.8","DJI Mic Mini","Zoom H8","Shure SM57","Shure SM58","AKG P420","Smallrig Cage + Top Handle","DJI Mini 3 Drone","Video Tripod"],
  "software": ["DaVinci Resolve","Final Cut Pro","Adobe Audition","iZotope RX","Reaper","Photoshop","Blender","Fusion 360"]
};

let DATA = {};

async function init() {
  // Try loading from JSON file first (allows easy updates)
  try {
    const res = await fetch('data/portfolio.json');
    if (res.ok) {
      const text = await res.text();
      if (text && text.trim().startsWith('{')) {
        DATA = JSON.parse(text);
      }
    }
  } catch(e) { /* fall through */ }

  // Fall back to inline data if fetch failed or returned empty
  if (!DATA.profile) DATA = INLINE_DATA;

  render();
  bindEvents();
  initScrollReveal();
  initScrollSpy();
}

function render() {
  renderProfile();
  renderTicker();
  renderServices();
  renderWork();
  renderExperience();
  renderGear();
  renderContact();
  renderFooter();
}

function renderProfile() {
  const p = DATA.profile;
  if (!p) return;
  document.title = p.name + ' — Portfolio';
  const nameEl = document.getElementById('h-name');
  if (nameEl) nameEl.innerHTML = formatName(p.name);
  const tagEl = document.getElementById('h-tagline');
  if (tagEl) tagEl.textContent = p.tagline;
  const locEl = document.getElementById('h-location');
  if (locEl) locEl.textContent = p.location;
}

function formatName(name) {
  const parts = name.trim().split(' ');
  if (parts.length === 1) return '<em>' + parts[0] + '</em>';
  // "Sukalpa Das Shrestha" → "Sukalpa Das" + "Shrestha"
  const last = parts.pop();
  return parts.join(' ') + '<br><em>' + last + '</em>';
}

function renderTicker() {
  const items = [...(DATA.gear||[]), ...(DATA.software||[]), 'Audio Engineering', 'Video Editing', 'Podcast Production', 'Kathmandu, Nepal', 'FECAM', 'Digo Podcast', 'Sanima Hydro'];
  const el = document.getElementById('ticker-track');
  if (!el) return;
  const doubled = [...items, ...items];
  el.innerHTML = doubled.map(i => '<span>' + i + ' &nbsp;·&nbsp; </span>').join('');
}

function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = (DATA.services||[]).map(s => `
    <div class="service-card reveal">
      <span class="service-icon">${s.icon}</span>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
    </div>`).join('');
}

function renderWork() {
  renderVideoPanel();
  renderAudioPanel();
  renderPodcastPanel();
}

function getYouTubeId(url) {
  if (!url) return null;
  const s = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (s) return s[1];
  const l = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (l) return l[1];
  return null;
}

function renderVideoPanel() {
  const panel = document.getElementById('panel-video');
  if (!panel) return;
  const items = DATA.work?.video || [];
  if (!items.length) { panel.innerHTML = emptyState('No video work yet', 'Edit portfolio.json to add projects'); return; }
  panel.innerHTML = '<div class="video-grid">' + items.map(v => {
    const ytId = v.type === 'youtube' ? getYouTubeId(v.url) : null;
    const thumbSrc = v.thumbnail || (ytId ? 'https://img.youtube.com/vi/' + ytId + '/mqdefault.jpg' : null);
    const thumbHtml = thumbSrc
      ? '<img src="' + thumbSrc + '" alt="' + v.title + '" loading="lazy">'
      : '<div class="video-thumb-placeholder"><span class="thumb-icon">▶</span></div>';
    const clickable = v.url && (v.type === 'youtube');
    return `<div class="video-card reveal"${clickable ? ' onclick="openVideo(this)" style="cursor:pointer"' : ''} data-url="${v.url||''}" data-type="${v.type||'youtube'}">
      <div class="video-thumb">${thumbHtml}${clickable ? '<div class="play-overlay"><div class="play-btn">▶</div></div>' : ''}</div>
      <div class="video-info">
        <div class="video-client">${v.client||''}</div>
        <h3 class="video-title">${v.title}</h3>
        <p class="video-desc">${v.description||''}</p>
        <div class="video-tags">${(v.tags||[]).map(t => '<span class="tag">'+t+'</span>').join('')}</div>
      </div></div>`;
  }).join('') + '</div>';
}

function renderAudioPanel() {
  const panel = document.getElementById('panel-audio');
  if (!panel) return;
  const items = DATA.work?.audio || [];
  if (!items.length) { panel.innerHTML = emptyState('No audio work yet', 'Edit portfolio.json to add audio samples'); return; }
  panel.innerHTML = '<div class="audio-grid">' + items.map((a, i) => {
    const bars = Array.from({length:36}, () => '<div class="wf-bar" style="height:' + (20+Math.random()*60) + '%"></div>').join('');
    return `<div class="audio-card reveal">
      <div class="audio-header">
        <div class="audio-meta">
          <div class="audio-client">${a.client||''}</div>
          <h3 class="audio-title">${a.title}</h3>
        </div>
        <div class="video-tags">${(a.tags||[]).map(t=>'<span class="tag">'+t+'</span>').join('')}</div>
      </div>
      <p class="audio-desc">${a.description||''}</p>
      ${a.url ? `<div class="audio-player">
        <button class="play-circle" onclick="toggleAudio('aud-${i}',this)">▶</button>
        <div class="waveform-bar" onclick="seekAudio(event,'aud-${i}',this)">
          <div class="audio-progress" id="ap-${i}"></div>
          <div class="waveform-visual">${bars}</div>
        </div>
        <span class="audio-duration">${a.duration||'--:--'}</span>
      </div>
      <audio id="aud-${i}" src="${a.url}" data-progid="ap-${i}"></audio>` : `<p style="font-family:var(--ff-mono);font-size:0.7rem;color:var(--text3);letter-spacing:0.1em;margin-top:0.5rem">SAMPLE COMING SOON</p>`}
    </div>`;
  }).join('') + '</div>';
}

function renderPodcastPanel() {
  const panel = document.getElementById('panel-podcast');
  if (!panel) return;
  const items = DATA.work?.podcast || [];
  if (!items.length) { panel.innerHTML = emptyState('No podcast work yet', 'Edit portfolio.json to add episodes'); return; }
  panel.innerHTML = '<div class="podcast-grid">' + items.map((p, i) => {
    let player = '';
    if (p.type === 'embed' && p.url) {
      player = '<div class="podcast-embed"><iframe src="' + p.url + '" allow="autoplay; clipboard-write; encrypted-media; fullscreen" loading="lazy"></iframe></div>';
    } else if (p.type === 'audio' && p.url) {
      const bars = Array.from({length:28}, () => '<div class="wf-bar" style="height:' + (20+Math.random()*60) + '%"></div>').join('');
      player = `<div class="audio-player" style="margin-top:1rem">
        <button class="play-circle" onclick="toggleAudio('pod-${i}',this)">▶</button>
        <div class="waveform-bar" onclick="seekAudio(event,'pod-${i}',this)">
          <div class="audio-progress" id="pp-${i}"></div>
          <div class="waveform-visual">${bars}</div>
        </div>
        <span class="audio-duration">${p.duration||'--:--'}</span>
      </div>
      <audio id="pod-${i}" src="${p.url}" data-progid="pp-${i}"></audio>`;
    } else {
      player = '<p style="font-family:var(--ff-mono);font-size:0.7rem;color:var(--text3);letter-spacing:0.1em;margin-top:0.75rem">SAMPLE COMING SOON</p>';
    }
    return `<div class="podcast-card reveal">
      <span class="podcast-icon">◎</span>
      <div class="podcast-client">${p.client||''}</div>
      <h3 class="podcast-title">${p.title}</h3>
      <p class="podcast-desc">${p.description||''}</p>
      <div class="video-tags">${(p.tags||[]).map(t=>'<span class="tag">'+t+'</span>').join('')}</div>
      ${player}</div>`;
  }).join('') + '</div>';
}

function renderExperience() {
  const grid = document.getElementById('exp-grid');
  if (!grid) return;
  const items = DATA.experience || [];
  if (!items.length) { grid.innerHTML = ''; return; }
  grid.innerHTML = items.map(e => `
    <div class="exp-card reveal">
      <div class="exp-role">${e.role}</div>
      <div class="exp-org">${e.org}</div>
      <div class="exp-period">${e.period}</div>
      <p class="exp-desc">${e.desc}</p>
    </div>`).join('');
}

function renderGear() {
  const g = document.getElementById('gear-list');
  const s = document.getElementById('software-list');
  if (g) g.innerHTML = (DATA.gear||[]).map(x => '<li>' + x + '</li>').join('');
  if (s) s.innerHTML = (DATA.software||[]).map(x => '<li>' + x + '</li>').join('');
}

function renderContact() {
  const p = DATA.profile;
  if (!p) return;
  const bio = document.getElementById('c-bio');
  if (bio) bio.textContent = p.bio || '';
  const links = document.getElementById('contact-links');
  if (links) {
    const items = [];
    if (p.email) items.push({ icon: '✉', label: p.email, href: 'mailto:' + p.email });
    if (p.instagram) items.push({ icon: '◈', label: 'Instagram', href: p.instagram });
    if (p.youtube) items.push({ icon: '▶', label: 'YouTube', href: p.youtube });
    links.innerHTML = items.map(l => `<a href="${l.href}" target="_blank" rel="noopener" class="contact-link"><span class="link-icon">${l.icon}</span><span>${l.label}</span></a>`).join('');
  }
  const el = document.getElementById('email-link');
  if (el && p.email) { el.href = 'mailto:' + p.email; el.textContent = p.email; }
}

function renderFooter() {
  const el = document.getElementById('footer-copy');
  if (el) el.textContent = '© ' + new Date().getFullYear() + ' ' + (DATA.profile?.name || 'Portfolio') + ' — All rights reserved';
}

function emptyState(t, s) {
  return '<div class="empty-state"><p class="empty-title">' + t + '</p><p class="empty-sub">' + s + '</p></div>';
}

/* ─── Audio Player ─── */
const audios = {};
function toggleAudio(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  Object.entries(audios).forEach(([k, a]) => {
    if (k !== id && !a.paused) {
      a.pause();
      const b = document.querySelector('[onclick*="' + k + '"]');
      if (b) b.textContent = '▶';
    }
  });
  audios[id] = el;
  if (el.paused) { el.play(); btn.textContent = '⏸'; }
  else           { el.pause(); btn.textContent = '▶'; }
  el.ontimeupdate = () => {
    const pct = (el.currentTime / el.duration) * 100 || 0;
    const prog = document.getElementById(el.dataset.progid);
    if (prog) prog.style.width = pct + '%';
    const wv = el.previousElementSibling?.querySelector('.waveform-visual');
    if (wv) { const bars = wv.querySelectorAll('.wf-bar'); const n = Math.floor(pct/100*bars.length); bars.forEach((b,i) => b.classList.toggle('played', i<n)); }
  };
  el.onended = () => {
    btn.textContent = '▶';
    const prog = document.getElementById(el.dataset.progid);
    if (prog) prog.style.width = '0%';
    const wv = el.previousElementSibling?.querySelector('.waveform-visual');
    if (wv) wv.querySelectorAll('.wf-bar').forEach(b => b.classList.remove('played'));
  };
}
function seekAudio(e, id, bar) {
  const el = document.getElementById(id);
  if (!el || !el.duration) return;
  const r = bar.getBoundingClientRect();
  el.currentTime = ((e.clientX - r.left) / r.width) * el.duration;
}

/* ─── Video Lightbox ─── */
function openVideo(card) {
  const url = card.dataset.url;
  const type = card.dataset.type;
  if (!url) return;
  let embed = url;
  if (type === 'youtube') {
    const id = getYouTubeId(url);
    if (!id) return;
    embed = 'https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0';
  }
  const lb = document.getElementById('lightbox');
  document.getElementById('lb-content').innerHTML = '<iframe src="' + embed + '" allow="autoplay; fullscreen" allowfullscreen></iframe>';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lb-content').innerHTML = '';
  document.body.style.overflow = '';
}

/* ─── Events ─── */
function bindEvents() {
  document.querySelectorAll('.work-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      document.querySelectorAll('.work-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.work-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('panel-' + id).classList.add('active');
      initScrollReveal();
    });
  });
  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', e => { if (e.target === e.currentTarget) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobile-menu');
  burger.addEventListener('click', () => { burger.classList.toggle('open'); menu.classList.toggle('open'); });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { burger.classList.remove('open'); menu.classList.remove('open'); }));
  document.getElementById('nav-logo').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.getElementById('contact-form').addEventListener('submit', e => {
    const btn = document.querySelector('#contact-form button[type="submit"]');
    btn.textContent = 'Sending...'; btn.disabled = true;
    setTimeout(() => { btn.textContent = 'Sent ✓'; btn.style.background = 'var(--green)'; }, 1500);
  });
}

function initScrollSpy() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 60); }, { passive: true });
}

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', init);
