import React from 'react';
import { Award, Trophy, Music, Globe, Book, Sparkles } from 'lucide-react';

export const Achievements = ({ certifications, interests }) => {
  const interestIcons = {
    Trophy: <Trophy size={18} />,
    Music: <Music size={18} />,
    Globe: <Globe size={18} />,
    Book: <Book size={18} />
  };

  return (
    <section className="section-padding achievements-section">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-heading text-center">
          <span className="section-subtitle">Recognition & Passions</span>
          <h2 className="section-title">Certifications & Accolades</h2>
          <div className="section-line" />
          <p className="section-intro">
            Official credentials and competitive academic awards affirming rigorous analytical rigor, language fluency, and creative drive.
          </p>
        </div>

        {/* Certifications Cards */}
        <div className="achievements-grid">
          {certifications.map((item, idx) => (
            <div key={idx} className="achievement-card">
              <div className="ach-card-top">
                <div className="ach-icon-circle">
                  <Award size={22} />
                </div>
                <span className="ach-badge">{item.badge}</span>
              </div>

              <div className="ach-year">{item.year}</div>
              <h3 className="ach-title">{item.title}</h3>
              <p className="ach-issuer">{item.issuer}</p>
              <p className="ach-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Personal Interests Strip */}
        <div className="interests-card">
          <div className="interests-header">
            <Sparkles size={18} className="interest-spark-icon" />
            <h3 className="interests-title">Beyond the Canvas & Design Studio</h3>
          </div>
          <p className="interests-subtitle">
            Personal activities and passions that foster creative balance, lateral thinking, and international teamwork:
          </p>

          <div className="interests-grid">
            {interests.map((interest, idx) => (
              <div key={idx} className="interest-item">
                <span className="interest-icon-badge">
                  {interestIcons[interest.icon] || <Trophy size={18} />}
                </span>
                <span className="interest-name">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

