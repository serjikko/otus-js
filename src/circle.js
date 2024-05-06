function calculateCircle(R) {
    const circumference = 2 * Math.PI * R;
    const area = Math.PI * Math.pow(R, 2);
    return { circumference, area };
}
module.exports = calculateCircle;


// console.log(calculateCircle(5));
// console.log(calculateCircle(6));