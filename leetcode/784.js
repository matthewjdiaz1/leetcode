// 784. Letter Case Permutation
// https://leetcode.com/problems/letter-case-permutation/submissions/

var letterCasePermutation = function (S) {
  let output = [];
  let chars = S.split('');

  // recursively traverse chars
  const traverseChars = (i, str) => {
    if (i === chars.length) {
      // if no more chars, push str to output and return out of recursion
      output.push(str);
      return;
    } else if (!isNaN(chars[i])) {
      // else if chars[i] is a #, concat string and traverse next index
      traverseChars(i + 1, str += chars[i]);
    } else {
      // else, create uppercase and lowercase version and traverse next index
      traverseChars(i + 1, str + chars[i].toUpperCase());
      traverseChars(i + 1, str + chars[i].toLowerCase());
    }
  };

  traverseChars(0, '');
  return output;
};