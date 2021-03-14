/**
 * Bu haftaki ödeviniz node.js tarafından sağlanan bir kütüphaneyi kullanarak bir dosya okumak olacaktir.Bunun icin;
 * 1)Dosyayi okuyacak olan kütüphane app.js baglanir.
 * 2)Yazilan txt dosyasi baglanan dosya okutulur.
 * 3)Dosya Consola yazdirilir.
 */
// Küthanenin Baglanmasi
const fs = require('fs');
/**
 * Dosyanin okunmasi
 */
const readMe = fs.readFileSync('./OrnekDosya.txt', 'utf8')
console.log(readMe)