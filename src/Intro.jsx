function CircleShape(props) {
  return (
    <svg viewBox="0 0 107 106" fill="none" {...props}>
      <path
        d="M0 53C0 23.7289 23.7462 0 53.0387 0C82.3311 0 106.077 23.7289 106.077 53C106.077 82.2711 82.3311 106 53.0387 106C23.7462 106 0 82.2711 0 53Z"
        fill="currentColor"
      />
    </svg>
  )
}

function FourStarShape(props) {
  return (
    <svg viewBox="0 0 107 106" fill="none" {...props}>
      <path
        d="M48.0612 3.46297C49.771 -1.15433 56.3064 -1.15432 58.0162 3.46298L69.2142 33.703C69.7517 35.1546 70.8971 36.2992 72.3498 36.8363L102.612 48.0261C107.233 49.7347 107.233 56.2653 102.612 57.9739L72.3498 69.1637C70.8971 69.7008 69.7517 70.8454 69.2142 72.297L58.0162 102.537C56.3064 107.154 49.771 107.154 48.0612 102.537L36.8632 72.297C36.3257 70.8454 35.1803 69.7008 33.7276 69.1637L3.4655 57.9739C-1.15517 56.2653 -1.15517 49.7347 3.4655 48.0261L33.7276 36.8363C35.1803 36.2992 36.3257 35.1546 36.8632 33.703L48.0612 3.46297Z"
        fill="currentColor"
      />
    </svg>
  )
}

function FiveStarShape(props) {
  return (
    <svg viewBox="0 0 111 106" fill="none" {...props}>
      <path
        d="M48.7046 4.24457C51.0439 -1.41486 59.0113 -1.41486 61.3506 4.24457L71.5347 28.8831C72.5209 31.269 74.7507 32.8992 77.3105 33.1056L103.745 35.2381C109.817 35.7279 112.279 43.3527 107.653 47.3403L87.5124 64.7002C85.5622 66.3812 84.7105 69.0189 85.3063 71.5324L91.4594 97.4889C92.8728 103.451 86.427 108.163 81.2286 104.968L58.5972 91.0589C56.4057 89.712 53.6495 89.712 51.458 91.0589L28.8266 104.968C23.6282 108.163 17.1825 103.451 18.5958 97.4889L24.749 71.5324C25.3448 69.0189 24.4931 66.3812 22.5428 64.7002L2.40271 47.3403C-2.22342 43.3527 0.238641 35.7279 6.31053 35.2381L32.7448 33.1056C35.3045 32.8992 37.5343 31.269 38.5205 28.8831L48.7046 4.24457Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Intro() {
  return (
    <section className="mb-10" aria-label="Introduction">
      <div className="intro-pattern text-home-page" aria-hidden="true">
        <CircleShape className="intro-pattern__left-top" />
        <CircleShape className="intro-pattern__left-right" />
        <FiveStarShape className="intro-pattern__left-bottom" />
        <CircleShape className="intro-pattern__left-end" />
        <CircleShape className="intro-pattern__right-top" />
        <FourStarShape className="intro-pattern__right-end" />
        <CircleShape className="intro-pattern__right-bottom" />
      </div>
      <p className="mt-3 text-body text-ink-muted text-pretty">
        I build thoughtful interfaces with code, typography, and quiet details.
      </p>
    </section>
  )
}

export default Intro
