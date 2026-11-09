import React from 'react';
import { Check, Download, ExternalLink, Award, Briefcase, Users, Star } from 'lucide-react';

export const About = ({ about, stats, personal, onOpenResume }) => {
  const statIcons = [
    <Briefcase size={22} className="stat-icon" />,
    <Check size={22} className="stat-icon" />,
    <Users size={22} className="stat-icon" />,
    <Award size={22} className="stat-icon" />
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-heading text-center">
          <span className="section-subtitle">Biography & Background</span>
          <h2 className="section-title">{about.title}</h2>
          <div className="section-line" />
          <p className="section-intro">{about.subtitle}</p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative & Highlights */}
          <div className="about-text-col">
            <div className="about-paragraphs">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="about-paragraph">
                  {p}
                </p>
              ))}
            </div>

            <div className="about-highlights-card">
              <h3 className="highlights-title">Key Strengths & Differentiators</h3>
              <ul className="highlights-list">
                {about.highlights.map((item, idx) => (
                  <li key={idx} className="highlight-item">
                    <span className="highlight-check">
                      <Check size={14} />
                    </span>
                    <span className="highlight-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-cta-row">
              <button
                type="button"
                className="btn-primary"
                onClick={onOpenResume}
              >
                <Download size={16} />
                <span>View Full CV & Credentials</span>
              </button>

              <a href="#contact" className="btn-secondary">
                <span>Start a Project</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: 2x2 Stats Matrix & Quote */}
          <div className="about-stats-col">
            <div className="stats-matrix">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-card-icon-wrap">
                    {statIcons[idx % statIcons.length]}
                  </div>
                  <div className="stat-card-number">{stat.value}</div>
                  <div className="stat-card-label">{stat.label}</div>
                  <div className="stat-card-desc">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="about-quote-card">
              <div className="quote-badge">Core Philosophy</div>
              <p className="quote-text">
                "Design isn't merely what it looks like and feels like. Design is how it works to create measurable value for customers and organizations."
              </p>
              <div className="quote-author">
                <span className="author-name">Steven Terry</span>
                <span className="author-title">Graphic Designer & Strategist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

