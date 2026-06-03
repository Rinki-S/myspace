import { Folder } from "pixelarticons/react/Folder";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section aria-labelledby="projects-title">
      <SectionTitle icon={Folder} id="projects-title">
        WHAT I&apos;M WORKING ON
      </SectionTitle>
      <ul className="grid gap-4">
        {projects.map((project) => (
          <li key={project.href}>
            <a
              className="project-card group relative grid overflow-hidden border border-ink/10 bg-white/30 text-ink transition-colors duration-150 hover:border-ink-muted/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:block sm:min-h-34"
              href={project.href}
              rel="noreferrer"
              target="_blank"
            >
              <span className="flex aspect-video min-h-0 items-center justify-center bg-white/25 p-4 sm:absolute sm:inset-y-0 sm:left-0 sm:w-[32%] sm:aspect-auto">
                <img
                  alt=""
                  className="block h-4/5 w-4/5 min-h-0 min-w-0 object-contain"
                  src={project.image}
                />
              </span>
              <span className="flex min-w-0 flex-col p-4 sm:ml-[32%]">
                <span className="block text-body font-semibold wrap-break-word">
                  {project.name}
                </span>
                <span className="mt-2 block text-caption text-ink-muted text-pretty">
                  {project.description}
                </span>
                <span className="mt-3 block text-[0.6875rem] font-medium text-ink-muted">
                  {project.techStack.join(", ")}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
