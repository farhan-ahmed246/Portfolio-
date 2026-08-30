const PROJECTS = [
  {title:"AI Chatbot Assistant",description:"A conversational AI assistant built with prompt engineering and a clean responsive chat interface for context-aware conversations.",longDescription:"A practical AI chatbot project using structured prompting, context handling and a modern responsive chat interface.",image:"assets/project-ai.svg?v=20260830",tags:["AI","Chatbot","Prompt Engineering","JavaScript"]},
  {title:"AI Quiz Game",description:"An interactive quiz game with questions, answer selection, score tracking and a polished learning-focused interface.",longDescription:"A browser quiz application designed for engaging learning with interactive questions, scoring and responsive UI.",image:"assets/project-quiz.svg?v=20260830",tags:["JavaScript","Quiz","UI/UX","Web Development"],github:"https://github.com/farhan-ahmed246/Quiz-Game-With-Live-Api"},
  {title:"Currency Exchange App",description:"A currency conversion application supporting 25 currencies with a simple responsive interface for quick exchange calculations.",longDescription:"A practical currency exchange project for selecting currencies and calculating conversions through a clean user interface.",image:"assets/project-python.svg?v=20260830",tags:["Python","Currency API","Streamlit","API Integration"],github:"https://github.com/farhan-ahmed246/Currency-Exchanger-"},
  {title:"PDF Generator",description:"A Python PDF generation tool that creates clean downloadable documents from user-provided information.",longDescription:"A utility project for generating structured PDF documents programmatically with clean formatting and reliable file generation.",image:"assets/project-content.svg?v=20260830",tags:["Python","PDF","Automation","File Generation"],github:"https://github.com/farhan-ahmed246/PDF-GENRATOR"},
  {title:"Airplane Ticket Registration System",description:"A ticket registration application for passenger information and flight booking details with a simple user-friendly workflow.",longDescription:"A practical registration project demonstrating form handling, validation, structured data and a flight booking workflow.",image:"assets/project-airplane.svg?v=20260830",tags:["Python","Forms","Data Management","UI"],github:"https://github.com/farhan-ahmed246/Airplane-flight"},
  {title:"Real-Time Up & Down Report",description:"A reporting dashboard that presents changing values and performance information with clear visual up/down indicators.",longDescription:"A dashboard-style project focused on monitoring changing values and presenting movement clearly through status indicators and reports.",image:"assets/project-report.svg?v=20260830",tags:["Python","Dashboard","Reports","Data Visualization"]},
  {title:"Super Collection — E-Commerce Store",description:"A premium Pakistani fashion e-commerce experience with products, authentication, cart management, orders and Firebase integration.",longDescription:"A modern shopping experience with product browsing, authentication, cart management, order history and Firebase-backed data handling.",image:"assets/project-ecommerce.svg?v=20260830",tags:["React","Firebase","E-Commerce","JavaScript"],github:"https://github.com/farhan-ahmed246/Super-Collection-website"},
  {title:"Personal AI Engineer Portfolio",description:"A responsive portfolio showcasing AI engineering, web development, automation skills, projects and professional contact links.",longDescription:"A responsive animated portfolio with project cards, skills, social links, contact form, smooth navigation and GitHub Pages deployment.",image:"assets/project-portfolio.svg?v=20260830",tags:["HTML","CSS","JavaScript","GitHub Pages"],github:"https://github.com/farhan-ahmed246/Portfolio-"},
  {title:"n8n AI Workflow Automation",description:"AI-powered workflow automation connecting apps, APIs and business processes to reduce repetitive manual work.",longDescription:"Automation workflows built with n8n, APIs and AI services to connect repetitive tasks into structured automated pipelines.",image:"assets/project-n8n.svg?v=20260830",tags:["n8n","AI Automation","APIs","Workflows"],github:"https://github.com/farhan-ahmed246/ai-lead-qualification-n8n"},
  {title:"Zapier Business Automation",description:"Multi-step Zapier automation workflows connecting apps, triggers and actions to streamline repetitive business tasks.",longDescription:"A workflow automation project focused on connecting services through triggers, actions and API-based steps for reliable task automation.",image:"assets/project-zapier.svg?v=20260830",tags:["Zapier","Automation","APIs","Workflows"]},
  {title:"AI Document Summarizer",description:"An AI-powered document tool that turns lengthy text into concise, structured summaries for faster reading and review.",longDescription:"A practical AI productivity project focused on extracting key information from long documents and presenting it as clear, concise summaries.",image:"assets/project-document.svg?v=20260830",tags:["AI","Python","NLP","Automation"]},
  {title:"Smart Contact & Lead Automation",description:"An automated lead workflow that captures contact information, organizes submissions and connects follow-up actions through automation.",longDescription:"A business automation workflow designed to capture leads, structure incoming data and trigger useful follow-up actions using APIs and workflow tools.",image:"assets/project-leads.svg?v=20260830",tags:["n8n","Automation","APIs","Lead Management"],github:"https://github.com/farhan-ahmed246/ai-lead-qualification-n8n"},
  {title:"Expense Tracker",description:"A practical command-line expense tracker for recording, viewing, deleting and summarizing personal spending.",longDescription:"A pure Python CLI application with JSON persistence, expense categories, totals and simple reporting.",image:"assets/project-report.svg?v=20260830",tags:["Python","CLI","JSON","File Handling"],github:"https://github.com/farhan-ahmed246/Expense-Tracker-Python"},
  {title:"Bank Management System",description:"A Python banking application for creating accounts, deposits, withdrawals and balance management.",longDescription:"A practical Python project demonstrating account management, validation, transactions and local JSON storage.",image:"assets/project-python.svg?v=20260830",tags:["Python","OOP","JSON","Data Management"],github:"https://github.com/farhan-ahmed246/Bank-Management-System"},
  {title:"Voting System",description:"A command-line voting application with vote casting, results, percentages, winner detection and reset functionality.",longDescription:"A pure Python voting project demonstrating menus, validation, persistent JSON data and result calculations.",image:"assets/project-report.svg?v=20260830",tags:["Python","CLI","JSON","Voting"],github:"https://github.com/farhan-ahmed246/-Voting-System"},
  {title:"Password Manager",description:"A local Python password manager with random password generation, search and account management.",longDescription:"A learning-focused CLI password manager using Python secrets for password generation and JSON persistence.",image:"assets/project-content.svg?v=20260830",tags:["Python","Security","CLI","JSON"],github:"https://github.com/farhan-ahmed246/Password-Manager"},
  {title:"Contact Management System",description:"A Python contact manager for organizing, searching, updating and deleting contact records.",longDescription:"A practical CLI contact application demonstrating CRUD operations, validation and local data storage.",image:"assets/project-portfolio.svg?v=20260830",tags:["Python","CRUD","CLI","Data Management"],github:"https://github.com/farhan-ahmed246/Contact-Management-System"},
  {title:"Hotel Management System",description:"A Python hotel management application for room availability, reservations, guests and checkout workflows.",longDescription:"A practical hotel management project demonstrating booking workflows, customer records and structured local data.",image:"assets/project-airplane.svg?v=20260830",tags:["Python","Booking","CLI","Data Management"],github:"https://github.com/farhan-ahmed246/Hotel-Management-System"}
];

