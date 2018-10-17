const create = require('./create')

/**
 * Calculates the absolute value of the give vector
 *
 * @param {vec2} [out] - receiving vector
 * @param {vec2} vec - given value
 * @returns {vec2} absolute value of the vector
 */
const abs = (...params) => {
  let out
  let vec
  if (params.length === 1) {
    out = create()
    vec = params[0]
  } else {
    out = params[0]
    vec = params[1]
  }
  out[0] = Math.abs(vec[0])
  out[1] = Math.abs(vec[1])
  return out
}

module.exports = abs
