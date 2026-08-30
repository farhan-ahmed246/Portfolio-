(function () {
  'use strict';

  var links = {
    'Currency Exchange App': 'https://github.com/farhan-ahmed246/Currency-Exchange-App',
    'PDF Generator': 'https://github.com/farhan-ahmed246/PDF-Generator',
    'Airplane Ticket Registration System': 'https://github.com/farhan-ahmed246/Airplane-Ticket-Registration',
    'AI Quiz Game': 'https://github.com/farhan-ahmed246/AI-Quiz-Game',
    'Super Collection — E-Commerce Store': 'https://github.com/farhan-ahmed246/Super-Collection',
    'Personal AI Engineer Portfolio': 'https://github.com/farhan-ahmed246/Portfolio-',
    'Expense Tracker': 'https://github.com/farhan-ahmed246/Expense-Tracker-Python',
    'Bank Management System': 'https://github.com/farhan-ahmed246/Bank-Management-System',
    'Voting System': 'https://github.com/farhan-ahmed246/-Voting-System',
    'Password Manager': 'https://github.com/farhan-ahmed246/Password-Manager',
    'Contact Management System': 'https://github.com/farhan-ahmed246/Contact-Management-System',
    'Hotel Management System': 'https://github.com/farhan-ahmed246/Hotel-Management-System'
  };

  function addProjects() {
    if (typeof PROJECTS === 'undefined') return;

    PROJECTS.forEach(function (project) {
      if (links[project.title]) project.github = links[project.title];
    });

    PROJECTS.push(
      { title: 'Expense Tracker', description: 'A practical command-line expense tracker for recording, viewing, deleting and summarizing personal spending.', longDescription: 'A pure Python CLI application with JSON persistence, expense categories, totals and simple reporting.', image: 'assets/project-report.svg?v=20260830', tags: ['Python', 'CLI', 'JSON', 'File Handling'], github: links['Expense Tracker'] },
      { title: 'Bank Management System', description: 'A Python banking application for creating accounts, deposits, withdrawals and balance management.', longDescription: 'A practical Python project demonstrating account management, validation, transactions and local JSON storage.', image: 'assets/project-python.svg?v=20260830', tags: ['Python', 'OOP', 'JSON', 'Data Management'], github: links['Bank Management System'] },
      { title: 'Voting System', description: 'A command-line voting application with vote casting, results, percentages, winner detection and reset functionality.', longDescription: 'A pure Python voting project demonstrating menus, validation, persistent JSON data and result calculations.', image: 'assets/project-report.svg?v=20260830', tags: ['Python', 'CLI', 'JSON', 'Voting'], github: links['Voting System'] },
      { title: 'Password Manager', description: 'A local Python password manager with secure random password generation, search and account management.', longDescription: 'A learning-focused CLI password manager using Python secrets for password generation and JSON persistence.', image: 'assets/project-content.svg?v=20260830', tags: ['Python', 'Security', 'CLI', 'JSON'], github: links['Password Manager'] },
      { title: 'Contact Management System', description: 'A Python contact manager for organizing, searching, updating and deleting contact records.', longDescription: 'A practical CLI contact application demonstrating CRUD operations, validation and local data storage.', image: 'assets/project-portfolio.svg?v=20260830', tags: ['Python', 'CRUD', 'CLI', 'Data Management'], github: links['Contact Management System'] },
      { title: 'Hotel Management System', description: 'A Python hotel management application for room availability, reservations, guests and checkout workflows.', longDescription: 'A practical hotel management project demonstrating booking workflows, customer records and structured local data.', image: 'assets/project-airplane.svg?v=20260830', tags: ['Python', 'Booking', 'CLI', 'Data Management'], github: links['Hotel Management System'] }
    );
  }

  function setupUI() {
    var grid = document.getElementById('projectsGrid');
    if (!grid) return;

    function decorate() {
      var cards = Array.prototype.slice.call(grid.querySelectorAll('.project-card'));
      cards.forEach(function (card) {
        if (card.querySelector('.github-project-btn')) return;
        var titleEl = card.querySelector('h3');
        if (!titleEl) return;
        var url = links[titleEl.textContent.trim()];
        if (!url) return;

        var actions = document.createElement('div');
        actions.className = 'project-actions';
        actions.innerHTML = '<a class="btn btn-primary btn-sm github-project-btn" href="' + url + '" target="_blank" rel="noopener noreferrer">View Project <span aria-hidden="true">↗</span></a>';
        actions.addEventListener('click', function (event) { event.stopPropagation(); });
        card.querySelector('.project-body').appendChild(actions);
      });
    }

    decorate();
    new MutationObserver(decorate).observe(grid, { childList: true });

    var modal = document.getElementById('projectModal');
    if (!modal) return;
    var dialog = modal.querySelector('.modal-dialog');
    if (!dialog || dialog.querySelector('.modal-github-btn')) return;

    var button = document.createElement('a');
    button.className = 'btn btn-primary modal-github-btn';
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.textContent = 'View Project on GitHub ↗';
    button.style.display = 'none';
    var close = dialog.querySelector('#modalCloseAlt');
    if (close) dialog.insertBefore(button, close);

    function updateModalLink() {
      var title = dialog.querySelector('#modalTitle');
      if (!title) return;
      var url = links[title.textContent.trim()];
      button.style.display = url ? 'inline-flex' : 'none';
      if (url) button.href = url;
    }

    new MutationObserver(updateModalLink).observe(dialog.querySelector('#modalTitle'), { childList: true, characterData: true, subtree: true });
  }

  function cursor() {
    if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) return;
    if (document.querySelector('.cursor-dot')) return;

    var dot = document.createElement('div');
    var ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    dot.setAttribute('aria-hidden', 'true');
    ring.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.documentElement.classList.add('custom-cursor');

    var mouseX = -100, mouseY = -100, ringX = -100, ringY = -100;
    document.addEventListener('mousemove', function (event) {
      mouseX = event.clientX; mouseY = event.clientY;
      dot.style.transform = 'translate3d(' + (mouseX - 4) + 'px,' + (mouseY - 4) + 'px,0)';
    }, { passive: true });

    function animate() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = 'translate3d(' + (ringX - 19) + 'px,' + (ringY - 19) + 'px,0)';
      requestAnimationFrame(animate);
    }
    animate();

    document.addEventListener('mouseover', function (event) {
      if (event.target.closest && event.target.closest('a,button,.project-card,input,textarea')) {
        dot.classList.add('hover'); ring.classList.add('hover');
      }
    });
    document.addEventListener('mouseout', function (event) {
      if (event.target.closest && event.target.closest('a,button,.project-card,input,textarea')) {
        dot.classList.remove('hover'); ring.classList.remove('hover');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    addProjects();
    setupUI();
    cursor();
  });
}());
