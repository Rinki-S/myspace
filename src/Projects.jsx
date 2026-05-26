import daoCard from './assets/dao-card.svg'
import gitChunkedStoreCard from './assets/git-chunked-store-card.svg'

const projects = [
  {
    description:
      'An AI-native, local-first workspace for developer growth, bringing projects, tasks, notes, search, and long-term engineering context into one calm desktop app.',
    href: 'https://github.com/Rinki-S/dao',
    image: daoCard,
    language: 'JavaScript',
    name: 'Rinki-S/dao',
  },
  {
    description:
      'An experimental Git storage backend that splits large files into 64KB SHA-256 chunks with compression, deduplication, clean/smudge filters, fsck, stats, and GC.',
    href: 'https://github.com/Rinki-S/git-chunked-store',
    image: gitChunkedStoreCard,
    language: 'Go',
    name: 'Rinki-S/git-chunked-store',
  },
]

function Projects() {
  return (
    <section className="mt-10" aria-labelledby="projects-title">
      <h2
        id="projects-title"
        className="section-label mb-3 text-caption text-ink-muted"
      >
        WHAT I&apos;M WORKING ON
      </h2>
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
                className="aspect-video w-full object-cover"
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
