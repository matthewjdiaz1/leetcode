// 904. Fruit Into Baskets
// https://leetcode.com/problems/fruit-into-baskets/



const totalFruit = function (tree) {
  // input => arr
  let output = 0;

  const traverseTrees = (i, basket1, basket2) => {
    // if i is 0, recurse with all i, (empty baskets)

    // 1) attempt to take a fruit and store in an empty basket
    //// if either basket has a non empty i index, 
    ////// increment and recurse next i
    //// else
    ////// if both baskets are not empty, compare basket size to output and return
    ////// if one or both basket are empty, fill it with i = 1, and recurse
  };

  traverseTrees(0, [], []);
  return output;
};
