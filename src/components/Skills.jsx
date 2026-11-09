import React, { useState } from 'react';
import { CheckCircle2, Cpu, Wrench, TrendingUp, Globe2, Sparkles } from 'lucide-react';

export const Skills = ({ skills }) => {
  const [activeTab, setActiveTab] = useState('all');

  const categoryIcons = {
    design: <Cpu size={16} />,
    tools: <Wrench size={16} />,
    marketing: <TrendingUp size={16} />,
    languages: <Globe2 size={16} />
  };

  const filteredCategories = activeTab === 'all'
    ? skills.categories
    : skills.categories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-heading text-center">
          <span className="section-subtitle">Core Capabilities</span>
          <h2 className="section-title">Skills & Professional Expertise</h2>
          <div className="section-line" />
          <p className="section-intro">
            A balanced synthesis of creative craft, software precision, digital marketing savvy, and multilingual cross-border communication.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tab-nav">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'all' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <Sparkles size={15} />
            <span>All Disciplines</span>
          </button>
          {skills.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`tab-btn ${activeTab === cat.id ? 'is-active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {categoryIcons[cat.id]}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="skills-category-card">
              <div className="category-card-header">
                <div className="cat-icon-badge">
                  {categoryIcons[category.id]}
                </div>
                <h3 className="category-card-title">{category.name}</h3>
              </div>

              <div className="skills-list">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-progress-item">
                    <div className="skill-info-row">
                      <span className="skill-name">
                        <CheckCircle2 size={13} className="skill-check-icon" />
                        {skill.name}
                      </span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>

                    <div className="progress-track" aria-hidden="true">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Reference Image Callout - Languages & Tools */}
        <div className="skills-callout-strip">
          <div className="strip-item">
            <span className="strip-label">Office & Computer:</span>
            <span className="strip-val">Microsoft Word, Excel, PowerPoint</span>
          </div>
          <div className="strip-divider-v" />
          <div className="strip-item">
            <span className="strip-label">Multilingual:</span>
            <span className="strip-val">English (Fluent), Japanese (Intermediate), Chinese (Conversational)</span>
          </div>
          <div className="strip-divider-v" />
          <div className="strip-item">
            <span className="strip-label">Core Suite:</span>
            <span className="strip-val">Figma, Adobe CC (Illustrator, Photoshop, InDesign)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

