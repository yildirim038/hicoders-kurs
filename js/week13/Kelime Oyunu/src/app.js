/**
 * Oyun basladiginda Random olarak hecelerine ayrilmis bir kelime gelecek.
 * Heceler Drag & Drop yontemi ile anlamli olarak siralip bitirildiginde kullaniciya "DOGRU" veya ''YANLIS" mesaji bildirilecektir.
 * 10 Kelimelik bir oyun olusturcagiz.
 * 
 * Kelimeler  dizi icerisinde hecelerine Virgül ile ayirlimis olarak konulur.
 * Random olarak 10 kelime arasindan hangi kelimenin secilecegi belirlerinir.
 * Yine Random olarak kelimeinin heceleri ekranda karisik yazilir.
 * Heceler Drag & Drop yontemi ile anlamli bir sekilde kullanici tarafindan alt satirda siralanir.
 * Siralamanin düzgün olup olmadigi check butonuna basinca kontrol edilir
 * Rodom Butonuna basinca kelimeler bastan dizilir. 
 */

const words = ["PA,TA,TES,LER", "YOL,CU,LUK", "ÇAY,DAN,LIK,LAR", "TE,LE,VİZ,YON,CU,LAR", "A,RA,BA,CI,LAR", "YA,BAN,CI,LAR", "KA,RE,TE,Cİ,LER", "PEN,CE,RE,LER", "KA,NE,PE,Cİ,LER", "KÜ,TÜP,HA,NE"];
const dogruKelime = words[Math.floor(Math.random() * words.length)];
const kelimeHeceleri = parcalama(dogruKelime)
const orjinalKelime = kelimeHeceleri.join("")
const karisik = karistir(kelimeHeceleri);
const oyunButonlari = document.querySelector("#game-countainer")
const dragCounteiner = document.querySelector("#drag-countainer")
const dropCounteiner = document.querySelector("#drop-countainer")

for (let index = 0; index < kelimeHeceleri.length; index++) {
    createDrag(index)
    createDrop()
}

oyunButonlari.addEventListener("click", clickButton)