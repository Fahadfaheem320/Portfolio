import React from 'react';

export const MainContent = ({ data, isEditable }) => {
  const { objective, education, workExperience, activities } = data;

  return (
    <div className="resume-main-content">
      {/* 1. OBJECTIVE */}
      <section className="main-section">
        <h2 
          className="main-section-title"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {objective.title}
        </h2>
        <div className="main-divider" />
        <p 
          className="objective-text"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {objective.text}
        </p>
      </section>

      {/* 2. EDUCATION */}
      <section className="main-section">
        <h2 
          className="main-section-title"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {education.title}
        </h2>
        <div className="main-divider" />
        <div className="entry-list">
          {education.items.map((edu, idx) => (
            <div key={idx} className="entry-item">
              <div className="entry-header">
                <span 
                  className="entry-name-bold"
                  contentEditable={isEditable}
                  suppressContentEditableWarning
                >
                  {edu.institution}
                </span>
                <span 
                  className="entry-date"
                  contentEditable={isEditable}
                  suppressContentEditableWarning
                >
                  {edu.duration}
                </span>
              </div>
              <div className="entry-sub-details">
                <div className="sub-detail-line">
                  <span className="detail-label">Major: </span>
                  <span 
                    className="detail-value"
                    contentEditable={isEditable}
                    suppressContentEditableWarning
                  >
                    {edu.major}
                  </span>
                </div>
                <div className="sub-detail-line">
                  <span className="detail-label">GPA: </span>
                  <span 
                    className="detail-value"
                    contentEditable={isEditable}
                    suppressContentEditableWarning
                  >
                    {edu.gpa}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WORK EXPERIENCE */}
      <section className="main-section">
        <h2 
          className="main-section-title"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {workExperience.title}
        </h2>
        <div className="main-divider" />
        <div className="entry-list">
          {workExperience.items.map((job, idx) => (
            <div key={idx} className="entry-item">
              <div className="entry-header">
                <span 
                  className="entry-name-bold"
                  contentEditable={isEditable}
                  suppressContentEditableWarning
                >
                  {job.company}
                </span>
                <span 
                  className="entry-date"
                  contentEditable={isEditable}
                  suppressContentEditableWarning
                >
                  {job.duration}
                </span>
              </div>
              <div className="entry-position-line">
                <span className="position-label">Position: </span>
                <span 
                  className="position-value"
                  contentEditable={isEditable}
                  suppressContentEditableWarning
                >
                  {job.position}
                </span>
              </div>
              <ul className="bullet-list">
                {job.bullets.map((bullet, bIdx) => (
                  <li 
                    key={bIdx} 
                    className="bullet-item"
                    contentEditable={isEditable}
                    suppressContentEditableWarning
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ACTIVITIES */}
      <section className="main-section">
        <h2 
          className="main-section-title"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {activities.title}
        </h2>
        <div className="main-divider" />
        <div className="entry-list">
          {activities.items.map((act, idx) => (
            <div key={idx} className="entry-item">
              <div className="entry-header">
                <span 
                  className="entry-name-bold"
                  contentEditable={isEditable}
                  suppressContentEditableWarning
                >
                  {act.organization}
                </span>
                <span 
                  className="entry-date"
                  contentEditable={isEditable}
                  suppressContentEditableWarning
                >
                  {act.duration}
                </span>
              </div>
              <div className="entry-position-line">
                <span className="position-label">Position: </span>
                <span 
                  className="position-value"
                  contentEditable={isEditable}
                  suppressContentEditableWarning
                >
                  {act.position}
                </span>
              </div>
              <ul className="bullet-list">
                {act.bullets.map((bullet, bIdx) => (
                  <li 
                    key={bIdx} 
                    className="bullet-item"
                    contentEditable={isEditable}
                    suppressContentEditableWarning
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
