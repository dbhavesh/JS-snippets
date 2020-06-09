let convertToRoman = num => {
  
  const table = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
    5000: 'G'
  };

  let divisor = Math.pow(10, num.toString().length - 1);
  let romanNum = "";

  while(num) {
    let digit = Math.floor(num / divisor);
    
    digit <= 3 
    ? romanNum += table[divisor].repeat(digit)
    : digit === 4
    ? romanNum += table[divisor] + table[divisor*5]
    : digit <= 8
    ? romanNum += table[divisor * 5] + table[divisor].repeat(digit - 5)
    : romanNum += table[divisor] + table[divisor*10];

    num = Math.floor(num % divisor);
    divisor /= 10;
  }
  return romanNum;
}

// TEST
// console.log(convertToRoman(1984));

// HOW IT WORKS
// converts given number intro roman numeral

// solution for freeCodeCamp: JavaScript Algorithms and Data Structures 
// Projects
