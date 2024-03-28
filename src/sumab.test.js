const aaddb = require('./sumab');
test("aaddb", function() {    
    expect(aaddb(1,2)).toBe(3);
    expect(aaddb(5,2)).toBe(7);
}); 


