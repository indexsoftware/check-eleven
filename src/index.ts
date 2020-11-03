/**
 * Create an array from a number
 *
 * @param numberToParse Input number
 * @returns {Array<number>}
 */
export function arrayFromNumber (numberToParse: number): Array<number> {
  // Check if we have a number
  if (!numberToParse) {
    // Return empty array
    return [];
  }

  // Create a string for the numberToParse argument
  const numberString = numberToParse.toString();

  // Return array with numbers
  return Array
    .from(numberString)
    .map(Number);
}

/**
 * Eleven check
 * Check built to match specs found on https://nl.wikipedia.org/wiki/Elfproef
 *
 * @param {number} checkNumber
 * @returns {boolean} Is the number valid
 */
export function check (checkNumber: number): boolean {
  const numberArray = arrayFromNumber(checkNumber);

  const { length } = numberArray;

  const sum = numberArray
    .reduce((p, c, i) => p + (c * (i !== length - 1 ? length - i : -1)), 0);

  return sum % 11 === 0 && sum > 0;
}
