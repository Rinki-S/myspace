import { Cpu } from 'pixelarticons/react/Cpu'
import SectionTitle from '../components/SectionTitle'
import { technologies } from '../data/tech-stack'

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
