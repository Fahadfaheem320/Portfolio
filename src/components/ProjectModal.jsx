import React from 'react';
import { X, ExternalLink, Calendar, Building, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="modal-image-container">
          <img
            src={project.image}
            alt={project.title}
            className="modal-project-img"
          />
          <div className="modal-category-badge">{project.category}</div>
        </div>

        <div className="modal-body">
          <div className="modal-meta-row">
            <span className="modal-meta-item">
              <Building size={14} />
              {project.client}
            </span>
            <span className="modal-meta-item">
              <Calendar size={14} />
              {project.year}
            </span>
            {project.metrics && (
              <span className="modal-metric-badge">
                <Sparkles size={13} />
                {project.metrics}
              </span>
            )}
          </div>

          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-desc">{project.description}</p>

          <div className="modal-tech-stack">
            <h4 className="tech-stack-title">Technologies & Disciplines</h4>
            <div className="tech-tags-list">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tech-tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-actions-row">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <span>View Live Project</span>
              <ExternalLink size={16} />
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <GithubIcon size={16} />
                <span>Source / Assets</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
