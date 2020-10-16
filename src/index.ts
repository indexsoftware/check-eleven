/**
 * Create an array from a number
 *
 * @param numberToParse Input number
 * @returns {Array<number>}
 */
export function arrayFromNumber(numberToParse: number): Array<number> {
  // Create a string for the numberToParse argument
  const numberString = numberToParse.toString();

  // Return array with numbers
  return Array
    .from(numberString)
    .map(Number);
}

/**
 * Dutch person number check
 * Check built to match specs found on http://nl.wikipedia.org/wiki/Burgerservicenummer
 *
 * @param {number} personNumber
 * @returns {boolean} Is the number valid
 */
export function check(personNumber: number): boolean {
  // Check if the number is between 9999999 and 999999999
  if (personNumber <= 9999999 || personNumber > 999999999) {
    return false;
  }

  // Sum is not 0 and sum is dividable by 0 without restant
  // return sum !== 0 && (sum % 11 === 0);
  return arrayFromNumber(personNumber)
    .reduce((p, c, i) => p + (c * (i !== 8 ? 9 - i : -1)), 0) % 11 === 0;
}
