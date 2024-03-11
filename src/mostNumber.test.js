const mostNumber = require('./mostNumber');
test("most number", function() {    
    expect(mostNumber(15, 3)).toBe(15);
    expect(mostNumber(1, 65)).toBe(65);
}); 