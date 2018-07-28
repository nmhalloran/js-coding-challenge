var api = {};
/* PLEASE READ EACH STEP CAREFULLY INCLUDING CAVEATS--->

  STEP 1: Implement fanOut.
  fanOut - return a new collection of results after applying the
           input function to each item in the input collection.

  ARGS:
    input - input collection
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
 PART 2: Implement funnel.
 funnel - return a result after applying an accumulation function to
          each item in the collection. Funneling down to a single result.
 ARGS:
    input - input collection
    fn    - function to apply to each item in the collection with
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
  let result = startValue;
  for(var i = 0; i < input.length; i++){
    var output = result += input[i];
  }
  return output;
}

module.exports = api;
