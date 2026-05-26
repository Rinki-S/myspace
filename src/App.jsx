import Contact from './Contact'
import Footer from './Footer'
import GithubHeatmap from './GithubHeatmap'
import Intro from './Intro'
import OpeningPattern from './OpeningPattern'
import Projects from './Projects'
import TechStack from './TechStack'

function App() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-home-page text-ink">
      <OpeningPattern />
      <div className="relative z-10 mx-auto max-w-173 px-6 py-12 leading-relaxed animate-content-reveal sm:py-24">
        <Intro />
        <GithubHeatmap />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App
