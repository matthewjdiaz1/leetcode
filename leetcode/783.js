// 783. Minimum Distance Between BST Nodes
// https://leetcode.com/problems/minimum-distance-between-bst-nodes/


var minDiffInBST = function (root) {
  let output = Infinity;

  // traverse tree function and compare every value with passed in value
  const traverseTree = (node, val) => {
    // if val doesn't exists
    if (!val) {
      // recurse left and/or right with & w/o current node val
      if (node.left) {
        traverseTree(node.left);
        traverseTree(node.left, node.val);
      }
      if (node.right) {
        traverseTree(node.right);
        traverseTree(node.right, node.val);
      }
    } else {
      // compare current node with passed in val
      if (Math.abs(node.val - val) < output) { output = Math.abs(node.val - val); }
      // if left or right exists, recurse with val
      if (node.left) { traverseTree(node.left, val); }
      if (node.right) { traverseTree(node.right, val); }
    }
  }
  traverseTree(root);
  // return output
  return output;
};
