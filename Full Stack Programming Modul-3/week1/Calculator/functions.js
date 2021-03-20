/**
 * Toplama Fonksiyonu
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function adding(a, b) {
    const c = a + b;
    return c;
};
/**
 * Cikarma Fonksiyonu
 * @param {*} d 
 * @param {*} e 
 * @returns 
 */
function extraction(d, e) {
    const f = d - e;
    return f;
}
/**
 * Carpma Fonksiyonu
 * @param {*} g 
 * @param {*} h 
 * @returns 
 */
function multiplication(g, h) {
    const i = g * h;
    return i;
}
/**
 * Bölme Fonksiyonu
 * @param {*} j 
 * @param {*} k 
 * @returns 
 */
function division(j, k) {
    const f = j / k;
    return f;
}
/**
 * Fonksiyolarin export edilmesi
 */
module.exports = {
    add: adding,
    extraction: extraction,
    multiplication: multiplication,
    division: division
}