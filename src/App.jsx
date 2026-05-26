import GithubHeatmap from './GithubHeatmap'
import OpeningPattern from './OpeningPattern'

function App() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-home-page px-6 py-12 text-ink sm:px-10 lg:px-16">
      <OpeningPattern />
      <div className="relative z-10 animate-content-reveal">
        <GithubHeatmap />
      </div>
    </main>
  )
}

export default App
