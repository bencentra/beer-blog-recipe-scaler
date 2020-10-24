import { STRINGS } from '../strings'
import { abv } from '../abv'
import { capitalize } from '../util'

export const toMarkdown = (recipe) => {
  let lines = []
  // Header
  lines.push(`# ${recipe.name}`)
  // Spec table
  lines.push('## Specs')
  lines.push('| A | B |')
  lines.push('|:--- | ---:|')
  lines.push(
    `| __Styles__ | ${recipe.style.name} (${recipe.style.bjcp_2015}) |`
  )
  lines.push(`| __Recipe Type__ | ${STRINGS.types[recipe.type]} |`)
  lines.push(
    `| __Batch Size__ | ${STRINGS.units[recipe.size.unit](recipe.size.value)} |`
  )
  lines.push(`| __Original Gravity__ | ${recipe.gravity.original.toFixed(3)} |`)
  lines.push(`| __Final Gravity__ | ${recipe.gravity.final.toFixed(3)} |`)
  lines.push(
    `| __ABV__ | ${STRINGS.units.PERCENT(
      abv(recipe.gravity.original, recipe.gravity.final)
    )} |`
  )
  lines.push(`| __IBU__ | ${recipe.ibu} |`)
  lines.push(
    `| __Color__ | ${STRINGS.units[recipe.color.unit](recipe.color.value)} |`
  )
  // Ingredients tables
  lines.push('## Ingredients')
  let ingredients = ['fermentables', 'hops', 'misc', 'yeast']
  ingredients.forEach((key) => {
    let table = []
    const cols = Object.keys(recipe[key][0])
    table.push(`### ${capitalize(key)}`)
    const headers = cols.reduce((str, col) => {
      return `${str} ${capitalize(col)} |`
    }, '|')
    table.push(headers)
    table.push('| --- | --- |')
    const rows = recipe[key]
    const rowsArr = rows.map((row) => {
      return cols.reduce((str, col) => {
        let value = row[col]
        if (typeof value === 'object') {
          const type = value.type ? ` (${STRINGS.types[value.type]})` : ''
          value = `${STRINGS.units[row[col].unit](row[col].value)}${type}`
        }
        return `${str} ${value} |`
      }, '|')
    })
    table = table.concat(rowsArr)
    lines = lines.concat(table)
  })
  // Return the markdown string
  return lines.join('  \n')
}
