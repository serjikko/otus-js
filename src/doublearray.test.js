const doubleArrayElements = require('./doublearray');
test("DoubleArray", function() {    
    expect(doubleArrayElements([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
});
 

