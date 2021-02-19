const functions = require('./funtions')

describe('check null and true values', () => {
    test('should be null', () => {
        expect(functions.isNull()).toBeNull();
    });
})