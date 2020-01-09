// 257. Binary Tree Paths
// https://leetcode.com/problems/binary-tree-paths/

// Runtime: 64 ms, faster than 39.32% of JavaScript online submissions for Binary Tree Paths.
// Memory Usage: 34.8 MB, less than 50.00% of JavaScript online submissions for Binary Tree Paths.

var binaryTreePaths = function (root) {
  let paths = [];
  if (!root) return paths;

  const traverse = (root, str) => {
    if (str !== '') {
      str += '->' + root.val;
    } else {
      str += root.val;
    }
    if (root.left) traverse(root.left, str);
    if (root.right) traverse(root.right, str);
    if (root.left === null && root.right === null) {
      paths.push(str);
      return;
    }
  }

  traverse(root, '');
  return paths;
};