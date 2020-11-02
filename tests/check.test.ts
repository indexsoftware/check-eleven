import { check } from '../src/index';

/**
 * Valid BSN numbers
 * !WARNING!
 * These numbers are randomly generated and checked by hand to see if they are valid
 * These numbers are not actual BSN numbers to the best of our knowledge
 * These numbers are checked by hand to see if they match the expected outcome
 * The formula for checking these numbers is
 * (9 × A) + (8 × B) + (7 × C) + (6 × D) + (5 × E) + (4 × F) + (3 × G) + (2 × H) + (-1 × I)
 * The outcome for each of these was dividable by 11
 */
const validNumbers = [
  // (9 × 3) + (8 × 2) + (7 × 0) + (6 × 9) + (5 × 5) + (4 × 7) + (3 × 1) + (2 × 9) + (-1 × 6)
  // 165 / 11 = 15
  320957196,
  // (9 × 6) + (8 × 9) + (7 × 5) + (6 × 7) + (5 × 4) + (4 × 8) + (3 × 0) + (2 × 3) + (-1 × 8)
  // 253 / 11 = 23
  695748038,
  // (9 × 3) + (8 × 6) + (7 × 3) + (6 × 5) + (5 × 6) + (4 × 3) + (3 × 1) + (2 × 9) + (-1 × 2)
  // 187 / 11 = 17
  363563192,
  // (7 * 8) + (7 * 7) + (4 * 6) + (9 * 5) + (6 * 4) + (2 * 3) + (8 * 2) + (-1 * 0)
  // 220 / 11 = 20
  77496280,
];

/**
 * Invalid BSN numbers
 * These numbers are derived from the valid numbers as described above
 */
const invalidNumbers = [
  // (9 × 3) + (8 × 2) + (7 × 1) + (6 × 9) + (5 × 5) + (4 × 7) + (3 × 1) + (2 × 9) + (-1 × 6)
  // 172 / 11 = 15.6363636364
  321957196,
  // (9 × 6) + (8 × 9) + (7 × 5) + (6 × 9) + (5 × 4) + (4 × 8) + (3 × 6) + (2 × 3) + (-1 × 8)
  // 283 / 11 = 25.7272727
  695948638,
  // (9 × 1) + (8 × 6) + (7 × 3) + (6 × 2) + (5 × 6) + (4 × 3) + (3 × 1) + (2 × 9) + (-1 × 2)
  // 151 / 11 = 13.7272727
  163263192,
];

describe('mainCheck', () => {
  // Check for invalid numbers
  test.each(invalidNumbers)(
    'Given invalid %p as argument, returns false',
    (number) => {
      // Get function result
      const result = check(number);
      // Evaluate function result
      expect(result).toEqual(false);
    },
  );

  // Check for valid numbers
  test.each(validNumbers)(
    'Given valid %p as argument, returns true',
    (number) => {
      // Get function result
      const result = check(number);
      // Evaluate function result
      expect(result).toEqual(true);
    },
  );

  // Check for fail above 999999999
  test('Fail above 999999999', () => {
    // Get function result
    const result = check(1000000000);
    // Evaluate function result
    expect(result).toEqual(false);
  });

  // Check for fail above 9999999
  test('Fail below or equal to 9999999', () => {
    // Get function result
    const resultEqual = check(9999999);
    // Evaluate function result
    expect(resultEqual).toEqual(false);

    // Get function result
    const resultBelow = check(9999998);
    // Evaluate function result
    expect(resultBelow).toEqual(false);
  });
});
