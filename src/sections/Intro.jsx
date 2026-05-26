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
    <section className="mb-10" aria-label="Introduction">
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
        I build thoughtful interfaces with code, typography, and quiet details.
      </p>
    </section>
  )
}

export default Intro
