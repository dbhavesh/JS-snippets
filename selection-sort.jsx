let swap = (arr, a, b) => {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

let selectionSort = inputArr => {
  let len = inputArr.length;
  for(let i = 0; i < len - 1; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (inputArr[min] > inputArr[j]) { min = j };
    }
    if (min !== i) { swap(inputArr, i, min) };
  }
  return inputArr;
}

// TEST
// console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

// HOW IT WORKS
// loop through the input array linearly, selecting the first smallest element,
// and then swap it to the first position. Then loop through the array again
// using a linear scan and get the second smallest element, swap it to the
// second position, and so on.

// COMPLEXITY
// worst case complexity: O(n^2) 
// best case complexity: O(n^2)

// PSEUDOCODE
// selectionSort(array, size)
//   repeat (size - 1) times
//   set the first unsorted element as the minimum
//   for each of the unsorted elements
//     if element < currentMinimum
//       set element as new minimum
//   swap minimum with first unsorted position
// end selectionSort

// REFERENCES
// https://reactgo.com/selection-sort-algorithm-javascript/
// https://medium.com/javascript-algorithms/javascript-algorithms-selection-sort-54da919d0513

