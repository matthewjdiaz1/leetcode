// 904. Fruit Into Baskets
// https://leetcode.com/problems/fruit-into-baskets/



const totalFruit = function (tree) {
  // input => arr
  let output = 0;
  // edge cases
  if (tree.length === 0) return 0;
  if (tree.length === 1) return 1;
  if (tree.length === 2) return 2;

  for (let position = 0; position < tree.length; position++) {
    let i = position;
    let totalFruit = 0;
    let b1 = null;
    let b2 = null;

    // while trees are left
    while (i <= tree.length) {

      // base catch, if no trees are left
      if (i === tree.length) {
        // compare output and break
        if (totalFruit > output) { output = totalFruit; }
        break;
      }

      // check if tree[i] is in either basket, increment totalFruit, and incement i
      if (tree[i] === b1) {
        totalFruit++;
        i++;
      } else if (tree[i] === b2) {
        totalFruit++;
        i++;

        // else if either basket is empty, fill basket and increment total and i
      } else if (b1 === null) {
        b1 = tree[i];
        totalFruit++;
        i++;
      } else if (b2 === null) {
        b2 = tree[i];
        totalFruit++;
        i++;

        // else we can't take a fruit, compare fruit to output and break
      } else {
        if (totalFruit > output) { output = totalFruit; }
        break;
      }
    }
  }
  return output;
};
