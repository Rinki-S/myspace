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

const columns = 53
const gap = 3
const minBlockSize = 3
const maxBlockSize = 18

function GithubHeatmap() {
  const containerRef = useRef(null)
  const [blockSize, setBlockSize] = useState(12)
  const heatmapWidth = columns * blockSize + gap * (columns - 1)

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
  }, [])

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
            username={GITHUB_USERNAME}
          />
        </div>
      </div>
    </section>
  )
}

export default GithubHeatmap
