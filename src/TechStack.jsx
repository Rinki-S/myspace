import {
  Electron as ElectronIcon,
  Git as GitIcon,
  Go as GoIcon,
  JavaScript as JavaScriptIcon,
  NodeJs as NodeJsIcon,
  React as ReactIcon,
  ShadcnUI as ShadcnUIIcon,
  TailwindCSS as TailwindCSSIcon,
  ViteJS as ViteJSIcon,
  Zod as ZodIcon,
} from 'developer-icons'
import { Cpu } from 'pixelarticons/react/Cpu'
import SectionTitle from './SectionTitle'

const technologies = [
  { Icon: ElectronIcon, label: 'Electron' },
  { Icon: ReactIcon, label: 'React' },
  { Icon: JavaScriptIcon, label: 'JavaScript' },
  { Icon: GoIcon, label: 'Go' },
  { Icon: TailwindCSSIcon, label: 'Tailwind CSS' },
  { Icon: ShadcnUIIcon, label: 'shadcn/ui' },
  { Icon: ZodIcon, label: 'Zod' },
  { Icon: GitIcon, label: 'Git' },
  { Icon: ViteJSIcon, label: 'Vite' },
  { Icon: NodeJsIcon, label: 'Node.js' },
]

function TechStack() {
  return (
    <section className="mt-10" aria-labelledby="techstack-title">
      <SectionTitle icon={Cpu} id="techstack-title">
        TECHSTACK
      </SectionTitle>
      <ul className="flex flex-wrap items-center gap-4" aria-label="Technology stack">
        {technologies.map(({ Icon, label }) => (
          <li key={label}>
            <span
              aria-label={label}
              className="block"
              title={label}
            >
              <Icon size={30} aria-hidden="true" />
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TechStack
