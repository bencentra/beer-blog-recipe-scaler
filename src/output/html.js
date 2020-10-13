import showdown from 'showdown'
import { toMarkdown } from './markdown'

export const toHTML = (recipe) => {
  const converter = new showdown.Converter()
  converter.setFlavor('github')
  converter.setOption('tables', true)
  const markdown = toMarkdown(recipe)
  return converter.makeHtml(markdown)
}
