const datenow = require('./datenow');

test("date", function() {
  expect(datenow('2024-04-22T18:43:39.595Z')).toBe(1303); 
});