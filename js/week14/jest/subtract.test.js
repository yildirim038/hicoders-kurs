const subtract = require('./subtract')

test('should subtract two nummers', () => {
    expect(subtract(4, 5)).toBe(-1);
});