'use client';

import { projects } from '../app/data';
import { ArrowUpRight, Terminal } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        {/* Header */}
        <div className="projects-header">
          <p className="section-label">Our Work</p>
          <h2 className="projects-title">
            Crafting <span className="text-gradient">high-performance</span> digital products.
          </h2>
        </div>

        {/* Projects list */}
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Browser mockup */}
              <div className="project-mockup">
                <div className="project-mockup-bar">
                  <div className="mockup-dot" />
                  <div className="mockup-dot" />
                  <div className="mockup-dot" />
                  <div className="mockup-url">{project.link}</div>
                </div>
                <div className="mockup-img-area">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  ) : (
                    <div className="project-mockup-placeholder">
                      <Terminal size={100} />
                    </div>
                  )}
                </div>
              </div>

              {/* Project info */}
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-desc">{project.description}</p>

                <div className="project-actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Project <ArrowUpRight size={17} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-icon"
                    aria-label="View source code"
                  >
                    <Terminal size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
