const sumNumbers = require('./sumNumbers');

test("sum even numbers from 50 to 100", function() {    
    expect(sumNumbers(50, 100, true)).toBe(1850);
});