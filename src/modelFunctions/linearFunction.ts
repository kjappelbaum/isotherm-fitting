//BET function
/**
 *
 * @param {Array}  [m,p] : array with the slope and intercept
 * @returns {function} linear function
 */
export default function BETFunction([m, p]: number[]) {
  return (x: number) => m * x + p;
}