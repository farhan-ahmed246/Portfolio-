/* FARHAN PORTFOLIO - main.js */
(function () {
  'use strict';

  var SKILLS = [
    ['HTML', 96], ['CSS', 93], ['JavaScript', 90], ['TypeScript', 85],
    ['Python', 87], ['Prompt Engineering', 94], ['N8N', 86], ['Zapier', 88],
    ['Modern Python Web Dev', 84], ['Web Development', 92], ['API Integration', 90],
    ['AI Chatbot Development', 89], ['Full Stack Development', 86], ['Backend Development', 85],
    ['Frontend Development', 90], ['Next.js', 90], ['Git', 90], ['Workflows', 90],
    ['AI Developer', 90], ['Problem Solving', 90], ['GitHub Deployment', 90], ['Streamlit', 88],
    ['FastAPI', 84], ['Node.js', 82], ['Tailwind CSS', 85], ['Firebase', 80],
    ['REST APIs', 88], ['GitHub Actions', 82], ['AI Agents', 86], ['UI/UX', 82]
  ];

  var INITIAL_SKILLS = 10;
  var INITIAL_PROJECTS = 10;
  var skillCount = INITIAL_SKILLS;
  var projectCount = INITIAL_PROJECTS;

  function one(selector, root) { return (root || document).querySelector(selector); }
  function all(selector, root) { return Array.prototype.slice.call((root || document).querySelectorAll(selector)); }
  function escapeHtml(value) { return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  function preloader() {
    var loader = one('#preloader'); if (!loader) return;
    function hide() { loader.classList.add('done'); loader.style.pointerEvents = 'none'; }
    setTimeout(hide, 1000); window.addEventListener('load', hide);
  }

  function header() {
    var headerEl = one('#header'), toggle = one('#navToggle'), menu = one('#navMenu');
    if (headerEl) window.addEventListener('scroll', function () { headerEl.classList.toggle('scrolled', window.scrollY > 40); }, { passive: true });
    if (!toggle || !menu) return;
    toggle.addEventListener('click', function () { var open = menu.classList.toggle('open'); toggle.classList.toggle('open', open); toggle.setAttribute('aria-expanded', String(open)); });
    all('.nav-link', menu).forEach(function (link) { link.addEventListener('click', function () { menu.classList.remove('open'); toggle.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }); });
  }

  function navigation() {
    all('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        var id = link.getAttribute('href'); if (!id || id === '#') return;
        var target = one(id); if (!target) return; event.preventDefault();
        var headerEl = one('#header'), offset = (headerEl ? headerEl.offsetHeight : 70) + 10;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' }); history.replaceState(null, '', id);
      });
    });
  }

  function scrollSpy() {
    var sections = all('main section[id]'), links = all('.nav-link[href^="#"]'); if (!sections.length || !links.length) return;
    function update() { var point = window.scrollY + window.innerHeight * 0.32, current = sections[0].id; sections.forEach(function (section) { if (section.offsetTop <= point) current = section.id; }); links.forEach(function (link) { link.classList.toggle('active', link.getAttribute('href') === '#' + current); }); }
    window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update); update();
  }

  function typing() {
    var text = one('#typedText'), reveal = one('#revealLine'); if (!text || !reveal) return;
    var value = 'Hi, I am Farhan.'; text.textContent = ''; var index = 0;
    function typeNext() { if (index >= value.length) { reveal.classList.add('show'); return; } index += 1; text.textContent = value.substring(0, index); setTimeout(typeNext, 35); }
    typeNext();
  }

  function profileImage() {
    var hero = one('.hero-inner'), badge = one('.hero-badge', hero); if (!hero || !badge || one('.hero-profile', hero)) return;
    var wrap = document.createElement('div'); wrap.className = 'hero-profile';
    wrap.innerHTML = '<img src="https://i.ibb.co/jcWYBQ2/farhan-fiver-profile-pic.png" alt="Farhan Ahmed profile photo" loading="eager">'; hero.insertBefore(wrap, badge);
    var style = document.createElement('style'); style.textContent = '.hero-profile{display:flex;justify-content:center;margin:0 0 28px}.hero-profile img{width:150px;height:150px;object-fit:cover;border-radius:50%;border:3px solid rgba(34,211,238,.75);box-shadow:0 0 0 8px rgba(139,92,246,.10),0 18px 55px rgba(34,211,238,.22);background:#0c1322}.hero-profile img:hover{transform:translateY(-3px);transition:transform .25s ease}@media(max-width:600px){.hero-profile img{width:120px;height:120px}}'; document.head.appendChild(style);
  }

  function reveal() {
    var elements = all('.reveal');
    if (!('IntersectionObserver' in window)) { elements.forEach(function (element) { element.classList.add('visible'); }); return; }
    var observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.08 });
    elements.forEach(function (element) { observer.observe(element); });
  }

  function addToggle(parent, className, label, action) {
    var old = one('.' + className); if (old && old.parentNode) old.parentNode.remove();
    var holder = document.createElement('div'); holder.className = 'collection-toggle'; var button = document.createElement('button'); button.type = 'button'; button.className = 'btn btn-ghost ' + className; button.textContent = label; button.addEventListener('click', action); holder.appendChild(button); parent.parentNode.appendChild(holder);
  }

  function renderSkills() {
    var grid = one('#skillsGrid'); if (!grid) return; grid.innerHTML = '';
    SKILLS.slice(0, skillCount).forEach(function (skill) {
      var item = document.createElement('div'); item.className = 'skill-item visible';
      item.innerHTML = '<div class="skill-head"><span class="skill-name"><span class="skill-dot"></span>' + escapeHtml(skill[0]) + '</span><span class="skill-level">' + skill[1] + '%</span></div><div class="skill-bar"><span class="skill-bar-fill" style="width:' + skill[1] + '%"></span></div>'; grid.appendChild(item);
    });
    addToggle(grid, 'skills-toggle', skillCount < SKILLS.length ? 'Show More' : 'Show Less', function () { skillCount = skillCount < SKILLS.length ? Math.min(skillCount + 10, SKILLS.length) : INITIAL_SKILLS; renderSkills(); });
  }

  function renderProjects() {
    var grid = one('#projectsGrid'); if (!grid || typeof PROJECTS === 'undefined') return; grid.innerHTML = '';
    PROJECTS.slice(0, projectCount).forEach(function (project) {
      var card = document.createElement('article'); card.className = 'project-card reveal visible'; card.tabIndex = 0; card.setAttribute('role', 'button');
      card.innerHTML = '<div class="project-image-wrap"><img class="project-image" src="' + escapeHtml(project.image) + '" alt="' + escapeHtml(project.title) + '" loading="lazy" decoding="async"><div class="project-overlay"><span>View project</span></div></div><div class="project-body"><h3>' + escapeHtml(project.title) + '</h3><p>' + escapeHtml(project.description) + '</p><div class="project-tags">' + (project.tags || []).map(function (tag) { return '<span class="project-tag">' + escapeHtml(tag) + '</span>'; }).join('') + '</div></div>';
      function open() { openProject(project); } card.addEventListener('click', open); card.addEventListener('keydown', function (event) { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } }); grid.appendChild(card);
    });
    addToggle(grid, 'projects-toggle', projectCount < PROJECTS.length ? 'Show More' : 'Show Less', function () { projectCount = projectCount < PROJECTS.length ? Math.min(projectCount + 10, PROJECTS.length) : INITIAL_PROJECTS; renderProjects(); });
  }

  function openProject(project) {
    var modal = one('#projectModal'); if (!modal) return;
    var image = one('#modalImage'), title = one('#modalTitle'), description = one('#modalDesc'), tags = one('#modalTags');
    if (image) { image.src = project.image; image.alt = project.title; } if (title) title.textContent = project.title; if (description) description.textContent = project.longDescription || project.description;
    if (tags) tags.innerHTML = (project.tags || []).map(function (tag) { return '<span class="project-tag">' + escapeHtml(tag) + '</span>'; }).join('');
    modal.hidden = false; modal.classList.add('open'); document.body.classList.add('modal-open');
  }

  function modal() {
    var modalEl = one('#projectModal'); if (!modalEl) return;
    function close() { modalEl.classList.remove('open'); modalEl.hidden = true; document.body.classList.remove('modal-open'); }
    var closeButton = one('.modal-close', modalEl), backdrop = one('.modal-backdrop', modalEl), alternate = one('#modalCloseAlt');
    if (closeButton) closeButton.addEventListener('click', close); if (backdrop) backdrop.addEventListener('click', close); if (alternate) alternate.addEventListener('click', close);
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape' && !modalEl.hidden) close(); });
  }

  function contact() {
    var form = one('#contactForm'); if (!form) return; var status = one('#formStatus'), button = one('#contactSubmit');
    form.addEventListener('submit', function (event) {
      event.preventDefault(); if (button) button.disabled = true; if (status) status.textContent = 'Sending...';
      var data = new FormData(form); data.set('access_key', '99b9c475-6d69-4d35-b369-4934590623c4'); data.set('subject', 'New Portfolio Contact Message');
      fetch('https://api.web3forms.com/submit', { method: 'POST', body: data, headers: { Accept: 'application/json' } }).then(function (response) { return response.json(); }).then(function (result) { if (!result.success) throw new Error(result.message || 'Message could not be sent'); form.reset(); if (status) { status.textContent = 'Message sent! I will get back to you soon.'; status.className = 'form-status success'; } }).catch(function (error) { if (status) { status.textContent = 'Message failed: ' + error.message; status.className = 'form-status error'; } }).finally(function () { if (button) button.disabled = false; });
    });
  }

  function marquee() { var track = one('.marquee-track'); if (track) track.innerHTML = track.innerHTML + track.innerHTML; }

  function minecraftCursor() {
    var isTouch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;
    var cursorUrl = 'assets/sword-cursor-32.png?v=3';
    var style = document.createElement('style');
    style.id = 'minecraft-sword-cursor-style';
    style.textContent = 'html,body,body *{cursor:url("' + cursorUrl + '") 2 2, auto !important;} input,textarea,select{cursor:text !important;} button,a,[role="button"]{cursor:url("' + cursorUrl + '") 2 2, pointer !important;}';
    document.head.appendChild(style);
  }

  function start() {
    preloader(); header(); navigation(); scrollSpy(); profileImage(); typing(); renderSkills(); renderProjects(); modal(); contact(); marquee(); minecraftCursor(); setTimeout(reveal, 50);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
}());
