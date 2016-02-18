import { __, find, where, curry, compose, path } from 'ramda'

export default curry((rules, setup) => {
  return find(compose(
    where(__, setup),
    path(['conditions'])
  ))(rules)
})
