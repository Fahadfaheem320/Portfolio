import React from 'react';
import { ArrowUp } from 'lucide-react';
import { LinkedinIcon, GithubIcon, DribbbleIcon, TwitterIcon } from './SocialIcons';

export const Footer = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-container footer-container">
        <div className="footer-top-row">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo">
              <span className="logo-badge">ST</span>
              <span className="logo-text">
                Steven Terry<span className="logo-dot">.</span>
              </span>
            </a>
            <p className="footer-tagline">
              Senior Graphic Designer & Brand Strategist based in London. Transforming ambitious concepts into unforgettable visual communications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#portfolio">Featured Works</a></li>
              <li><a href="#experience">Experience & Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Expertise</h4>
            <ul className="footer-links-list">
              <li><span>Brand Identity Systems</span></li>
              <li><span>UI/UX & Web Prototyping</span></li>
              <li><span>Digital Marketing Advertising</span></li>
              <li><span>Print & Editorial Production</span></li>
              <li><span>Presentation & Keynote Design</span></li>
            </ul>
          </div>

          {/* Socials Col */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Follow & Network</h4>
            <div className="footer-socials-row">
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personal.socialLinks.dribbble}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="Dribbble"
              >
                <DribbbleIcon size={18} />
              </a>
              <a
                href={personal.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="Twitter"
              >
                <TwitterIcon size={18} />
              </a>
            </div>

            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} Steven Terry. All rights reserved. Built with React & modern web standards.
          </p>
          <div className="footer-meta-pill">
            <span>Handcrafted with precision & strategic craft</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
