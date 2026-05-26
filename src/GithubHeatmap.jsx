import { useEffect, useRef, useState } from 'react'
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

const fullYearColumns = 53
const halfYearColumns = 27
const gap = 3
const minBlockSize = 3
const maxBlockSize = 18
const smallScreenQuery = '(max-width: 640px)'

function getRecentMonthsData(data, months) {
  const now = new Date()
  const cutoff = new Date(now)
  cutoff.setMonth(cutoff.getMonth() - months)

  return data.filter((activity) => new Date(activity.date) >= cutoff)
}

function GithubHeatmap() {
  const containerRef = useRef(null)
  const [blockSize, setBlockSize] = useState(12)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const columns = isSmallScreen ? halfYearColumns : fullYearColumns
  const heatmapWidth = columns * blockSize + gap * (columns - 1)

  useEffect(() => {
    const media = window.matchMedia(smallScreenQuery)
    const updateScreen = () => setIsSmallScreen(media.matches)

    updateScreen()
    media.addEventListener('change', updateScreen)

    return () => media.removeEventListener('change', updateScreen)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const updateSize = () => {
      const availableWidth = container.getBoundingClientRect().width
      const nextBlockSize = Math.floor(
        (availableWidth - gap * (columns - 1)) / columns,
      )

      setBlockSize(Math.max(minBlockSize, Math.min(maxBlockSize, nextBlockSize)))
    }

    updateSize()

    const observer = new ResizeObserver(updateSize)
    observer.observe(container)

    return () => observer.disconnect()
  }, [columns])

  return (
    <section className="w-full" aria-label="GitHub contribution heatmap">
      <div className="github-heatmap" ref={containerRef}>
        <div className="mx-auto" style={{ width: heatmapWidth }}>
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
            transformData={
              isSmallScreen
                ? (data) => getRecentMonthsData(data, 6)
                : undefined
            }
            username={GITHUB_USERNAME}
          />
        </div>
      </div>
    </section>
  )
}

export default GithubHeatmap
