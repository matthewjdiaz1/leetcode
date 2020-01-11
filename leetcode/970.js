// 970. Powerful Integers
// https://leetcode.com/problems/powerful-integers/

var powerfulIntegers = function (x, y, bound) {
  let output = [];
  // find largest x^n and y^n < bound, 
  // suboptimal approach, must find optimal x and y max (5%)
  let largestPow = Math.sqrt(bound);

  // for loop for x and y while n <= largestPow
  for (let i = 0; i <= largestPow; i++) {
    for (let j = 0; j <= largestPow; j++) {
      let powerInt = Math.pow(x, i) + Math.pow(y, j);
      // if (x^i + y^j) < bound push into output (no duplicates)
      if (powerInt <= bound && !output.includes(powerInt)) {
        // push
        output.push(powerInt);
      }
    }
  }
  return output;
};