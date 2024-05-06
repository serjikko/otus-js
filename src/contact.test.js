
const validateInput = require('./contact');


test("Check email address validity", function() {  
    expect(validateInput('otus@otus.ru','email')).toBe(true);
    expect(validateInput('20.09.1988','date')).toBe(true);
    expect(validateInput('test@test.com','email')).toBe(true);
    expect(validateInput('email@domain','email')).toBe(false);
    expect(validateInput('email@domain.com','email')).toBe(true);
    expect(validateInput('12222222222222222222222','phone')).toBe(false);
    expect(validateInput('+1234567891','phone')).toBe(true);
});