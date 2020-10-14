/**
 * Round a number to two decimal places
 * @param {Number} num
 * @returns {Number} the rounded number
 */
export const roundDecimal = (num) => Math.round(num * 100) / 100

/**
 * Return an number amount with the pluralized unit attached
 * @param {String} unit
 * @param {Number} amount
 * @returns {String} the amount and pluralized unit
 */
export const pluralize = (unit, amount) =>
  `${amount} ${amount === 1 ? unit : `${unit}s`}`

/**
 * Capitalize the first letter of a string
 * @param {String} str
 * @returs {String} the capitalized string
 */
export const capitalize = (str) => {
  const parts = str.split('_')
  const capitalized = parts.map((substr) => {
    const chars = substr.split('')
    chars[0] = chars[0].toUpperCase()
    return chars.join('')
  })
  const newStr = capitalized.join(' ')
  newStr.trim()
  return newStr
}
