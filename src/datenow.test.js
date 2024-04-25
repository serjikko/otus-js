
const dateNow = require('./datenow');

// test("dateNow", function() {  
//     expect(dateNow('2024-04-22T18:43:39.595Z')).toBe(1123); 
// });



  test('mocks a constructor like new Date()', () => {
    console.log('Normal:   ', new Date().getTime())
  
    const mockDate = new Date('2024-04-22T18:43:39.595Z') // 2024-04-22T18:43:39.595Z
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate)
  
    console.log('Mocked:   ', new Date().getTime())
    spy.mockRestore()
  
    console.log('Restored: ', new Date().getTime())
})