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
