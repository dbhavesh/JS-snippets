function rot13(str) {
  return str.split("")
            .map(char => {
              let ascii = char.charCodeAt();
              (ascii >= 65 && ascii <= 77) ? ascii += 13
              : (ascii >= 78 && ascii <= 90) ? ascii -= 13
              : ascii;
              return String.fromCharCode(ascii);})
            .join("");
}

// test
// console.log(rot13("SERR PBQR PNZC"));
