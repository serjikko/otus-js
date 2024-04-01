function validateInput(input, type) {
    let regex;
    switch (type) {
        case 'email':
            regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            break;
        case 'date':
            regex = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
            break;
        case 'phone':
            regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
            break;
        default:
            return false;
    }
    return regex.test(input);
};

module.exports = validateInput;