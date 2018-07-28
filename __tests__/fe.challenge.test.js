const api = require('../main');
const config = require('../config');
const testData = require('../test-data');

// fanOut test start
describe('The fanOut method', () => {
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
  describe('Splits strings into ', () => {
    test('Char Arrays', () => {
      const result = api.fanOut(testData.poem, config.splitIt);

      expect(result).toEqual(testData.splitArr);
    });
  });
});
// fanOut test end

// funnel test cases start
describe('The funnel method', () => {
  describe('Sums ', () => {
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

describe('The funnel method', () => {
  describe('Combines words ', () => {
    test('Of poems', () => {
      var result = api.funnel(testData.poem, config.combineIt, '');

      expect(result).toEqual('AdobeMakeItAnExperience')
    });
  });
});
// funnel test cases end


// distill test cases start

describe('The distill method', () => {
  describe('Filters ', () => {
    test('Even simple numbers', () => {
      var result = api.distill(testData.simpleNumbers, config.isEven);

      expect(result).toEqual([2]);
    });

    test('Odd one number', () => {
      var result = api.distill(testData.oneNumber, config.isOdd);

      expect(result).toEqual([]);
    });

    test('More odd numbers', () => {
      var result = api.distill(testData.moreNumbers, config.isOdd);
      expect(result).toEqual([31, -11, 27]);
    });

  });
});

describe('The distill method', () => {
  describe('Finds words ', () => {
    test("With letter A's", () => {
      var result = api.distill(testData.poem, config.containsA);
      expect(result).toEqual(['Adobe', 'An']);
    })
  })
})


// distill test cases end

// numOfChars test cases start

describe('The numOfChars method', () => {
  describe('Counts the characters ', () => {
    test('In a given poem ', () => {
      var result = api.numOfChars(testData.poem);
      expect(result).toEqual(23);
    });
  });
});

describe('The numOfCertainChars method', () => {
  describe("Counts the number of A's", () => {
    test('In a given poem', () => {
      var result = api.numOfCertainChars(testData.poem, 'A');
      expect(result).toEqual(2)
    });
  });
});


// numOfChars test cases end
