import { MailRight } from 'pixelarticons/react/MailRight'
import SectionTitle from './SectionTitle'

const contacts = [
  {
    href: 'mailto:iam@rinki.top',
    label: 'Email',
    value: 'iam@rinki.top',
  },
  {
    href: 'https://github.com/rinki-s',
    label: 'GitHub',
    value: 'github.com/rinki-s',
  },
  {
    href: 'https://www.linkedin.com/in/xinyuan--song',
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/xinyuan--song',
  },
]

function Contact() {
  return (
    <section className="mt-10" aria-labelledby="contact-title">
      <SectionTitle icon={MailRight} id="contact-title">
        GET IN TOUCH WITH ME
      </SectionTitle>
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li key={contact.href} className="flex flex-wrap gap-x-3 gap-y-1">
            <span className="min-w-18 text-caption font-medium text-ink-muted">
              {contact.label}
            </span>
            <a
              className="text-caption text-ink underline decoration-ink-muted/40 underline-offset-4 transition-colors duration-150 hover:text-ink-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              href={contact.href}
              rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
            >
              {contact.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
