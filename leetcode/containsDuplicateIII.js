// Given an array of integers, find out whether there are two distinct
// indices i and j in the array such that the absolute difference between 
// nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  // i - array
  // o - bool
  // e -
  // c - 

  // for every combanation of index pairs
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      // check if pair difference is at most t --- |nums[i] - nums[j]| <= t
      // check if indexes difference is at most k --- |i - j| <= k
      if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }

  return false;
};

// Input: nums = [1,2,3,1], k = 3, t = 0
// Output: true
// console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0)) // true

// Input: nums = [1,0,1,1], k = 1, t = 2
// Output: true
// console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2)); // true

// Input: nums = [1,5,9,1,5,9], k = 2, t = 3
// Output: false
// console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3)); // false

console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3))