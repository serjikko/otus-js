for (let i = 1; i <= 9; i++) {
    function multiplyTable(number) {
        const result = number * 7;
        console.log(number + ' X 7 = ' + result);
        return result;
    }
}

module.exports = multiplyTable;
