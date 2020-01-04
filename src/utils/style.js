import { filterFalsy } from './arr'

const makeStyle = (styleArr = []) => {
  return filterFalsy(styleArr)
}

export {
  makeStyle
}
