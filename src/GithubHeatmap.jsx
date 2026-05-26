import { useEffect, useState } from 'react'
import { GitCommitSharp } from 'pixelarticons/react/GitCommitSharp'
import { GitHubCalendar } from 'react-github-calendar'
import SectionTitle from './SectionTitle'

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

const gap = 3
const blockSize = 12
const smallScreenQuery = '(max-width: 640px)'

function getRecentMonthsData(data, months) {
  const now = new Date()
  const cutoff = new Date(now)
  cutoff.setMonth(cutoff.getMonth() - months)

  return data.filter((activity) => new Date(activity.date) >= cutoff)
}

function GithubHeatmap() {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(smallScreenQuery)
    const updateScreen = () => setIsSmallScreen(media.matches)

    updateScreen()
    media.addEventListener('change', updateScreen)

    return () => media.removeEventListener('change', updateScreen)
  }, [])

  return (
    <section className="w-full" aria-label="GitHub contribution heatmap">
      <SectionTitle icon={GitCommitSharp}>
        MY CONTRIBUTIONS
      </SectionTitle>
      <div className="github-heatmap">
        <GitHubCalendar
          blockMargin={gap}
          blockRadius={Math.max(1, Math.floor(blockSize * 0.25))}
          blockSize={blockSize}
          colorScheme="light"
          fontSize={0}
          hideColorLegend
          hideMonthLabels
          hideTotalCount
          hideWeekdayLabels
          showColorLegend={false}
          showMonthLabels={false}
          showTotalCount={false}
          showWeekdayLabels={false}
          theme={theme}
          transformData={(data) =>
            getRecentMonthsData(data, isSmallScreen ? 6 : 9)
          }
          username={GITHUB_USERNAME}
        />
      </div>
    </section>
  )
}

export default GithubHeatmap
