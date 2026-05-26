import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react'
import { useEffect, useRef, useState } from 'react'
import {
  CircleShape,
  FiveStarShape,
  FourStarShape,
} from '../components/intro-shapes'

const originalPattern = [
  'circle',
  'circle',
  'fiveStar',
  'circle',
  'circle',
  'fourStar',
  'blank',
  'circle',
]
const randomShapePool = ['circle', 'fourStar', 'fiveStar', 'blank']

function clearTimers(timers) {
  timers.forEach((timer) => window.clearTimeout(timer))
  timers.length = 0
}

function randomPattern() {
  return randomShapePool[Math.floor(Math.random() * randomShapePool.length)]
}

function PatternShape({ className, shape }) {
  if (shape === 'blank') {
    return <span className={className} />
  }

  const Shape =
    shape === 'fourStar'
      ? FourStarShape
      : shape === 'fiveStar'
        ? FiveStarShape
        : CircleShape

  return <Shape className={className} />
}

function Intro() {
  const timersRef = useRef([])
  const [pattern, setPattern] = useState(originalPattern)

  useEffect(() => {
    const timers = timersRef.current

    return () => clearTimers(timers)
  }, [])

  const randomizePattern = () => {
    clearTimers(timersRef.current)

    originalPattern.forEach((originalShape, index) => {
      const changeDelay = Math.round(Math.random() * 640)
      const restoreDelay = changeDelay + 700 + Math.round(Math.random() * 900)

      const changeTimer = window.setTimeout(() => {
        setPattern((currentPattern) =>
          currentPattern.map((shape, shapeIndex) =>
            shapeIndex === index ? randomPattern() : shape,
          ),
        )
      }, changeDelay)

      const restoreTimer = window.setTimeout(() => {
        setPattern((currentPattern) =>
          currentPattern.map((shape, shapeIndex) =>
            shapeIndex === index ? originalShape : shape,
          ),
        )
      }, restoreDelay)

      timersRef.current.push(changeTimer, restoreTimer)
    })
  }

  return (
    <section aria-label="Introduction">
      <div
        className="intro-pattern text-home-page"
        aria-hidden="true"
        onMouseEnter={randomizePattern}
        onPointerEnter={randomizePattern}
      >
        <PatternShape
          className="intro-pattern__left-top"
          shape={pattern[0]}
        />
        <PatternShape
          className="intro-pattern__left-right"
          shape={pattern[1]}
        />
        <PatternShape
          className="intro-pattern__left-bottom"
          shape={pattern[2]}
        />
        <PatternShape
          className="intro-pattern__left-end"
          shape={pattern[3]}
        />
        <PatternShape
          className="intro-pattern__right-top"
          shape={pattern[4]}
        />
        <PatternShape
          className="intro-pattern__right-end"
          shape={pattern[5]}
        />
        <PatternShape
          className="intro-pattern__right-empty"
          shape={pattern[6]}
        />
        <PatternShape
          className="intro-pattern__right-bottom"
          shape={pattern[7]}
        />
      </div>
      <p className="mt-3 text-body text-ink-muted text-pretty">
        I&apos;m a software engineering student working toward frontend and
        full-stack roles. I like turning rough ideas into useful products with
        React, JavaScript, and Go, while also working on API integration, state
        management, databases, and deployment. You can find more of my code on{' '}
        <a
          className="inline-flex items-baseline gap-1 text-ink underline decoration-ink/20 underline-offset-4 transition-colors duration-150 hover:decoration-ink/55 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          href="https://github.com/Rinki-S"
          rel="noreferrer"
          target="_blank"
        >
          <IconBrandGithub
            aria-hidden="true"
            className="relative top-0.5 size-4 shrink-0"
            stroke={1.8}
          />
          GitHub
          <IconArrowUpRight
            aria-hidden="true"
            className="relative top-0.5 size-4 shrink-0"
            stroke={1.8}
          />
        </a>
        .
      </p>
    </section>
  )
}

export default Intro
