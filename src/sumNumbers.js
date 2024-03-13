function sumNumbers() {
    let sum = 0;
    for (let i = 50; i < 100; i += 2) {
        sum += i;
    }
    return sum;
}
module.exports = sumNumbers;