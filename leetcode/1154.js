// 1154. Day of the Year
// https://leetcode.com/problems/day-of-the-year/submissions/
// Runtime: 60 ms, faster than 48.48% of JavaScript online submissions for Day of the Year.
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Day of the Year.

const dayOfYear = function (date) {
  let arr = date.split('-');
  let thisMonth = Number(arr[1]);
  let thisYear = Number(arr[0]);
  let leapYear = !!(arr[0] % 4 === 0);
  if (thisYear === 1900) leapYear = false;
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = Number(arr[2]);
  if (leapYear && thisMonth > 2) days++;

  months.forEach((month, i) => {
    // if thisMonth is greater than i + 1, add month to days
    if (thisMonth > i + 1) {
      days += month;
    }
  });
  return days;
};

