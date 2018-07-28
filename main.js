var api = {};
/* PLEASE READ EACH STEP CAREFULLY INCLUDING CAVEATS--->

  STEP 1: Implement fanOut.
  fanOut - return a new collection of results after applying the
           input function to each item in the input collection.

  ARGS:
    input - input collection
    fn - function to apply to each item in the collection

  EX:  - fanOut([1, 2, 3], double) -->  [1, 4, 9];

  function double(n) { return n * n; }

  CAVEATS:
    - Do not use make any function calls (other than fn and push)
    - You may not use any external libraries
*/

api.fanOut = function(input, fn){
  var output = [];
  for (var i = 0; i < input.length; i++) {
    output.push(fn(input[i]));
  }
  return output;
}

module.exports = api;
