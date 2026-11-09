import React, { useState } from 'react';
import { ExternalLink, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ProjectModal } from './ProjectModal';

export const Projects = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Branding', 'UI/UX', 'Marketing', 'Print'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding projects-section">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-heading text-center">
          <span className="section-subtitle">Selected Works</span>
          <h2 className="section-title">Featured Projects & Case Studies</h2>
          <div className="section-line" />
          <p className="section-intro">
            A curated collection of branding systems, digital web products, marketing campaigns, and editorial print designs delivered for global partners.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${selectedCategory === cat ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-thumbnail-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-thumbnail-img"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-overlay-actions">
                    <button
                      type="button"
                      className="overlay-btn"
                      onClick={() => setActiveModalProject(project)}
                      title="Quick View Details"
                    >
                      <Eye size={18} />
                      <span>Details</span>
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="overlay-btn"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </a>
                  </div>
                </div>

                <div className="project-category-tag">{project.category}</div>
                {project.metrics && (
                  <div className="project-metric-pill">
                    <Sparkles size={11} />
                    <span>{project.metrics}</span>
                  </div>
                )}
              </div>

              <div className="project-info">
                <div className="project-meta-top">
                  <span className="project-client">{project.client}</span>
                  <span className="project-year">{project.year}</span>
                </div>

                <h3 
                  className="project-title"
                  onClick={() => setActiveModalProject(project)}
                >
                  {project.title}
                </h3>

                <p className="project-desc">{project.description}</p>

                <div className="project-tags-row">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="project-tag-item">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="project-tag-item more">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="project-card-footer">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="card-link primary"
                  >
                    <span>View Case Study</span>
                    <ExternalLink size={14} />
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="card-link ghost"
                      title="Source Code / Assets"
                      aria-label="View source code"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
