let rot13 = str => {
  return str.split("")
            .map(char => {
              let ascii = char.charCodeAt();
              (ascii >= 65 && ascii <= 77) ? ascii += 13
              : (ascii >= 78 && ascii <= 90) ? ascii -= 13
              : ascii;
              return String.fromCharCode(ascii);})
            .join("");
};

// TEST
// console.log(rot13("SERR PBQR PNZC"));

// HOW IT WORKS
// values of letters are shifted by 13 places. Thus A <-> N, B <-> O, and so on
// the rot13 function takes a ROT13 encoded string as input and returns a
// decoded string

// solution for freeCodeCamp: JavaScript Algorithms and Data Structures 
// Projects
