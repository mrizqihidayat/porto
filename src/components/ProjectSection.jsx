import { useMemo, useState, useEffect } from 'react'
import '../css/ProjectSection.css'

const filters = ['All', 'UI/UX', 'Frontend', 'Fullstack']
const PROJECTS_PER_PAGE = 6

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = project.images || []
  const hasMultipleImages = images.length > 1
  const isUiUx = project.category === 'UI/UX'

  useEffect(() => {
    if (!hasMultipleImages) return

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [hasMultipleImages, images])

  const handleDotClick = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="proj-card" key={project.num}>
      <div className="proj-num"></div>
      <div className="proj-thumb-wrap">
        {images && images.length > 0 ? (
          <>
            {images.map((image, index) => (
              <img
                key={`${project.num}-${index}`}
                src={image}
                alt={`${project.label} ${project.accent} preview ${index + 1}`}
                className={`proj-thumb ${currentImageIndex === index ? 'is-active' : ''}`}
                aria-hidden={currentImageIndex !== index}
              />
            ))}
          </>
        ) : (
          <div className="proj-thumb proj-thumb-empty">No Image</div>
        )}
      </div>
      {hasMultipleImages && (
        <div className="proj-dots" role="tablist" aria-label={`Image navigation for ${project.label}`}>
          {images.map((_, index) => (
            <button
              key={`${project.num}-dot-${index}`}
              type="button"
              className={`proj-dot ${currentImageIndex === index ? 'is-active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Show image ${index + 1}`}
              aria-selected={currentImageIndex === index}
              role="tab"
            />
          ))}
        </div>
      )}
      <div className="proj-name">
        {project.label} <span>{project.accent}</span>
      </div>
      <div className="proj-tech">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <p className="proj-desc" dangerouslySetInnerHTML={{ __html: project.desc }} />
      {project.note && <p className="proj-note">Note: {project.note}</p>}
      <div className={`proj-actions ${isUiUx ? 'proj-actions-single' : ''}`}>
        {isUiUx ? (
          <a className="btn-view btn-view-single" href={project.codeUrl} target="_blank" rel="noreferrer">
            View Design
          </a>
        ) : (
          <>
            <a className="btn-view" href={project.codeUrl} target="_blank" rel="noreferrer">
              View Code
            </a>
            <a className="btn-view btn-view-secondary" href={project.pageUrl} target="_blank" rel="noreferrer">
              Go To Page
            </a>
          </>
        )}
      </div>
    </div>
  )
}

const ProjectsSection = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(0)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter, projects])

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const startIdx = currentPage * PROJECTS_PER_PAGE
  const endIdx = startIdx + PROJECTS_PER_PAGE
  const paginatedProjects = filteredProjects.slice(startIdx, endIdx)

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    setCurrentPage(0)
  }

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  return (
    <section className="projects" id="projects">
      <div className="section-head">
        <div className="section-title">
          Projects <em>Portofolio.</em>
        </div>
        <div className="project-filter-wrap" aria-label="Project filters">
          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-pill ${activeFilter === filter ? 'is-active' : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="projects-grid">
        {paginatedProjects.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="projects-pagination">
          <button
            className="pagination-btn pagination-prev"
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            aria-label="Previous page"
          >
            Previous
          </button>
          <span className="pagination-info">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            className="pagination-btn pagination-next"
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection