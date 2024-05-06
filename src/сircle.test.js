

const calculateCircle = require('./circle');
test("calculateCircle", function() {  
    let result = calculateCircle(5);
    expect(result.circumference).toBe(31.41592653589793);
    expect(result.area).toBe(78.53981633974483);
    result = calculateCircle(6); 
    expect(result.circumference).toBe(37.69911184307752); 
    expect(result.area).toBe(113.09733552923255); 
});