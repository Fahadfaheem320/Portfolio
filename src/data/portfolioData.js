export const portfolioData = {
  personal: {
    name: "Steven Terry",
    role: "Senior Graphic Designer & Brand Strategist",
    tagline: "Crafting distinct visual identities, high-impact digital designs, and memorable brand experiences that drive engagement.",
    shortBio: "London-based multidisciplinary designer with a passion for clean aesthetics, digital marketing, and user-centric brand narratives. With over 7 years of creative experience, I bridge the gap between aesthetic excellence and commercial performance.",
    location: "London, England",
    email: "Steven@3223.com",
    phone: "+44 986-2323-3434",
    website: "https://steven-info.me",
    availability: "Available for freelance & full-time roles",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
    resumePdfUrl: "#resume-modal",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      dribbble: "https://dribbble.com",
      behance: "https://behance.net",
      twitter: "https://twitter.com"
    }
  },

  stats: [
    { label: "Years Experience", value: "7+", description: "In visual design & marketing" },
    { label: "Projects Completed", value: "140+", description: "For global brands & startups" },
    { label: "Client Satisfaction", value: "99%", description: "Positive feedback score" },
    { label: "Awards & Honors", value: "8+", description: "Recognized industry honors" }
  ],

  about: {
    title: "About Me",
    subtitle: "Passion for purposeful visual storytelling and strategic design",
    paragraphs: [
      "I am Steven Terry, a graphic designer and digital marketing strategist based in London. My journey began with an analytical mindset studying Corporate Administration at TOPCV University (GPA 3.4), which uniquely shaped how I approach design—not merely as art, but as an engine for customer acquisition, brand loyalty, and business growth.",
      "Over the past 7+ years, I have worked with fast-paced tech startups, e-commerce brands, and global communities, transforming complex marketing messages into high-converting visual assets, print collateral, and interactive digital interfaces.",
      "When I am not designing, you'll find me playing soccer, exploring electronic and indie music, or mentoring upcoming creative students through international exchange alumni networks."
    ],
    highlights: [
      "Expertise in balancing creative design with commercial ROI",
      "End-to-end brand identity systems from concept to delivery",
      "Multilingual communicator: English, Japanese, and Chinese",
      "Cross-functional team leadership in digital marketing"
    ]
  },

  services: [
    {
      id: "brand-identity",
      icon: "Palette",
      title: "Brand Identity & Systems",
      description: "Developing comprehensive brand languages, logo systems, typography scales, color harmonies, and brand style guides for modern businesses.",
      tags: ["Logo Design", "Style Guides", "Typography", "Visual Language"]
    },
    {
      id: "ui-ux",
      icon: "Layout",
      title: "UI/UX & Web Design",
      description: "Crafting intuitive web interfaces, landing pages, and responsive design systems that prioritize usability and conversion.",
      tags: ["Responsive Web", "Figma", "Design Systems", "Wireframing"]
    },
    {
      id: "digital-marketing",
      icon: "Megaphone",
      title: "Digital Marketing & Ads",
      description: "High-performing visual campaigns for social media (Facebook, Instagram, LinkedIn), forum outreach, and digital display networks.",
      tags: ["Social Media Ads", "Campaign Strategy", "A/B Creatives", "Banners"]
    },
    {
      id: "print-editorial",
      icon: "BookOpen",
      title: "Print & Editorial Design",
      description: "Tactile publications, marketing brochures, event posters, billboards, and corporate collateral engineered for flawless print production.",
      tags: ["Brochures", "Posters & Banners", "Catalogs", "Packaging"]
    },
    {
      id: "creative-direction",
      icon: "Compass",
      title: "Creative Direction & Strategy",
      description: "Guiding brand narratives and aesthetic consistency across all omnichannel touchpoints to build lasting audience resonance.",
      tags: ["Art Direction", "Storyboarding", "Brand Positioning", "Consulting"]
    },
    {
      id: "events-workshops",
      icon: "Presentation",
      title: "Events & Presentation Design",
      description: "Dynamic keynote slide decks, investor pitches, and visual assets for corporate talks and international education forums.",
      tags: ["Pitch Decks", "PowerPoint", "Event Collateral", "Public Speaking"]
    }
  ],

  skills: {
    categories: [
      {
        id: "design",
        name: "Design & Creative",
        items: [
          { name: "Brand Identity Design", level: 95 },
          { name: "Editorial & Print Layout", level: 90 },
          { name: "UI/UX Web Prototyping", level: 88 },
          { name: "Typography & Color Theory", level: 94 },
          { name: "Vector Illustration", level: 85 }
        ]
      },
      {
        id: "tools",
        name: "Tools & Software",
        items: [
          { name: "Adobe Photoshop & Illustrator", level: 96 },
          { name: "Figma & UI Systems", level: 92 },
          { name: "Adobe InDesign", level: 88 },
          { name: "Microsoft Office (Word, Excel, PPT)", level: 95 },
          { name: "Canva & Social Creative Tools", level: 90 }
        ]
      },
      {
        id: "marketing",
        name: "Marketing & Strategy",
        items: [
          { name: "Digital Advertising (Meta, Forums)", level: 92 },
          { name: "Sales Enablement & Retail Marketing", level: 88 },
          { name: "Conversion Rate Optimization (CRO)", level: 82 },
          { name: "Customer Consultation & Support", level: 90 }
        ]
      },
      {
        id: "languages",
        name: "Languages & Soft Skills",
        items: [
          { name: "English (Native / Full Professional)", level: 100 },
          { name: "Japanese (Conversational / Business)", level: 75 },
          { name: "Chinese (Professional Working)", level: 70 },
          { name: "Cross-Cultural Communication", level: 95 },
          { name: "Event Organization & Mentorship", level: 90 }
        ]
      }
    ]
  },

  projects: [
    {
      id: "topcv-brand-rebrand",
      title: "TopCV Ecosystem Visual Rebranding",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
      description: "A complete overhaul of TopCV JSC's visual marketing assets, brand guidelines, and multichannel ad campaigns resulting in 42% higher CTR.",
      tags: ["Brand Identity", "Design System", "Social Ads", "Illustrator"],
      liveUrl: "https://topcv.vn",
      githubUrl: "https://github.com/steventerry/topcv-brand",
      featured: true,
      year: "2023",
      client: "TopCV JSC",
      metrics: "+42% Engagement"
    },
    {
      id: "steven-design-system",
      title: "FinTech Digital Banking Web Interface",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "Clean, responsive dashboard and mobile experience tailored for international transactions with accessible dark and light palettes.",
      tags: ["Figma", "UI/UX", "Dashboard", "Design Systems"],
      liveUrl: "https://steven-info.me/fintech",
      githubUrl: "https://github.com/steventerry/fintech-dashboard",
      featured: true,
      year: "2023",
      client: "Global Capital",
      metrics: "99.4% Usability Score"
    },
    {
      id: "us-ambassador-campaign",
      title: "TOPCV Education Talk 2014 & Alumni Portal",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      description: "Event branding, promotional posters, speaker banners, and digital registration portal for over 2,000 attendees and US university alumni.",
      tags: ["Event Design", "Print Banners", "Marketing", "Community"],
      liveUrl: "https://steven-info.me/education-talk",
      githubUrl: "https://github.com/steventerry/education-talk",
      featured: true,
      year: "2022",
      client: "US Ambassador Network",
      metrics: "2,000+ Participants"
    },
    {
      id: "topcv-retail-experience",
      title: "TopCV Flagship Store Retail Graphics",
      category: "Print",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      description: "In-store visual merchandising, bilingual point-of-sale displays, and advertising banners welcoming international shoppers in London and Hanoi.",
      tags: ["Retail Display", "Signage", "Large Format Print", "Bilingual"],
      liveUrl: "https://steven-info.me/retail-shop",
      githubUrl: "https://github.com/steventerry/retail-store-pos",
      featured: false,
      year: "2021",
      client: "TopCV Shop",
      metrics: "35% In-Store Lift"
    },
    {
      id: "minimalist-editorial-mag",
      title: "Modern Architectural & Design Magazine",
      category: "Print",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      description: "Grid-based typographic publication layout celebrating brutalist and Scandinavian architecture with custom foil-stamped covers.",
      tags: ["Editorial", "InDesign", "Grid System", "Print Production"],
      liveUrl: "https://steven-info.me/editorial",
      githubUrl: "https://github.com/steventerry/editorial-mag",
      featured: false,
      year: "2022",
      client: "Studio Monolith",
      metrics: "Featured on Behance"
    },
    {
      id: "social-growth-campaign",
      title: "Omnichannel Growth Ad Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "Cohesive multi-format creative suite including carousel ads, video story covers, and promotional forum headers for high-intent B2C conversions.",
      tags: ["Digital Ads", "Content Strategy", "Motion Banners", "Meta Ads"],
      liveUrl: "https://steven-info.me/social-growth",
      githubUrl: "https://github.com/steventerry/growth-campaign",
      featured: false,
      year: "2023",
      client: "NextWave Media",
      metrics: "3.2x ROAS"
    }
  ],

  experience: [
    {
      id: "topcv-jsc",
      role: "Lead Digital Marketing & Visual Strategist",
      company: "TopCV JSC",
      location: "London & Remote",
      duration: "2016 – Present",
      type: "Full-Time",
      description: "Leading creative advertising, multi-channel promotional post design, and digital visual communications across Facebook, forums, and partner platforms.",
      achievements: [
        "Authored and launched high-converting visual advertising posts across major online forums and Facebook communities.",
        "Introduced and consulted digital products, answering inquiries with exceptional customer retention and satisfaction scores.",
        "Standardized brand visual design systems across the corporate marketing division."
      ]
    },
    {
      id: "topcv-shop",
      role: "Retail Experience & Sales Visual Designer",
      company: "TopCV Shop",
      location: "London, England",
      duration: "2016 – Present",
      type: "Part-Time / Contract",
      description: "Managing bilingual customer sales for international and Vietnamese client bases while executing in-store visual merchandising and promotional media.",
      achievements: [
        "Produced comprehensive print publications including storefront banners, posters, and seasonal product leaflets.",
        "Maintained daily quantitative sales auditing and performance reporting for retail operations.",
        "Increased foot traffic engagement by 28% through interactive window graphic displays."
      ]
    },
    {
      id: "us-ambassador",
      role: "Member & Creative Ambassador",
      company: "TOPCV EDUCATION TALK",
      location: "London / International",
      duration: "2013 – 2017",
      type: "Community Leadership",
      description: "Coordinated monthly educational networking summits, scholarship guidance workshops, and student mentorship programs.",
      achievements: [
        "Organized monthly summits networking with prestigious US university alumni and international scholars.",
        "Authored and presented talks on winning competitive scholarships and adapting to global student life.",
        "Mentored over 500+ aspiring scholars on interview presentation and creative portfolio preparation."
      ]
    }
  ],

  education: [
    {
      id: "topcv-uni-1",
      degree: "Bachelor of Corporate Administration",
      institution: "TOPCV University",
      duration: "Oct 2010 – May 2014",
      grade: "GPA: 3.4 / 4.0",
      description: "Core emphasis on organizational management, strategic marketing, customer economics, and cross-border commercial communication."
    },
    {
      id: "topcv-uni-2",
      degree: "Diploma in Advanced Visual Communications",
      institution: "TOPCV Institute of Creative Design",
      duration: "Oct 2010 – May 2014",
      grade: "Honors Distinction",
      description: "Intensive training in typography, editorial layouts, vector illustration, digital prepress workflows, and commercial advertising."
    }
  ],

  certifications: [
    {
      title: "TOEIC Certificate - Score 800",
      issuer: "Issued by TOPCV / Educational Testing Service",
      year: "2018",
      badge: "800 / 990",
      description: "Demonstrated advanced listening and reading proficiency in international business communications."
    },
    {
      title: "TOPCV Academic Scholarship",
      issuer: "TOPCV University",
      year: "2013",
      badge: "Honor Award",
      description: "Awarded top competitive scholarship in 2nd semester 2012-2013 and 1st semester 2013-2014 for outstanding performance."
    },
    {
      title: "Professional Graphic Design & Digital Media",
      issuer: "Adobe Certified Associate / TOPCV Design Guild",
      year: "2017",
      badge: "Certified",
      description: "Certified proficiency in Adobe Creative Cloud suite, visual branding standards, and digital color theory."
    }
  ],

  interests: [
    { name: "Soccer & Football Leagues", icon: "Trophy" },
    { name: "Electronic & Indie Music", icon: "Music" },
    { name: "Global Travel & Architecture", icon: "Globe" },
    { name: "Visual Arts & Typography Books", icon: "Book" }
  ]
};

