const functions = require('./funtions')

describe('check null and true values', () => {
    test('should be null', () => {
        expect(functions.isNull()).toBeNull();
    });
})

test('User schould be Mehmet Unal', () => {
    expect(functions.createUser()).toEqual({
        firstname: 'Mehmet',
        lastName: 'Unal'
    })
})
//numbers
test('should be smaller than 100', () => {
    const value = 90;
    expect(value).toBeLessTahn(100);
})

test('should be bigger than 200', () => {
    const value = 201;
    expect(value).toBeGreaterThan(200);
})
//string-regex
test('There is c in hiCoders ', () => {
    expect('hiCoders').toMatch(/c/); //olumsuz cünkü c büyük eger not.toMach de yok olarak cikiyor.
})

//Arrays

test('Js should be in languages', () => {
    languages = ['JS', 'C#', 'Python'];
    expect(languages).toContain('JS')
})

//promise
test('JSON API should  be return Graham ', () => {
    expect.assertion(1);
    return functions.fetchUser().then(data => {
        expect(data.name).zoEqual('Leanne Graham')
    })
})

//async
test('JSON API should  be return Graham ', async () => {
    expect.assertion(1);
    const data = await functions.fetchUser();
    expect(data.name).zoEqual('Leanne Graham')
})