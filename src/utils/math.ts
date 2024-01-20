/** Inclusive range. Default range from 0 to 1 */
export function randomFromRange(min = 0, max = 1) {
  return Math.random() * (max - min) + min
}

/** Inclusive range. Default range from 0 to 1 */
export function randomIntFromRange(min = 0, max = 1) {
  return Math.round(randomFromRange(min, max))
}

/** Ensures value is between min and max. Inclusive range */
export function clampValue(min: number, max: number, value: number) {
  return Math.max(min, Math.min(value, max))
}

/**
 * Randome from from 0 to 1, from normal distribution
 *
 * https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
 */
export function randomFromNormalDist() {
  let u = 0,
    v = 0
  while (u === 0) u = Math.random() //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random()
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
  num = num / 10.0 + 0.5 // Translate to 0 -> 1
  if (num > 1 || num < 0) return randomFromNormalDist() // resample between 0 and 1
  return num
}
