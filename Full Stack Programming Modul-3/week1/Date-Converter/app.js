/**
 *  Miladi tarihi hicri tarihe ceviren ve
 * Hicri tarihi miladi tarihe ceviren bir program yazildi.
 * Programda öncelikli olarak tarih cevirme islemi fonsiyonlari yazildi.
 * module.exports ile cevirme fonksiyonlari export edildi.
 * require ile iki fonsiyon app.js icerisine alindi
 * consol ile her iki tarihte sirasi ile gün,ay,yil aralarina vürgül koyarak yazildiginda dönüsümü saglandi.
 */
const writeHicri = require('./src/hicri-converter')
const writeMiladi = require('./src/miladi-converter')
/**
 * Miladi tarih gün,ay,yil sirasi ile arasina virgül konularak yazilir.
 */
console.log("Hicri Tarihe Gec:", writeHicri(07, 03, 2021))
/**
 * Hicri tarih gün,ay,yil sirasi ile arasina virgül konularak yazilir.
 */
console.log("Miladi Tarihe Gec:", writeMiladi(01, 10, 1407))