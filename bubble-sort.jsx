let swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

let bubbleSort = inputArr => {
  let len = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        swap(inputArr, i, i+1);
        swapped = true;
      };
    };
  } while (swapped);
  return inputArr;
};

// TEST
// console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 
// 123, 43, 2, 55, 1, 234, 92]));

// HOW IT WORKS
// each pair of adjacent elements is compared and the elements are swapped
// if they are not in order. The pass through the array is repeated until
// no swaps are needed, which indicated the list is sorted

// COMPLEXITY
// worst case run time is quandratic, O(n^2)
// best case run time is O(n), or linear, if the array is already sorted

// PSEUDOCODE
// function bubbleSort(array, compare, swap) {
//   Slice array to make it a pure function
//   Create var for array length
//   Do
//     Create var to keep track of swapped
//     Loop through array up to the array length
//       If current value is greater than next value
//         create temp var as current value
//         Swap the current value and next value
//         Set swap variable to true
//   While swapped var is equal to true
//   return sliced array variable

// REFERENCE
// https://initjs.org/bubble-sort-in-javascript-19fa6fdfbb46
// https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2

