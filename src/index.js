import produce from 'immer'

/**
 * Round a number to two decimal places
 * @param {Number} num 
 * @returns {Number} the rounded number
 */
const roundDecimal = (num) => Math.round(num * 100) / 100

/**
 * Scale a beer recipe to the desired size
 * @param {Object} options
 * @property {String|Object} options.recipe the recipe to scale
 * @property {Number|Object} options.newSize the target size of the recipe after scaling.
 * @returns {Object} the scaled recipe object
 */
export const scale = ({ recipe, newSize }) => {
  // Convert recipe to an object
  let recipeObj
  if (typeof recipe === 'string') {
    recipeObj = JSON.parse(recipe)
  } else if (typeof recipe === 'object') {
    recipeObj = recipe
  } else {
    throw new TypeError(
      '"recipe" option must be either a JSON string or JS object.'
    )
  }

  // Determine the scale factor
  let scaleFactor
  let newSizeNum
  if (typeof newSize === 'number') {
    newSizeNum = newSize
  } else if (typeof newSize === 'object') {
    if (typeof newSize.value !== 'number') {
      throw new TypeError(
        '"newSize" option must contain a "value" property that is a number.'
      )
    }
    if (newSize.unit && newSize.unit !== recipeObj.size.unit) {
      throw new Error('Unit conversion not yet supported. Sorry!')
    }
    newSizeNum = newSize.unit
  }
  scaleFactor = newSizeNum / recipeObj.size.value

  // Scale the recipe
  const iterableKeys = ['fermentables', 'hops', 'misc', 'yeast']
  const iterableProps = ['amount']
  const scaledRecipe = produce(recipeObj, (draftState) => {
    draftState.size.value = newSizeNum
    iterableKeys.forEach((key) => {
      draftState[key].forEach((ingredient) => {
        iterableProps.forEach((prop) => {
          const newValue = roundDecimal(ingredient[prop].value * scaleFactor)
          ingredient[prop].value = newValue
        })
        return ingredient
      })
    })
  })

  // Save some metadata
  scaledRecipe.__meta__ = {
    scaleFactor,
    scaledAtDate: Date.now(),
  }

  // Return the scaled recipe
  return scaledRecipe
}
