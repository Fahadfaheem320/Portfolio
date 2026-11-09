import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="portfolio-app">
      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero 
          personal={portfolioData.personal} 
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* About Section */}
        <About 
          about={portfolioData.about} 
          stats={portfolioData.stats}
          personal={portfolioData.personal}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Services Section */}
        <Services services={portfolioData.services} />

        {/* Skills Section */}
        <Skills skills={portfolioData.skills} />

        {/* Featured Projects / Portfolio */}
        <Projects projects={portfolioData.projects} />

        {/* Experience & Education */}
        <Timeline 
          experience={portfolioData.experience} 
          education={portfolioData.education} 
        />

        {/* Achievements & Certifications */}
        <Achievements 
          certifications={portfolioData.certifications} 
          interests={portfolioData.interests} 
        />

        {/* Contact Section */}
        <Contact personal={portfolioData.personal} />
      </main>

      {/* Footer */}
      <Footer personal={portfolioData.personal} />

      {/* Official A4 Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}
