import { GitHubCalendar } from 'react-github-calendar'

const GITHUB_USERNAME = 'Rinki-S'

const theme = {
  light: [
    'var(--color-heatmap-empty)',
    'var(--color-heatmap-low)',
    'var(--color-heatmap-mid)',
    'var(--color-heatmap-high)',
    'var(--color-heatmap-peak)',
  ],
}

const labels = {
  totalCount: '{{count}} contributions in {{year}}',
  legend: {
    less: 'Less',
    more: 'More',
  },
}

function GithubHeatmap() {
  return (
    <section className="w-full max-w-5xl" aria-labelledby="github-heatmap-title">
      <div className="mb-6">
        <p className="text-caption font-medium uppercase text-ink-muted">
          GitHub activity
        </p>
        <h1
          id="github-heatmap-title"
          className="font-heading text-title text-ink text-balance"
        >
          Contribution heatmap
        </h1>
      </div>

      <div className="w-full overflow-x-auto pb-2">
        <GitHubCalendar
          className="min-w-max"
          username={GITHUB_USERNAME}
          colorScheme="light"
          theme={theme}
          blockMargin={4}
          blockRadius={3}
          blockSize={12}
          fontSize={13}
          labels={labels}
          showWeekdayLabels={['mon', 'wed', 'fri']}
        />
      </div>
    </section>
  )
}

export default GithubHeatmap
