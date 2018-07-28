const api = require('../main');
const config = require('../config');
const testData = require('../test-data');

// fanOut test start
describe('The fanOut method ', () => {
  test('Implements squareIt() to each number in a given index', () => {
    const result = api.fanOut(testData.simpleNumbers, config.squareIt);

    expect(result).toEqual([1, 4, 9]);
  });
  test('Implements squareIt() to one number in a given index', () => {
    const result = api.fanOut(testData.oneNumber, config.squareIt);

    expect(result).toEqual([4]);
  });
  test('Implements squareIt() to several large numbers in a given index', () => {
    const result = api.fanOut(testData.moreNumbers, config.squareIt);

    expect(result).toEqual([961, 121, 729]);
  });
});

describe('The fanOut method', () => {
  describe('Splits strings into: ', () => {
    test('Char Arrays', () => {
      const result = api.fanOut(testData.poem, config.splitIt);

      expect(result).toEqual(testData.splitArr);
    });
  });
});
// fanOut test end

// funnel test cases start
describe('The funnel method ', () => {
  describe('Sums: ', () => {
    test('Simple numbers', () => {
      var result = api.funnel(testData.simpleNumbers, config.addIt, 0);

      expect(result).toEqual(6)
    });

    test('One number', () => {
      var result = api.funnel(testData.oneNumber, config.addIt, 0);

      expect(result).toEqual(-2)
    });

    test('More numbers', () => {
      var result = api.funnel(testData.moreNumbers, config.addIt, -47);

      expect(result).toEqual(0)
    });
  });
});

describe('The funnel method ', () => {
  describe('combines words ', () => {
    test('of poems', () => {
      var result = api.funnel(testData.poem, config.combineIt, '');

      expect(result).toEqual('AdobeMakeItAnExperience')
    });
  });
});
// funnel test cases end
