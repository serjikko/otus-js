const sumword = require('./sumword');
test("sumword", function() {    
    expect(sumword('one','too')).toBe(6);
}); 
