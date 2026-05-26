import fourStar from './assets/4star.svg'
import fiveStar from './assets/5star.svg'
import circle from './assets/circle.svg'

const shapes = [fourStar, fiveStar, circle]
const columns = 32
const rows = 24
const centerLeft = columns / 2 - 1
const centerRight = columns / 2
const centerTop = rows / 2 - 1
const centerBottom = rows / 2

const centerShapes = new Map([
  [`${centerLeft}:${centerTop}`, circle],
  [`${centerRight}:${centerTop}`, fourStar],
  [`${centerLeft}:${centerBottom}`, fiveStar],
  [`${centerRight}:${centerBottom}`, circle],
])

function ringDistance(column, row) {
  const x = column < centerLeft ? centerLeft - column : Math.max(column - centerRight, 0)
  const y = row < centerTop ? centerTop - row : Math.max(row - centerBottom, 0)

  return Math.max(x, y)
}

const tiles = Array.from({ length: columns * rows }, (_, index) => {
  const column = index % columns
  const row = Math.floor(index / columns)
  const ring = ringDistance(column, row)
  const centerShape = centerShapes.get(`${column}:${row}`)
  const stagger = ring === 0 ? 0 : Math.floor(Math.random() * 10)

  return {
    delay: ring === 0 ? '0ms' : `${2000 + ring * 92 + stagger * 24}ms`,
    shape: centerShape ?? shapes[Math.floor(Math.random() * shapes.length)],
  }
})

function OpeningPattern() {
  return (
    <div className="opening-pattern" aria-hidden="true">
      <div className="opening-pattern__grid">
        {tiles.map((tile, index) => (
          <img
            alt=""
            className="opening-pattern__tile"
            key={index}
            src={tile.shape}
            style={{ '--tile-delay': tile.delay }}
          />
        ))}
      </div>
      <div className="opening-pattern__fill" />
    </div>
  )
}

export default OpeningPattern
