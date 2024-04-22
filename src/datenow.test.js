
const dateNow = require('./datenow');

test("dateNow", function() {  
    expect(dateNow('2024-04-22T18:43:39.595Z')).toBe(1123); 
});