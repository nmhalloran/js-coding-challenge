config = {};

config.squareIt = (arg, arg1) => arg * arg;

config.splitIt = arg => arg.split("");

config.addIt = (total, n) => total + n;

config.combineIt = (words, word) => words + word;

config.isEven = num => num % 2 === 0;

config.isOdd = num => !config.isEven(num);

config.containsA = word => word.indexOf("A") > -1;

module.exports = config;
