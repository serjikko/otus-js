function doubleArrayElements(arr) {
    return arr.map(item => item * 2);
  }

const originalArray = [1, 2, 3, 4, 5];
const newArray = doubleArrayElements(originalArray);
console.log(newArray); // Output: [2, 4, 6, 8, 10] 