import { render, h } from 'preact'
import { useState, useMemo } from 'preact/hooks'
import { STRINGS } from './strings'
import { scale } from './scale'
import { toHTML } from './output'

/** @jsx h */

const BeerScaler = ({ recipe, initialSize = 5, unit = 'GALLON' }) => {
  const [newSize, setNewSize] = useState(initialSize)
  const __html = useMemo(() => toHTML(scale({ recipe, newSize })), [
    recipe,
    newSize,
  ])
  return (
    <div class="recipe-scaler">
      <div class="recipe-scaler-controls">
        <input
          type="number"
          value={newSize}
          min={1}
          onChange={(e) => setNewSize(parseInt(e.target.value))}
        />{' '}
        {STRINGS.units[unit](newSize).split(' ')[1]}
      </div>
      <div class="recipe-scaler-recipe">
        <div dangerouslySetInnerHTML={{ __html }} />
      </div>
    </div>
  )
}

export const renderBeerScaler = (element, props) => {
  const el =
    typeof element === 'string' ? document.querySelector(element) : element
  render(<BeerScaler {...props} />, el)
}
