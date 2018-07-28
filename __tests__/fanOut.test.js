const api = require('../main');
const testData = require('../test-data');

const square = (arg) => arg * arg;

const splitIt = (arg) => arg.split('');

describe('The fanOut method ', () => {
  test('square number test', () => {
    const result = api.fanOut(testData.simpleNumbers, square);

    expect(result).toEqual([1,4,9]);
  });
  test('one number test', () => {
    const result = api.fanOut(testData.oneNumber, square);

    expect(result).toEqual([4]);
  });
  test('more numbers test', () => {
    const result = api.fanOut(testData.moreNumbers, square);

    expect(result).toEqual([961, 121, 729]);
  });
});

describe('The fanOut method', () => {
  describe('splits strings ', () => {
    test('into character arrays', () => {
      const result = api.fanOut(testData.poem, splitIt);

      expect(result).toEqual([
        ['A', 'd', 'o', 'b', 'e'],
        ['M', 'a', 'k', 'e'],
        ['I', 't'],
        ['A', 'n'],
        ['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']
      ]);
    });
  });
});
