/**
 * Verilen iki sayiya dört islem uygulanacktir.
 * FOnksiyonlar funtions.js icerisinde yer alacak ve module.exports ile index.js gönderilecektir.
 * index.js de require ile gönderilen fonksiyonlar alinacak.
 * Consol da 4 islem sonucu Template Literals araciligiyla yazdirilacaktir.
 */
const firstValue = 8;
const secondValue = 2
/**
 * Fonsiyonlarin alinmasi 
 */
const {
    add,
    extraction,
    multiplication,
    division
} = require('./functions');
/**
 * Consolda yazdirma islemi
 */
console.log(
    ` Verilen Iki Sayinin; 
    Toplami:${add(firstValue,secondValue)}
    Cikarmasi: ${extraction(firstValue,secondValue)} 
    Carpmasi: ${multiplication(firstValue,secondValue)} 
    Bölmesi: ${division(firstValue,secondValue)}`
);