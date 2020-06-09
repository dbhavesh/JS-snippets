let telephoneCheck = str => {
    const regex = /^1?\s?((\([1-9]\d{2}\))|((?<!\()[1-9]\d{2}(?!\))))-?\s?\d{3}-?\s?\d{4}$/;
    return regex.test(str);
}

// TEST
// console.log(telephoneCheck("555-555-5555"));

// HOW IT WORKS
// telephoneCheck returns true if the passed string has the format of a valid
// US number, such as:
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// solution for freeCodeCamp: JavaScript Algorithms and Data Structures 
// Projects
  