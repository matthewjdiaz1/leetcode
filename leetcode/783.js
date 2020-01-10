var minDiffInBST = function (root) {
  let output = Infinity;

  // traverse tree function and compare every value with passed in value
  const traverseTree = (node, val) => {
    // if val doesn't exists
    //// recurse left and/or right with & w/o current node val ( this will try all possibilities of tree, unnoptimal as tree is sorted)

    // else
    //// compare current node with passed in val
    //// if left or right exists, recurse with val

  }
  traverseTree(root);
  // return output
  return output;
};