document.addEventListener('DOMContentLoaded',function(){
  var style=document.createElement('style');
  style.textContent='.project-actions{display:flex;gap:10px;margin-top:auto;padding-top:14px}.github-project-btn{width:100%;text-align:center}.modal-github-btn{margin-right:10px}.project-card:hover .project-image{transform:scale(1.04);filter:brightness(1.06)}@media(max-width:480px){.project-actions .btn{width:100%}}';
  document.head.appendChild(style);

  function addButtons(){
    var grid=document.getElementById('projectsGrid'); if(!grid)return;
    Array.prototype.slice.call(grid.querySelectorAll('.project-card')).forEach(function(card,i){
      var p=PROJECTS[i]; if(!p||!p.github||card.querySelector('.github-project-btn'))return;
      var body=card.querySelector('.project-body'); if(!body)return;
      var box=document.createElement('div'); box.className='project-actions';
      box.innerHTML='<a class="btn btn-primary btn-sm github-project-btn" href="'+p.github+'" target="_blank" rel="noopener noreferrer">View Project <span aria-hidden="true">↗</span></a>';
      box.addEventListener('click',function(e){e.stopPropagation()}); body.appendChild(box);
    });
  }

  function addModalButton(){
    var modal=document.getElementById('projectModal'); var dialog=modal&&modal.querySelector('.modal-dialog');
    if(!dialog||dialog.querySelector('.modal-github-btn'))return;
    var btn=document.createElement('a'); btn.className='btn btn-primary modal-github-btn'; btn.target='_blank'; btn.rel='noopener noreferrer'; btn.textContent='View Project on GitHub ↗'; btn.style.display='none';
    var close=dialog.querySelector('#modalCloseAlt'); if(close)dialog.insertBefore(btn,close);
    var title=dialog.querySelector('#modalTitle');
    function sync(){if(!title)return;var p=PROJECTS.find(function(x){return x.title===title.textContent.trim()});btn.style.display=p&&p.github?'inline-flex':'none';if(p&&p.github)btn.href=p.github}
    if(title&&window.MutationObserver)new MutationObserver(sync).observe(title,{childList:true,characterData:true,subtree:true}); sync();
  }

  function swordCursor(){
    if(!window.matchMedia||!window.matchMedia('(pointer:fine)').matches)return;
    if(document.querySelector('.minecraft-sword-cursor'))return;
    var style=document.createElement('style');
    style.textContent='html.minecraft-cursor,html.minecraft-cursor *{cursor:none!important}.minecraft-sword-cursor{position:fixed;left:0;top:0;width:30px;height:30px;z-index:10000;pointer-events:none;opacity:0;filter:drop-shadow(1px 2px 3px rgba(0,0,0,.65));transform:translate(-4px,-4px) rotate(-20deg);transform-origin:20% 80%}.minecraft-sword-cursor svg{width:100%;height:100%;shape-rendering:crispEdges;image-rendering:pixelated}.minecraft-sword-cursor .sword-glint{animation:swordGlint 1.6s ease-in-out infinite}@keyframes swordGlint{0%,100%{opacity:.25}50%{opacity:.8}}html.minecraft-cursor .minecraft-sword-cursor{opacity:1}@media(max-width:900px){html.minecraft-cursor,html.minecraft-cursor *{cursor:auto!important}.minecraft-sword-cursor{display:none!important}}';
    document.head.appendChild(style);
    var sword=document.createElement('div'); sword.className='minecraft-sword-cursor';
    sword.innerHTML='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0h2v2h1v2h1v2h1v2h-2V7h-1V5H9V3H8z" fill="#f3f4f6"/><path d="M7 1h2v3h1v2h1v2H9V6H8V4H7z" fill="#d1d5db"/><path d="M6 8h6v2H6z" fill="#f59e0b"/><path d="M4 10h7v2H4z" fill="#8b5a2b"/><path d="M6 12h3v3H6z" fill="#5b3a29"/><path class="sword-glint" d="M8 2h1v3H8z" fill="#fff"/></svg>';
    document.body.appendChild(sword); document.documentElement.classList.add('minecraft-cursor');
    document.addEventListener('mousemove',function(e){sword.style.transform='translate('+(e.clientX-5)+'px,'+(e.clientY-5)+'px) rotate(-20deg)'},{passive:true});
  }

  addButtons(); addModalButton(); swordCursor();
  var grid=document.getElementById('projectsGrid');
  if(grid&&window.MutationObserver)new MutationObserver(addButtons).observe(grid,{childList:true,subtree:true});
});
