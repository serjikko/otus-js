const number = require('./oddsum');

test("oddsum", function() {    
    expect(number(3)).toEqual(4);
})