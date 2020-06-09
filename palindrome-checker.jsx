let palindrome = str => {
  let newStr = str.toLowerCase()
                  .replace(/[^A-Za-z0-9]/g, '');                 
  let result = newStr.split('')
                     .reverse()
                     .every(letter => letter === newStr[newStr.length - newStr.indexOf(letter) - 1]);                
  return result;
};

// TEST
// console.log(palindrome("ley eL%"));

// HOW IT WORKS
// the palindrome function removes all non-alphanumeric characters and turns
// everything into the same case in order to check if the word or sentence is
// spelled the same way both forward and backward, ignoring punctuation, case
// and spacing

// solution for freeCodeCamp: JavaScript Algorithms and Data Structures 
// Projects
