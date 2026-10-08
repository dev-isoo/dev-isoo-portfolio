/* ==========================================================
   CONFIG - EDIT EVERYTHING HERE. No other file needs changes.
   ========================================================== */
const CONFIG = {
  domain: "https://YOUR-DOMAIN.com",     // <- your portfolio domain
  name: "Ismail Sheriff",
  alias: "Dev Isoo",
  location: "Lagos, Nigeria",

  email: "hello@YOUR-DOMAIN.com",
  whatsapp: "2349052161702",             // international format, no +

  social: {
    GitHub: "https://github.com/",
    LinkedIn: "https://www.linkedin.com/",
    X: "https://x.com/",
    Instagram: "https://instagram.com/"
  },

  // Use null for numbers you don't have yet (shows a dash)
  stats: [
    { label: "Projects built",     value: 100 },
    { label: "Technologies",       value: 15 },
    { label: "Client experiences", value: 50 },
    { label: "Years building",     value: 6 }
  ],

  // To add a project: copy one block below and fill it in.
  projects: [
    {
      title: "GODMADE",
      category: "Photography / Film / Drone",
      technologies: ["React", "Node.js", "Firebase"],
      description: "A visual storytelling platform for photography, film and drone work.",
      problem: "Creative work needed a home as cinematic as the work itself.",
      image: "image-1.jpeg",                         // optional: "images/godmade.jpg"
      gradient: "linear-gradient(135deg, #7c5cff, #22d3ee)",
      liveUrl: "https://god-made-epts.onrender.com/",
      githubUrl: "https://github.com/dev-isoo/god-made.git",
      caseStudy: {
        idea: "A showcase where photography, film and aerial footage feel like one connected story.",
        problem: "Generic gallery templates flatten visual work and load slowly with heavy media.",
        approach: "Media-first layouts, lazy-loaded assets and navigation that stays out of the way.",
        technology: "React frontend, Node.js services and Firebase for content and hosting.",
        build: "Reusable gallery components, optimised media delivery, mobile-first layout.",
        result: "A fast, immersive platform the client can update on their own.",
        stats: [
          { label: "Pages", value: 1 },
          
        ]
    }

    },
    projects:[
    {
      title: "Sapienza-Academy",
      category: "Education • E-Learning",
      technologies: ["Html", "CSS",  "Javascript", "Responsive Web Design", "Netlify"]
      description:""
      problem: "Describe the problem this solved.",
      image: "",
      gradient: "linear-gradient(135deg, #3b82f6, #a855f7)",
      liveUrl: "#",
      githubUrl: "",
      caseStudy: { idea: "...", problem: "...", approach: "...", technology: "...", build: "...", result: "...", stats: [] }
    }
]

  services: [
    ["Business websites", "High-converting websites for businesses and brands."],
    ["Web applications", "Interactive web applications and custom platforms."],
    ["Full-stack systems", "Frontend + backend + database + APIs."],
    ["Landing pages", "Fast, modern landing pages designed for conversions."],
    ["Website redesign", "Transform outdated websites into modern digital experiences."],
    ["Custom development", "Unique functionality built around specific business requirements."]
  ],

  process: [
    ["Discover", "Understand the business and objective."],
    ["Design", "Create the visual direction and user experience."],
    ["Develop", "Build the frontend, backend and functionality."],
    ["Test", "Test responsiveness, performance and functionality."],
    ["Deploy", "Launch the production website."],
    ["Optimize", "Improve performance and continue evolving the product."]
  ],

  pillars: [
    ["Full-stack", "Interface to database, one owner."],
    ["Modern frontend", "React and Next.js, fast by default."],
    ["Backend architecture", "Node, Express, clean APIs."],
    ["Responsive design", "Built for every screen."],
    ["API integration", "Payments, maps, CMS and more."],
    ["Database systems", "MongoDB and Firebase."],
    ["Deployment", "Netlify and Render."],
    ["Performance", "Measured, then improved."]
  ],

  // [name, short label, how I use it]
  tech: [
    ["HTML", "Structure", "Semantic, accessible, SEO-friendly markup on every build."],
    ["CSS", "Layout and motion", "Grid, custom properties and smooth animation."],
    ["JavaScript", "Interaction", "Forms, custom UI and everything interactive."],
    ["React", "Component UIs", "Reusable components for apps and dashboards."],
    ["Next.js", "Full-stack React", "Server rendering and fast, SEO-ready sites."],
    ["Node.js", "Server runtime", "Backend logic, integrations and automation."],
    ["Express", "APIs", "Clean routes, middleware and auth."],
    ["Tailwind CSS", "Rapid styling", "Consistent design systems, shipped fast."],
    ["Firebase", "Auth and realtime", "Authentication, hosting and realtime data."],
    ["MongoDB", "Flexible data", "Document databases for evolving products."],
    ["Git", "Version control", "Safe, traceable change on every project."],
    ["GitHub", "Collaboration", "Repos, reviews and reliable delivery."],
    ["REST APIs", "Integrations", "Connecting payments, maps, CMS and services."],
    ["Netlify", "Frontend deploys", "Instant deploys, previews and a global CDN."],
    ["Render", "Backend hosting", "Production hosting for Node services."]
  ]
};
