
const getDayOfWeek = require('./week');


test("week", function() {  
    expect(getDayOfWeek("2022","10","15")).toBe('Saturday');
    expect(getDayOfWeek("2024","04","01")).toBe('Monday');
});