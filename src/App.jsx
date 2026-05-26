import GithubHeatmap from './GithubHeatmap'
import Intro from './Intro'
import OpeningPattern from './OpeningPattern'

function App() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-home-page text-ink">
      <OpeningPattern />
      <div className="relative z-10 mx-auto max-w-173 px-6 py-12 leading-relaxed animate-content-reveal sm:py-24">
        <Intro />
        <GithubHeatmap />
      </div>
    </main>
  )
}

export default App
