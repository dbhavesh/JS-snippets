function palindrome(str) {

  let newStr = str.toLowerCase()
                  .replace(/[^A-Za-z0-9]/g, '');
                  
  let revStr = newStr.split('')
                     .reverse()
                     .every(letter => letter === newStr[newStr.length - newStr.indexOf(letter) - 1])
                    
  return revStr;
}

// test
// palindrome("ley eL%");
