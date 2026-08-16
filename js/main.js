/* FARHAN PORTFOLIO — main.js */
(function () {
  'use strict';

  var SKILLS = [
    ['HTML',96],['CSS',93],['JavaScript',90],['TypeScript',85],['Python',87],
    ['Prompt Engineering',94],['N8N',86],['Zapier',88],['Modern Python Web Dev',84],
    ['Web Development',92],['API Integration',88],['AI Chatbot Development',89],
    ['Full Stack Development',86],['Backend Development',85],['Frontend Development',90]
  ];
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function(s,c){ return (c||document).querySelector(s); };
  var $$ = function(s,c){ return Array.prototype.slice.call((c||document).querySelectorAll(s)); };
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}

  function initPreloader(){
    var p=$('#preloader'); if(!p)return;
    var hide=function(){p.classList.add('done');};
    setTimeout(hide,3500); window.addEventListener('load',function(){setTimeout(hide,300);});
  }

  function initHeader(){
    var h=$('#header'),t=$('#navToggle'),m=$('#navMenu');
    function scroll(){if(h)h.classList.toggle('scrolled',window.scrollY>40);}
    window.addEventListener('scroll',scroll,{passive:true});scroll();
    if(!t||!m)return;
    t.addEventListener('click',function(){var o=m.classList.toggle('open');t.classList.toggle('open',o);t.setAttribute('aria-expanded',o?'true':'false');});
    $$('.nav-link',m).forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');t.classList.remove('open');t.setAttribute('aria-expanded','false');});});
  }

  function initScrollspy(){
    var sections=$$('main section[id]'),links=$$('.nav-link[href^="#"]');if(!sections.length)return;
    function update(){var pos=window.scrollY+140,current=sections[0].id;sections.forEach(function(s){if(s.offsetTop<=pos)current=s.id;});links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+current);});}
    window.addEventListener('scroll',update,{passive:true});update();
  }

  function initTyping(){
    var text=$('#typedText'),line=$('#revealLine');if(!text||!line)return;
    var full='Hi, I am Farhan. I am 30 years old.';
    if(reduceMotion){text.textContent=full;line.classList.add('show');return;}
    text.textContent='';var i=0;
    function tick(){if(i>=full.length){setTimeout(function(){line.classList.add('show');},400);return;}i++;text.textContent=full.slice(0,i);setTimeout(tick,50+(full[i-1]==='.'?300:Math.random()*40));}
    setTimeout(tick,400);
  }

  function initReveal(){
    var els=$$('.reveal');if(!els.length)return;
    if(!('IntersectionObserver'in window)||reduceMotion){els.forEach(function(e){e.classList.add('visible');});return;}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(e){var d=parseInt(e.getAttribute('data-delay'),10);if(!isNaN(d))e.style.transitionDelay=(d*.12)+'s';io.observe(e);});
  }

  function initSkills(){
    var grid=$('#skillsGrid');if(!grid)return;
    SKILLS.forEach(function(s){var level=s[1],label=level>=90?'Expert':level>=75?'Advanced':level>=55?'Intermediate':'Beginner';var e=document.createElement('div');e.className='skill-item reveal';e.innerHTML='<div class="skill-head"><span class="skill-name"><span class="skill-dot"></span>'+esc(s[0])+'</span><span class="skill-level">'+level+'% · '+label+'</span></div><div class="skill-bar"><span class="skill-bar-fill" data-level="'+level+'"></span></div>';grid.appendChild(e);});
    $$('.skill-item',grid).forEach(function(e){var f=$('.skill-bar-fill',e);if(f){f.style.width=f.dataset.level+'%';}});
  }

  function openProject(p){
    var m=$('#projectModal');if(!m)return;
    var t=$('#modalTitle'),d=$('#modalDescription'),i=$('#modalImage'),tags=$('#modalTags');
    if(t)t.textContent=p.title;if(d)d.textContent=p.longDescription||p.description;if(i){i.src=p.image;i.alt=p.title;}if(tags)tags.innerHTML=(p.tags||[]).map(function(x){return '<span class="project-tag">'+esc(x)+'</span>';}).join('');
    m.classList.add('open');document.body.classList.add('modal-open');
  }
  function initProjects(){
    var g=$('#projectsGrid');if(!g)return;
    if(typeof PROJECTS==='undefined'||!PROJECTS.length){g.innerHTML='<p class="projects-note">No projects found.</p>';return;}
    PROJECTS.forEach(function(p,n){var c=document.createElement('article');c.className='project-card reveal';c.setAttribute('role','button');c.setAttribute('tabindex','0');c.setAttribute('data-delay',n%3);c.innerHTML='<div class="project-image-wrap"><img class="project-image" src="'+esc(p.image)+'" alt="'+esc(p.title)+'" loading="lazy"><div class="project-overlay"><span>View project <span aria-hidden="true">↗</span></span></div></div><div class="project-body"><h3>'+esc(p.title)+'</h3><p>'+esc(p.description)+'</p><div class="project-tags">'+(p.tags||[]).map(function(x){return '<span class="project-tag">'+esc(x)+'</span>';}).join('')+'</div></div>';c.addEventListener('click',function(){openProject(p);});c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();openProject(p);}});g.appendChild(c);});
  }

  function initModal(){
    var m=$('#projectModal');if(!m)return;
    var hide=function(){m.classList.remove('open');document.body.classList.remove('modal-open');};
    var c=$('.modal-close',m),b=$('.modal-backdrop',m);if(c)c.addEventListener('click',hide);if(b)b.addEventListener('click',hide);document.addEventListener('keydown',function(e){if(e.key==='Escape')hide();});
  }

  /* Contact form: Web3Forms endpoint + the user's access key. The old code
     showed "Message sent" for any HTTP 200 response. This version checks the
     API's actual success flag before showing success. */
  function initContact(){
    var form=$('#contactForm');if(!form)return;
    var name=$('#contactName'),email=$('#contactEmail'),msg=$('#contactMessage'),btn=$('#contactSubmit'),status=$('#formStatus');
    var endpoint='https://api.web3forms.com/submit';
    var accessKey='99b9c475-6d69-4d35-b369-4934590623c4';
    function error(input,el,text){if(input)input.classList.toggle('invalid',!!text);if(el)el.textContent=text||'';}
    function validate(){
      var ok=true,n=name.value.trim(),em=email.value.trim(),m=msg.value.trim();
      if(n.length<2){error(name,$('#nameError'),'Please enter your name.');ok=false;}else error(name,$('#nameError'),'');
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)){error(email,$('#emailError'),'Please enter a valid email.');ok=false;}else error(email,$('#emailError'),'');
      if(m.length<10){error(msg,$('#messageError'),'Message should be at least 10 characters.');ok=false;}else error(msg,$('#messageError'),'');
      return ok;
    }
    form.addEventListener('submit',function(e){
      e.preventDefault();
      if(!validate())return;
      btn.disabled=true;btn.classList.add('loading');status.textContent='Sending...';status.className='form-status';
      var data=new FormData(form);
      data.set('access_key',accessKey);
      data.set('subject','New Portfolio Contact Message');
      data.set('from_name','Farhan Portfolio');
      data.set('replyto',email.value.trim());
      fetch(endpoint,{method:'POST',body:data,headers:{Accept:'application/json'}})
        .then(function(r){return r.json().then(function(j){return {ok:r.ok,data:j};}).catch(function(){return {ok:r.ok,data:{}};});})
        .then(function(result){
          if(!result.ok||result.data.success!==true)throw new Error(result.data.message||'Message could not be sent.');
          form.reset();status.textContent='✓ Message sent! I\'ll get back to you soon.';status.className='form-status success';
        })
        .catch(function(err){console.error('Contact form error:',err);status.textContent='✗ '+(err.message||'Could not send the message. Please try again.');status.className='form-status error';})
        .finally(function(){btn.disabled=false;btn.classList.remove('loading');});
    });
  }

  function initMarquee(){var t=$('.marquee-track');if(t)t.innerHTML+=t.innerHTML;}
  function initCounters(){if(reduceMotion)return;$$('.hero-stats strong').forEach(function(e){var target=parseInt(e.textContent,10);if(!target)return;var start=null;e.textContent='0'+e.textContent.replace(/[0-9]/g,'');function step(ts){if(!start)start=ts;var p=Math.min((ts-start)/1200,1),v=Math.round(target*(1-Math.pow(1-p,3)));e.textContent=v+(target>=100?'%':'+');if(p<1)requestAnimationFrame(step);}requestAnimationFrame(step);});}

  function boot(){initPreloader();initHeader();initScrollspy();initTyping();initReveal();initSkills();initProjects();initModal();initContact();initMarquee();initCounters();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
