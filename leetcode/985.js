// 985. Sum of Even Numbers After Queries
// https://leetcode.com/problems/sum-of-even-numbers-after-queries/

const sumEvenAfterQueries = function (A, queries) {
  let output = [];

  // for each querie
  queries.forEach(querie => {
    A[querie[1]] += querie[0];
    let sum = 0;
    // for each num, if even, add to sum
    A.forEach(num => {
      if (num % 2 === 0) { sum += num; }
    });
    // push sum to output
    output.push(sum);
  });

  return output;
};
