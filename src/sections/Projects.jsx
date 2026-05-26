import { Folder } from 'pixelarticons/react/Folder'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section aria-labelledby="projects-title">
      <SectionTitle icon={Folder} id="projects-title">
        WHAT I&apos;M WORKING ON
      </SectionTitle>
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.href}>
            <a
              className="project-card group block h-full overflow-hidden border border-ink/10 bg-white/30 text-ink transition-colors duration-150 hover:border-ink-muted/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              href={project.href}
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt=""
                className="aspect-video w-full bg-white/25 object-contain p-4"
                src={project.image}
              />
              <span className="block p-4">
                <span className="block text-body font-semibold break-words">
                  {project.name}
                </span>
                <span className="mt-2 block text-caption text-ink-muted text-pretty">
                  {project.description}
                </span>
                <span className="mt-4 block text-caption font-medium text-ink-muted">
                  {project.language}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
