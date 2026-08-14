/* ==========================================================================
   PROJECTS — edit this file to add / change your projects
   ==========================================================================

   HOW TO ADD A PROJECT
   --------------------
   Copy one block below (between the { } braces), paste it inside the
   PROJECTS array, and fill in:

     title            →  Project name shown on the card
     description      →  Short text shown on the card
     longDescription  →  Full details shown when the project is opened
                         (use \n for a new line)
     image            →  Image path or URL (e.g. "assets/img/my-project.png"
                         or "https://example.com/pic.jpg")
     tags             →  ["HTML", "CSS", "JavaScript"] — shown as chips

   TIP for sharp images:
   • Use images at least 1200px wide. The detail view never stretches or
     upscales an image beyond its real size, so bigger files stay sharp.
   • Put your images in the assets/img/ folder.
   ========================================================================== */

const PROJECTS = [
  {
    title: "AI Chat Assistant",
    description:
      "A smart conversational AI chatbot built with prompt engineering — understands context, remembers the conversation and answers like a human.",
    longDescription:
      "A fully responsive AI chat assistant that uses structured prompt engineering to give accurate, context-aware answers.\n\nIt features streaming-style typing, conversation memory, quick-reply suggestions and a clean chat UI that works great on mobile and desktop. The prompt layer was carefully tuned to reduce hallucinations and keep answers on-topic.",
    image: "assets/img/project-ai.svg",
    tags: ["AI", "Prompt Engineering", "JavaScript"]
  },
  {
    title: "Workflow Automation Hub",
    description:
      "End-to-end automation workflows built with N8N and Zapier — connecting 15+ apps to save hours of manual work every week.",
    longDescription:
      "A set of production automation workflows connecting CRMs, email, Google Sheets and AI tools.\n\nIncludes lead capture → AI scoring → follow-up email flows, invoice reminders, and social media auto-posting pipelines. Everything runs with error handling, retries and human-in-the-loop approval steps.",
    image: "assets/img/project-automation.svg",
    tags: ["N8N", "Zapier", "Automation"]
  },
  {
    title: "Modern Responsive Website",
    description:
      "A pixel-perfect, mobile-first business website with smooth animations, dark mode and a 100/100 Lighthouse performance score.",
    longDescription:
      "A modern business website built with clean HTML, CSS and JavaScript — no heavy frameworks.\n\nFeatures include scroll animations, a sticky header, an interactive contact form, SEO meta tags and a layout that adapts perfectly from small phones to large TV screens.",
    image: "assets/img/project-web.svg",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"]
  },
  {
    title: "Python Data Dashboard",
    description:
      "An interactive analytics dashboard in Python that turns raw CSV data into live charts and exportable reports.",
    longDescription:
      "A Python dashboard that reads CSV/Excel data and renders interactive charts for sales, traffic and performance metrics.\n\nBuilt with modern Python web development practices — clean data pipelines, reusable components and automatic report generation (PDF/Excel export).",
    image: "assets/img/project-python.svg",
    tags: ["Python", "Data", "Dashboard"]
  },
  {
    title: "AI Content Generator",
    description:
      "Generate blog posts, captions and product descriptions in seconds with a prompt-engineered AI writing tool.",
    longDescription:
      "A prompt-engineered content tool that generates high-quality blog intros, social captions and product descriptions.\n\nIncludes tone controls, keyword targeting, plagiarism-safe rewriting and one-click copy. The prompt system chains multiple steps — outline first, then expand — for much better results than a single prompt.",
    image: "assets/img/project-content.svg",
    tags: ["AI", "Prompt Engineering", "Content"]
  },
  {
    title: "E-Commerce Storefront",
    description:
      "A fast, modern online store with product cards, filters, cart and a smooth checkout flow — built from scratch.",
    longDescription:
      "A lightweight e-commerce storefront built with vanilla JavaScript.\n\nProduct grid with live search and category filters, an animated cart with quantity controls, and localStorage persistence so the cart survives page reloads. Designed mobile-first with accessibility in mind.",
    image: "assets/img/project-ecommerce.svg",
    tags: ["JavaScript", "E-Commerce", "UI/UX"]
  }
];
