var api = {};
/* PLEASE READ EACH STEP CAREFULLY INCLUDING CAVEATS--->

  STEP 1:  Implement fanOut.

  fanOut - return a new collection of results after applying the
           input function to each item in the input collection.

  ARGS:   input - input collection
          fn    - function to apply to each item in the collection

  EX:   - fanOut([1, 2, 3], double) -->  [1, 4, 9];
        - function double(n) { return n * n; }

  CAVEATS:
    - Do not use make any function calls (other than fn and push)
    - You may not use any external libraries
*/

api.fanOut = (input, fn) => {
  const output = [];
  for (var i = 0; i < input.length; i++) {
    output.push(fn(input[i]));
  }
  return output;
}

/*
 STEP 2:  Implement funnel.

 funnel - return a result after applying an accumulation function to
          each item in the collection. Funneling down to a single result.

 ARGS:    input - input collection
          fn - function to apply to each item in the collection with
               args accumulation value and current value
               startValue - start the accumulation with this value

 EX:  - funnel([1, 2, 3], add, 0) -->  6;
      - funnel([1, 2], add, 1) --> 4
      - function add(total, n) { return total + n; }

 CAVEATS:
   - Do not use make any function calls (other than fn and push)
   - You may not use any external libraries
 */

api.funnel = (input, fn, startValue) => {
  for(var i = 0; i < input.length; i++) {
    var output = startValue += input[i];
  }
  return output;
}

/*
 STEP 3:  Implement distill. Glad you made it here... Are you feeling the same?

 distill: return a new collection of results after applying the
          predicate function to each item. Only include the item in the result
          if the predicate returns true.

 ARGS:    input - input collection
          fn - predicate function to apply to each item in the collection

 EX:  - distill([1, 2, 3], isEven) -->  [2];
      - distill([1, 2, 3], isOdd) -->  [1, 3];
      - distill([1, 2, 3], isNegative) -->  [];

 CAVEATS:
 - Do not use make any function calls (other than fn and push)
 - You may not use any external libraries
 */

api.distill = (input, fn) => {
  var output = [];
  for(var i = 0; i < input.length; i++) {
    var currNum = fn(input[i]);
    currNum ? output.push(input[i]) : false;
  }
  return output;
}

/*
STEP 4: Implement numOfChars.

numOfChars - return the number of characters in the input array of strings

ARGS: input - input collection of strings (words)

EX: - numOfChars(['the']) -->  3;
    - numOfChars(['the', 'end']) -->  6;

CAVEATS:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries
 */

api.numOfChars = (input) => {

  var counter = 0;
  var output = [];
  for (var i = 0; i < input.length; i++) {
    var keeper = input[i].length;
    counter += keeper
  }
  return counter;
}


/*
 STEP 5: Implement numOfCertainChars.

 numOfCertainChars - return the number of c characters in the input array of strings

 ARGS: input - input collection of strings (words)
       c - the certain character to count

 EX:  - numOfCertainChars(['the'], 'e') -->  1;
      - numOfCertainChars(['the', 'end'], 'e') -->  2;

 CAVEATS:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries
 */

api.numOfCertainChars = (input, c) => {
  var occurr = 0;
  var target = c;
  for(var i = 0; i < input.length; i ++){
    var wordString = input[i];
    for(var x = 0; x < wordString.length; x ++){
      var currChar = wordString[x];
      if(currChar === c)
      occurr += 1;
    }
  }
  return occurr;
}

module.exports = api;
