const isWord = require('./isWord');
test("str", function() {    
    expect(isWord('otus otus')).toEqual(false);
    expect(isWord('otus')).toEqual(true);
    expect(isWord('Hello')).toEqual(true);
});
 