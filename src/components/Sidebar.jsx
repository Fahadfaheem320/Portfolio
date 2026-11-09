import React from 'react';
import { User, Calendar, Phone, Mail, Globe, MapPin } from 'lucide-react';

export const Sidebar = ({ data, isEditable }) => {
  const { personalInfo, skills, honorsAwards, certifications, interests } = data;

  const renderIcon = (iconName) => {
    const props = { size: 14, className: "sidebar-icon", strokeWidth: 2 };
    switch (iconName) {
      case 'user':
        return <User {...props} />;
      case 'calendar':
        return <Calendar {...props} />;
      case 'phone':
        return <Phone {...props} />;
      case 'mail':
        return <Mail {...props} />;
      case 'globe':
        return <Globe {...props} />;
      case 'map-pin':
        return <MapPin {...props} />;
      default:
        return <User {...props} />;
    }
  };

  return (
    <aside className="resume-sidebar">
      {/* 1. PERSONAL INFORMATION */}
      <section className="sidebar-section">
        <h2 
          className="sidebar-title"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {personalInfo.title}
        </h2>
        <div className="sidebar-divider" />
        <ul className="personal-info-list">
          {personalInfo.items.map((item) => (
            <li key={item.id} className="info-item">
              <span className="info-icon-wrapper" aria-hidden="true">
                {renderIcon(item.icon)}
              </span>
              <div className="info-content">
                <span 
                  className="info-label"
                  contentEditable={isEditable}
                  suppressContentEditableWarning
                >
                  {item.label}:{' '}
                </span>
                {item.href && !isEditable ? (
                  <a href={item.href} className="info-link" target="_blank" rel="noreferrer">
                    {item.value}
                  </a>
                ) : (
                  <span 
                    className="info-val"
                    contentEditable={isEditable}
                    suppressContentEditableWarning
                  >
                    {item.value}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 2. SKILLS */}
      <section className="sidebar-section">
        <h2 
          className="sidebar-title"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {skills.title}
        </h2>
        <div className="sidebar-divider" />
        <div className="skills-group">
          {skills.categories.map((cat, idx) => (
            <div key={idx} className="skill-item">
              <h3 
                className="skill-name"
                contentEditable={isEditable}
                suppressContentEditableWarning
              >
                {cat.name}
              </h3>
              <p 
                className="skill-details"
                contentEditable={isEditable}
                suppressContentEditableWarning
              >
                {cat.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HONORS & AWARDS */}
      <section className="sidebar-section">
        <h2 
          className="sidebar-title"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {honorsAwards.title}
        </h2>
        <div className="sidebar-divider" />
        <div className="timeline-items">
          {honorsAwards.items.map((award, idx) => (
            <div key={idx} className="timeline-item">
              <span 
                className="timeline-year"
                contentEditable={isEditable}
                suppressContentEditableWarning
              >
                {award.year}:
              </span>{' '}
              <span 
                className="timeline-desc"
                contentEditable={isEditable}
                suppressContentEditableWarning
              >
                {award.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CERTIFICATIONS */}
      <section className="sidebar-section">
        <h2 
          className="sidebar-title"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {certifications.title}
        </h2>
        <div className="sidebar-divider" />
        <div className="timeline-items">
          {certifications.items.map((cert, idx) => (
            <div key={idx} className="timeline-item">
              <span 
                className="timeline-year"
                contentEditable={isEditable}
                suppressContentEditableWarning
              >
                {cert.year}:
              </span>{' '}
              <span 
                className="timeline-desc"
                contentEditable={isEditable}
                suppressContentEditableWarning
              >
                {cert.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERESTS */}
      <section className="sidebar-section">
        <h2 
          className="sidebar-title"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {interests.title}
        </h2>
        <div className="sidebar-divider" />
        <p 
          className="interests-text"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {interests.description}
        </p>
      </section>
    </aside>
  );
};
