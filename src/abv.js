import { roundDecimal } from './util'

/**
 * Calculate ABV from the original gravity and final gravity of a recipe.
 * @param {Number} og original gravity
 * @param {Number} fg final gravity
 * @returns {Number} the ABV percentage
 */
export const abv = (og, fg) => roundDecimal((og - fg) * 131.25)
