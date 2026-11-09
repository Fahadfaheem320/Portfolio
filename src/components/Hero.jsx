import React from 'react';
import { ArrowRight, Mail, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { Avatar } from './Avatar';
import { LinkedinIcon, GithubIcon, DribbbleIcon, TwitterIcon } from './SocialIcons';

export const Hero = ({ personal, onOpenResume }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="portfolio-container hero-container">
        {/* Left Column: Text Content */}
        <div className="hero-content">
          <div className="hero-availability-pill">
            <span className="availability-dot" />
            <span className="availability-text">{personal.availability}</span>
          </div>

          <div className="hero-heading-group">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-name">
              Steven <span className="hero-name-accent">Terry</span>
            </h1>
            <p className="hero-role">{personal.role}</p>
          </div>

          <p className="hero-bio">{personal.tagline}</p>

          <p className="hero-subbio">{personal.shortBio}</p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={() => scrollTo('portfolio')}
            >
              <span>View My Work</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => scrollTo('contact')}
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </button>

            <button
              type="button"
              className="btn-ghost"
              onClick={onOpenResume}
              title="Inspect A4 Resume"
            >
              <FileText size={16} />
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="social-links-list">
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-link-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="social-link-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={personal.socialLinks.dribbble}
                target="_blank"
                rel="noreferrer"
                className="social-link-btn"
                aria-label="Dribbble Portfolio"
              >
                <DribbbleIcon size={17} />
              </a>
              <a
                href={personal.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="social-link-btn"
                aria-label="Twitter Profile"
              >
                <TwitterIcon size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Showcase */}
        <div className="hero-visual">
          <div className="hero-visual-frame">
            {/* Ambient Background Glows */}
            <div className="hero-glow hero-glow-1" />
            <div className="hero-glow hero-glow-2" />

            {/* Geometric Framing */}
            <div className="hero-image-wrapper">
              <Avatar
                src={personal.photoUrl}
                alt={personal.name}
                className="hero-avatar-image"
              />
            </div>

            {/* Floating Badges */}
            <div className="floating-badge badge-top-right">
              <div className="badge-icon-wrap icon-gold">
                <Sparkles size={16} />
              </div>
              <div className="badge-details">
                <span className="badge-title">7+ Years</span>
                <span className="badge-subtitle">Design Experience</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <div className="badge-icon-wrap icon-blue">
                <CheckCircle2 size={16} />
              </div>
              <div className="badge-details">
                <span className="badge-title">140+ Projects</span>
                <span className="badge-subtitle">Delivered with Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
