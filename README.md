# Steven Terry — Modern Premium Personal Portfolio

A contemporary, high-performance personal portfolio website built with **React**, modular **CSS**, and modern web standards. Inspired by the visual identity of the reference design (dark navy `#263642`, muted blue `#548FA8`, and clean white surfaces), reimagined as a modern personal web experience.

---

## 🌟 Key Sections & Features

1. **Header & Navigation Bar (`Navbar.jsx`)**:
   - Fixed glassmorphic navigation bar with scroll state detection.
   - Smooth navigation links: **Home**, **About**, **Services**, **Skills**, **Portfolio**, **Experience**, and **Contact**.
   - Active section highlighting on scroll.
   - Instant **"Resume"** modal button for quick review and print.
   - High-contrast **"Let's Talk"** call-to-action button.
   - Mobile slide-out drawer with responsive hamburger toggle.

2. **Hero Section (`Hero.jsx`)**:
   - Live availability badge: `🟢 Available for freelance & full-time roles`.
   - Balanced two-column layout with bold typography (**Steven Terry**, *Senior Graphic Designer & Brand Strategist*).
   - Primary & Secondary CTAs (**View My Work**, **Contact Me**, **Resume PDF**).
   - Verified social links (LinkedIn, GitHub, Dribbble, Twitter / X).
   - Profile showcase with ambient glowing backdrops and floating metric cards (`7+ Years Exp`, `140+ Projects`).

3. **About Me (`About.jsx`)**:
   - Compelling narrative outlining design philosophy and commercial ROI focus.
   - Core strengths list with custom checkmark accents.
   - 2x2 statistics matrix (Years Experience, Completed Projects, Satisfaction, Industry Awards).
   - Stylized quote card with executive mission statement.

4. **Specialized Services (`Services.jsx`)**:
   - 6 detailed service cards:
     - Brand Identity & Systems
     - UI/UX & Web Design
     - Digital Marketing & Ads
     - Print & Editorial Design
     - Creative Direction & Strategy
     - Events & Presentation Design
   - Interactive **"Request Service"** buttons that auto-focus the contact form with pre-filled service interests.

5. **Skills & Capabilities (`Skills.jsx`)**:
   - Interactive category filter tabs (All Disciplines, Design & Creative, Tools & Software, Marketing & Strategy, Languages & Soft Skills).
   - Animated visual progress meters with proficiency ratings.
   - Dedicated strip highlighting Office suite proficiency (Word, Excel, PowerPoint), Adobe Creative Cloud, and Multilingual capabilities (English, Japanese, Chinese).

6. **Featured Projects Showcase (`Projects.jsx` & `ProjectModal.jsx`)**:
   - Filterable project grid (All, Branding, UI/UX, Marketing, Print).
   - Rich cards with client name, year, tags, metrics badge (e.g. `+42% Engagement`), hover actions, and links.
   - Interactive **Case Study Modal** displaying high-res previews, project metadata, technology breakdown, and live demo links.

7. **Experience & Education Timeline (`Timeline.jsx`)**:
   - Tabbed dual timeline (Work Experience & Academic Degrees).
   - Experience items:
     - **TopCV JSC**: Lead Digital Marketing & Visual Strategist (2016 – Present)
     - **TopCV Shop**: Retail Experience & Sales Visual Designer (2016 – Present)
     - **TOPCV Education Talk**: US Ambassador & Event Lead (2013 – 2017)
   - Education items:
     - **TOPCV University**: Corporate Administration (GPA 3.4)
     - **TOPCV Institute**: Advanced Visual Communications

8. **Achievements & Certifications (`Achievements.jsx`)**:
   - Official credentials: **TOEIC Certificate Score 800**, **TOPCV Academic Scholarship**, and **Adobe Creative Associate**.
   - "Beyond the Studio" personal interests grid (Soccer & Football Leagues, Electronic/Indie Music, Global Travel, Architecture).

9. **Contact & Inquiry (`Contact.jsx`)**:
   - Direct communication channels (Email: `Steven@3223.com`, Phone: `+44 986-2323-3434`, London, England).
   - **One-click copy to clipboard** buttons with confirmation indicators.
   - Interactive contact form with real-time validation, service selection dropdown, submitting state, and success toast.

10. **Footer (`Footer.jsx`)**:
    - Brand logo, professional summary, quick navigation columns, social links, and smooth "Back to Top" scrolling.

11. **Official A4 Resume Modal (`ResumeModal.jsx`)**:
    - Integrated modal that houses the exact reference A4 two-column resume design with strict `@media print` CSS for 1:1 PDF exports.

---

## 🛠️ Project Structure

```
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── reference-resume.jpg
└── src/
    ├── App.jsx                     # Top-level portfolio container
    ├── main.jsx                    # React 18 mount point
    ├── index.css                   # Custom theme tokens, grid layouts, and print CSS
    ├── data/
    │   ├── portfolioData.js        # Comprehensive portfolio data structure
    │   └── resumeData.js           # Exact reference resume data
    └── components/
        ├── Navbar.jsx              # Responsive header & drawer navigation
        ├── Hero.jsx                # Two-column hero with floating badges
        ├── About.jsx               # Bio, key strengths & 2x2 statistics
        ├── Services.jsx            # 6 premium service cards
        ├── Skills.jsx              # Filterable skill cards with progress meters
        ├── Projects.jsx            # Portfolio gallery with category filters
        ├── ProjectModal.jsx        # Case study popup modal
        ├── Timeline.jsx            # Tabbed experience & education timeline
        ├── Achievements.jsx        # Certifications & personal interests
        ├── Contact.jsx             # Contact cards & validated form
        ├── Footer.jsx              # Brand footer & back to top
        ├── ResumeModal.jsx         # Modal containing printable A4 resume
        ├── Avatar.jsx              # Smart image avatar with fallback
        ├── SocialIcons.jsx         # SVG brand icons (LinkedIn, GitHub, etc.)
        ├── ResumeHeader.jsx        # Component for reference resume header
        ├── Sidebar.jsx             # Component for reference resume sidebar
        └── MainContent.jsx         # Component for reference resume main column
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm.cmd install

# 2. Start Vite development server
npm.cmd run dev

# 3. Production build
npm.cmd run build
```
