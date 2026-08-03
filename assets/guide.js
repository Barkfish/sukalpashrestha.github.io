/* ==========================================================================
   MEPP 436 study guide — collapsible topics, sidebar, search, dark mode.
   Transforms the flat <h2 class="sec"> sections in #sgMain into an accordion
   and builds the sidebar table of contents. Requires app.js (window.fig).
   ========================================================================== */
(function(){
"use strict";
function byId(id){return document.getElementById(id);}

function syncSide(){
  var side=byId('sgSide'); if(!side) return;
  side.querySelectorAll('a').forEach(function(a){
    var sec=byId(a.dataset.id);
    a.classList.toggle('on', !!(sec && sec.classList.contains('open')));
  });
}

function init(){
  // 1 · fill figures (images from slides / SVG fallbacks)
  if(window.fig){
    document.querySelectorAll('[data-fig]').forEach(function(el){
      el.innerHTML = window.fig(el.dataset.fig, el.dataset.cap||'');
    });
  }
  var main=byId('sgMain'); var side=byId('sgSide');
  if(!main) return;

  // 2 · group each <h2 class="sec"> + following nodes into a .topic
  var nodes=Array.prototype.slice.call(main.childNodes);
  var topics=[]; var cur=null;
  nodes.forEach(function(n){
    if(n.nodeType===1 && n.classList && n.classList.contains('sec')){
      cur={head:n, body:[]}; topics.push(cur);
    } else if(cur){ cur.body.push(n); }
  });
  main.innerHTML='';
  var sideHTML='';
  topics.forEach(function(t,i){
    var id=t.head.id||('topic'+i);
    var clone=t.head.cloneNode(true);
    var ne=clone.querySelector('.num'); var num=ne?ne.textContent.trim():String(i+1);
    if(ne) ne.remove();
    var title=clone.textContent.trim();
    var sec=document.createElement('section'); sec.className='topic'; sec.id=id;
    var head=document.createElement('div'); head.className='topic-head';
    head.innerHTML='<span class="tnum">'+num+'</span><span class="ttext">'+title+'</span><span class="chev">▶</span>';
    var body=document.createElement('div'); body.className='topic-body';
    t.body.forEach(function(n){ body.appendChild(n); });
    head.addEventListener('click',function(){ sec.classList.toggle('open'); syncSide(); });
    sec.appendChild(head); sec.appendChild(body); main.appendChild(sec);
    sideHTML+='<a href="#'+id+'" data-id="'+id+'">'+num+' · '+title+'</a>';
  });
  if(side) side.innerHTML=sideHTML;

  // 3 · sidebar navigation
  if(side) side.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(e){
      e.preventDefault();
      var sec=byId(a.dataset.id); if(!sec) return;
      sec.classList.add('open'); syncSide();
      sec.querySelector('.topic-head').scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // 4 · open first topic (or the one named in the URL hash)
  var hash=location.hash.slice(1);
  var target=hash && byId(hash);
  if(target && target.classList.contains('topic')) target.classList.add('open');
  else { var f=document.querySelector('.topic'); if(f) f.classList.add('open'); }
  syncSide();

  // 5 · expand / collapse all
  var ex=byId('sgExpand'), co=byId('sgCollapse');
  if(ex) ex.onclick=function(){document.querySelectorAll('.topic').forEach(function(t){t.classList.add('open');});syncSide();};
  if(co) co.onclick=function(){document.querySelectorAll('.topic').forEach(function(t){t.classList.remove('open');});syncSide();};

  // 6 · search — filter topics + sidebar, auto-open matches
  var search=byId('sgSearch');
  if(search) search.addEventListener('input',function(){
    var q=search.value.trim().toLowerCase();
    document.querySelectorAll('.topic').forEach(function(sec){
      var hit=!q || sec.textContent.toLowerCase().indexOf(q)>=0;
      sec.classList.toggle('nomatch', !hit);
      if(q && hit) sec.classList.add('open');
    });
    if(side) side.querySelectorAll('a').forEach(function(a){
      var sec=byId(a.dataset.id);
      a.classList.toggle('hide', !!(sec && sec.classList.contains('nomatch')));
    });
  });

  // 7 · dark mode (persisted)
  var dk=byId('sgDark');
  function setTheme(on){
    document.documentElement.setAttribute('data-theme', on?'dark':'light');
    if(dk) dk.textContent = on?'☀ Light':'🌙 Dark';
    try{ localStorage.setItem('mepp436-theme', on?'dark':'light'); }catch(e){}
  }
  var saved=null; try{ saved=localStorage.getItem('mepp436-theme'); }catch(e){}
  if(saved==='dark') setTheme(true);
  if(dk) dk.onclick=function(){ setTheme(document.documentElement.getAttribute('data-theme')!=='dark'); };
}

if(document.readyState!=='loading') init();
else document.addEventListener('DOMContentLoaded', init);
})();
