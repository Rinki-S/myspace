import StackIcon from 'tech-stack-icons'
import { Cpu } from 'pixelarticons/react/Cpu'
import SectionTitle from '../components/SectionTitle'
import { technologies } from '../data/tech-stack'

function TechStack() {
  return (
    <section aria-labelledby="techstack-title">
      <svg aria-hidden="true" className="absolute size-0" focusable="false">
        <defs>
          <filter id="tech-stack-icon-tint" colorInterpolationFilters="sRGB">
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.15656 0.992157" />
              <feFuncG type="table" tableValues="0.093948 0.937255" />
              <feFuncB type="table" tableValues="0.125251 0.94902" />
              <feFuncA type="identity" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <SectionTitle icon={Cpu} id="techstack-title">
        TECHSTACK
      </SectionTitle>
      <ul className="flex flex-wrap items-center gap-4" aria-label="Technology stack">
        {technologies.map(({ href, icon, label }) => (
          <li key={label}>
            <a
              aria-label={label}
              className="tech-stack-link relative block transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              data-tooltip={label}
              href={href}
              rel="noreferrer"
              target="_blank"
            >
              <StackIcon
                className="tech-stack-icon size-[30px]"
                name={icon}
                variant="grayscale"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TechStack
