
  // let number = prompt('Введите число:');
  // let result = 0;
  // let count = 0;

  // function calculateOddSum(number) {
  //   let result = 0;
  //   let count = 0;
  
  //   for (let i = 1; i <= number; i++) {
  //       if (i % 2 !== 0) {
  //           count++;
  //           result += i;
  //           console.log(count, result);
  //       }
  //   }
  // }

  function calculateOddSum(number) {
    let result = 0;
    let count = 0;

    for (let i = 1; i <= number; i += 2) {
        count++;
        result += i;
        console.log(count, result);
    }
}



  module.exports = calculateOddSum;