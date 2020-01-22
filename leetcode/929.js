// 929. Unique Email Addresses
// https://leetcode.com/problems/unique-email-addresses/


const numUniqueEmails = function (emails) {
  let output = [];
  const isPlus = (el) => el === '+';

  // for each email
  emails.forEach(email => {
    // split by @        
    let names = email.split('@');

    let firstChars = names[0].split('');
    firstChars.forEach((char, i) => {
      // remove all . from first
      if (char === '.') { firstChars[i] = ''; }
    });
    // remove anything after and including +
    if (firstChars.includes('+')) {
      firstChars.splice(firstChars.findIndex(isPlus));
    }

    // reattatch first to domain
    let newEmail = firstChars.join('') + '@' + names[1];
    // compare to storage
    if (!output.includes(newEmail)) { output.push(newEmail); }
  });


  // return output.length;
  return output.length;
};