import OpeningPattern from './OpeningPattern'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import GithubHeatmap from './sections/GithubHeatmap'
import Intro from './sections/Intro'
import Projects from './sections/Projects'
import TechStack from './sections/TechStack'

const sections = [
  Intro,
  GithubHeatmap,
  Projects,
  TechStack,
  Contact,
  Footer,
]
const sectionRevealDelays = [4.76, 4.84, 4.99, 5.22, 5.53, 5.92]

function App() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-home-page text-ink">
      <OpeningPattern />
      <div className="relative z-10 mx-auto max-w-173 px-6 py-12 leading-relaxed sm:py-24">
        {sections.map((Section, index) => (
          <div
            className="section-reveal"
            key={Section.name}
            style={{ '--section-delay': `${sectionRevealDelays[index]}s` }}
          >
            <Section />
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
