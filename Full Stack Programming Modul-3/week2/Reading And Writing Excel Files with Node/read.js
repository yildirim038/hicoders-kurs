/**
 * Read.js de amacimiz node.js tarafından sağlanan bir kütüphaneyi kullanarak bir EXCEL dosyasindaki datalari okumaktir 
 * 1) Bunun icin xlsx kütüphanesinden yararlandim
 * 2) npm ile kütüphane bilgisayara indirilip dosya require kullanilarak aktarildi.
 * 3) readFile ile excel dosyasi okundu ve Sayfalar birbirinden Sheets özelligi kullanilarak ayrildi
 * 4)Dosya sheet_to_json özelligi kullanilarak json a ccevrildi
 * 5)Consol.log ile ekrana yazdirildi.
 * 
 * Write kisminin yorumu kendi icinde yazilmistir.
 */
const xlsx = require('xlsx');
/**
 * Excel dosyasini okuma
 */
const workSheets = xlsx.readFile('OrnekDosya.xlsx')
/**
 * Her iki sayfayi ayirma
 */
const sheet1 = workSheets.Sheets['Sheet1'];
const sheet2 = workSheets.Sheets['Sheet2'];
/**
 * Json dosyasina Cevirme
 */
const jsonSheet1 = xlsx.utils.sheet_to_json(sheet1)
const jsonSheet2 = xlsx.utils.sheet_to_json(sheet2)

console.log("Sheet1:", jsonSheet1, "Sheet2:", jsonSheet2)