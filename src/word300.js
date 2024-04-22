function word300(number) {
    return Math.floor(number / 100) + Math.floor((number % 100) / 10) + number % 10;

}
module.exports = word300;