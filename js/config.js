 /* ==========================================================
   CONFIG - EDIT EVERYTHING HERE. No other file needs changes.
   ========================================================== */

const CONFIG = {

  domain: "https://dev-isoo-portfolio.onrender.com", // <- your portfolio domain

  name: "Ismail Sheriff",

  alias: "Dev Isoo",

  location: "Lagos, Nigeria",

  email: "isoodev01@gmail.com",

  whatsapp: "2349052161702", // international format, no +

  social: {
    GitHub: "https://github.com/dev-isoo",
    LinkedIn: "https://www.linkedin.com/in/dev-isoo-552656288/",
    X: "https://x.com/Devisooo",
    Instagram: "https://instagram.com/isoodev01"
  },
  emailjs: {
    publicKey: "RswObXfSfVooqd195",
    serviceId:  "service_d98zrps",
    templateId: "template_bd321t7"
  },
  // Use null for numbers you don't have yet (shows a dash)
  stats: [
    { label: "Projects built", value: 100 },
    { label: "Technologies", value: 15 },
    { label: "Client experiences", value: 50 },
    { label: "Years building", value: 6 }
  ],

  // To add a project: copy one block below and fill it in.
  projects: [

       {
      title: "GODMADE",

      category: "Photography / Film / Drone",

      technologies: ["HTML", "CSS", "JavaScript", "Render"],

      description:
        "A portfolio and booking website for a photography, film and drone studio in Lagos.",

      problem:
        "A creative studio needed one place to show its work, list its frames and take booking requests.",

      image: "image/image-1.jpeg",

      gradient:
        "linear-gradient(135deg, #7c5cff, #22d3ee)",

      liveUrl:
        "https://god-made-epts.onrender.com/",

      githubUrl:
        "https://github.com/dev-isoo/god-made",

      caseStudy: {

        idea:
          "A site where the photography, film and drone work leads, and a visitor can book a session without leaving the page.",

        problem:
          "The studio had strong visual work but no single place to show it, price its featured frames and collect booking requests.",

        approach:
          "A single-page layout with a filterable gallery, a featured-frames section with prices, client testimonials and a booking form.",

        technology:
          "Plain HTML, CSS and JavaScript, hosted on Render.",

        build:
          "Built a gallery with category filters and click-to-enlarge photos, a priced featured-work section, a booking form and contact links.",

        result:
          "A live, mobile-friendly site that presents the studio's work and lets clients get in touch.",

        stats: [
          { label: "Pages", value: 1 }
        ]

      }
    },
    {
      title: "SAPIENZA ACADEMY",

      category: "Education / School Website",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Web Design",
        "Netlify"
      ],

      description:
        "A modern educational website designed to give Sapienza Academy a professional online presence and help parents discover the school's programs, environment and enrollment opportunities.",

      problem:
        "The academy needed a centralized digital platform where parents and prospective students could easily discover the school, explore its educational offerings and find important information.",

      image: "image/logo.jpg",

      gradient:
        "linear-gradient(135deg, #3b82f6, #a855f7)",

      liveUrl:
        "https://sapienza-academy.netlify.app/",

      githubUrl: "https://github.com/dev-isoo/Sapienza-Comprehensive-Academy.git",

      caseStudy: {

        idea:
          "Create a professional digital home for Sapienza Academy that communicates the school's identity, educational values and learning environment.",

        problem:
          "Without a strong online presence, important school information can be difficult for prospective parents and students to discover and access.",

        approach:
          "A clean, responsive school experience focused on clear information, strong visual presentation, intuitive navigation and prominent enrollment and contact calls-to-action.",

        technology:
          "HTML and CSS for the structure and visual system, JavaScript for interactive functionality, responsive design for different screen sizes, and Netlify for deployment.",

        build:
          "Designed and developed a responsive school website with structured sections for the academy, curriculum, school experience, testimonials, enrollment and contact information.",

        result:
          "A professional and accessible online presence that makes it easier for parents and prospective students to understand the academy and take the next step toward enrollment.",

        stats: [
          { label: "Pages", value: 3 }
        ]

      }
    }

  ],

  services: [

    [
      "Business websites",
      "High-converting websites for businesses and brands."
    ],

    [
      "Web applications",
      "Interactive web applications and custom platforms."
    ],

    [
      "Full-stack systems",
      "Frontend + backend + database + APIs."
    ],

    [
      "Landing pages",
      "Fast, modern landing pages designed for conversions."
    ],

    [
      "Website redesign",
      "Transform outdated websites into modern digital experiences."
    ],

    [
      "Custom development",
      "Unique functionality built around specific business requirements."
    ]

  ],

  process: [

    [
      "Discover",
      "Understand the business and objective."
    ],

    [
      "Design",
      "Create the visual direction and user experience."
    ],

    [
      "Develop",
      "Build the frontend, backend and functionality."
    ],

    [
      "Test",
      "Test responsiveness, performance and functionality."
    ],

    [
      "Deploy",
      "Launch the production website."
    ],

    [
      "Optimize",
      "Improve performance and continue evolving the product."
    ]

  ],

  pillars: [

    [
      "Full-stack",
      "Interface to database, one owner."
    ],

    [
      "Modern frontend",
      "React and Next.js, fast by default."
    ],

    [
      "Backend architecture",
      "Node, Express, clean APIs."
    ],

    [
      "Responsive design",
      "Built for every screen."
    ],

    [
      "API integration",
      "Payments, maps, CMS and more."
    ],

    [
      "Database systems",
      "MongoDB and Firebase."
    ],

    [
      "Deployment",
      "Netlify and Render."
    ],

    [
      "Performance",
      "Measured, then improved."
    ]

  ],

  // [name, short label, how I use it]
  tech: [

    [
      "HTML",
      "Structure",
      "Semantic, accessible, SEO-friendly markup on every build."
    ],

    [
      "CSS",
      "Layout and motion",
      "Grid, custom properties and smooth animation."
    ],

    [
      "JavaScript",
      "Interaction",
      "Forms, custom UI and everything interactive."
    ],

    [
      "React",
      "Component UIs",
      "Reusable components for apps and dashboards."
    ],

    [
      "Next.js",
      "Full-stack React",
      "Server rendering and fast, SEO-ready sites."
    ],

    [
      "Node.js",
      "Server runtime",
      "Backend logic, integrations and automation."
    ],

    [
      "Express",
      "APIs",
      "Clean routes, middleware and auth."
    ],

    [
      "Tailwind CSS",
      "Rapid styling",
      "Consistent design systems, shipped fast."
    ],

    [
      "Firebase",
      "Auth and realtime",
      "Authentication, hosting and realtime data."
    ],

    [
      "MongoDB",
      "Flexible data",
      "Document databases for evolving products."
    ],

    [
      "Git",
      "Version control",
      "Safe, traceable change on every project."
    ],

    [
      "GitHub",
      "Collaboration",
      "Repos, reviews and reliable delivery."
    ],

    [
      "REST APIs",
      "Integrations",
      "Connecting payments, maps, CMS and services."
    ],

    [
      "Netlify",
      "Frontend deploys",
      "Instant deploys, previews and a global CDN."
    ],

    [
      "Render",
      "Backend hosting",
      "Production hosting for Node services."
    ]

  ]

};
