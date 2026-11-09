import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Timeline = ({ experience, education }) => {
  const [activeTimeline, setActiveTimeline] = useState('experience');

  return (
    <section id="experience" className="section-padding timeline-section">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-heading text-center">
          <span className="section-subtitle">Career Path & Background</span>
          <h2 className="section-title">Experience & Education</h2>
          <div className="section-line" />
          <p className="section-intro">
            A cohesive trajectory spanning corporate administration, strategic marketing leadership, and international education diplomacy.
          </p>
        </div>

        {/* Toggle Nav */}
        <div className="timeline-toggle-bar">
          <button
            type="button"
            className={`timeline-tab-btn ${activeTimeline === 'experience' ? 'is-active' : ''}`}
            onClick={() => setActiveTimeline('experience')}
          >
            <Briefcase size={16} />
            <span>Work Experience ({experience.length})</span>
          </button>
          <button
            type="button"
            className={`timeline-tab-btn ${activeTimeline === 'education' ? 'is-active' : ''}`}
            onClick={() => setActiveTimeline('education')}
          >
            <GraduationCap size={16} />
            <span>Education & Degrees ({education.length})</span>
          </button>
        </div>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          {activeTimeline === 'experience' ? (
            <div className="timeline-tree">
              {experience.map((item, idx) => (
                <div key={item.id} className="timeline-card-item">
                  <div className="timeline-node">
                    <div className="node-dot" />
                    <div className="node-line" />
                  </div>

                  <div className="timeline-card-body">
                    <div className="timeline-header-row">
                      <div className="role-and-company">
                        <h3 className="timeline-role">{item.role}</h3>
                        <span className="timeline-company">{item.company}</span>
                      </div>
                      <div className="timeline-meta-badges">
                        <span className="timeline-badge-duration">
                          <Calendar size={13} />
                          {item.duration}
                        </span>
                        <span className="timeline-badge-location">
                          <MapPin size={13} />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <p className="timeline-desc-text">{item.description}</p>

                    <div className="timeline-achievements">
                      <span className="achievements-label">Core Responsibilities & Milestones:</span>
                      <ul className="achievements-list">
                        {item.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="achievement-li">
                            <CheckCircle2 size={13} className="ach-icon" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="timeline-tree">
              {education.map((item, idx) => (
                <div key={item.id} className="timeline-card-item">
                  <div className="timeline-node">
                    <div className="node-dot" />
                    <div className="node-line" />
                  </div>

                  <div className="timeline-card-body">
                    <div className="timeline-header-row">
                      <div className="role-and-company">
                        <h3 className="timeline-role">{item.degree}</h3>
                        <span className="timeline-company">{item.institution}</span>
                      </div>
                      <div className="timeline-meta-badges">
                        <span className="timeline-badge-duration">
                          <Calendar size={13} />
                          {item.duration}
                        </span>
                        <span className="timeline-badge-grade">
                          {item.grade}
                        </span>
                      </div>
                    </div>

                    <p className="timeline-desc-text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

