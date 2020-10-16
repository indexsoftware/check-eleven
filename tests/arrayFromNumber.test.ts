import { arrayFromNumber } from '../src/index';

describe('arrayFromNumber', () => {
  test('Pass number, expect array', () => {
    // Get function result
    const result = arrayFromNumber(123456);
    // Evaluate function result
    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
