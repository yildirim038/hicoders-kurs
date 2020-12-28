/**
 * Asagida verilen cok boyutlu array'de her bir array ilk slotunda ögrenci ismi ve sonrasinda sirasi ile Matematik, Almanca, Ingilizce ve Cografya derslerini icermektedir. 
 * Yazacaginiz kod, bu cok boyutlu array üzerinde asagidaki islemleri gerceklestirmesi gerekmektedir.
 */
const notes = [
    ["Hans", 80, 90, 10, 50],
    ["Ulrich", 94, 36, 76, 74],
    ["Olaf", 30, 60, 34, 78],
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];

/**
 * Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
 */
let dersOrtalamasi = [];

function dersOrtalmasi() {
    for (let satir = 1; satir < notes[0].length; satir++) {
        notToplami = 0
        for (let sutun = 0; sutun < notes.length; sutun++) {

            notToplami = notToplami + notes[sutun][satir];
        }
        Ortalama = notToplami / notes.length
        dersOrtalamasi.push(Ortalama)
    }
    return;
}
console.log(dersOrtalmasi(), "Matematik Ortlamasi:", dersOrtalamasi[0], "Almanca Ortalamasi:", dersOrtalamasi[1], "Ingilizce Ortalamasi:", dersOrtalamasi[2], "Cografya Ortalamasi:", dersOrtalamasi[3])

/**
 * Herhangi bir dersden 70 puan alanlarin listesi bulmasi
 */
const ISTENEN_PUAN = 70;
let istenenPuaniAlanlar = []

function istenenPuan() {
    for (let sutun = 0; sutun < notes.length; sutun++) {
        for (let satir = 1; satir < notes.length; satir++) {
            if (ISTENEN_PUAN < notes[sutun][satir]) {
                istenenPuaniAlanlar.push(notes[sutun][0])
                break;
            }
        }
    }
    return;
}
console.log("70 Puan Üstünde Not Alan Ögrenciler:", istenenPuan(), istenenPuaniAlanlar)

/**
 * Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
 */
const matametikOrtalamasi = dersOrtalamasi[0]
const almancaOrtalamasi = dersOrtalamasi[1]
const ingilizceOrtalamasi = dersOrtalamasi[2]
const cografyaOrtalamasi = dersOrtalamasi[3]
let matematikDersindenBasariliOgrenciler = []
let almancaDersindenBasariliOgrenciler = []
let ingilizceDersindenBasariliOgrenciler = []
let cografyaDersindenBasariliOgrenciler = []

for (let sutun = 0; sutun < notes.length; sutun++) {
    if (notes[sutun][1] > matametikOrtalamasi) {
        matematikDersindenBasariliOgrenciler.push(notes[sutun][0]);
    }
    if (notes[sutun][2] > almancaOrtalamasi) {
        almancaDersindenBasariliOgrenciler.push(notes[sutun][0]);
    }
    if (notes[sutun][3] > ingilizceOrtalamasi) {
        ingilizceDersindenBasariliOgrenciler.push(notes[sutun][0]);
    }
    if (notes[sutun][4] > cografyaOrtalamasi) {
        cografyaDersindenBasariliOgrenciler.push(notes[sutun][0]);
    }
}

console.log("Matemetik Dersinde Ortalamanin Ustunde Olan Ögrenciler:", matematikDersindenBasariliOgrenciler)
console.log("Almanca Dersinde Ortalamanin Ustunde Olan Ögrenciler:", almancaDersindenBasariliOgrenciler)
console.log("Ingilizce Dersinde Ortalamanin Ustunde Olan Ögrenciler:", ingilizceDersindenBasariliOgrenciler)
console.log("Cografya Dersinde Ortalamanin Ustunde Olan Ögrenciler:", cografyaDersindenBasariliOgrenciler)

/**
 * Sinifin  en iyi oldugu dersin gostermesi:
 * Sinifin en kötü oldugu dersi gostermesi:
 */
let enKotuDersOrtalamasi = 100;
let enIyiDersOrtalamasi = 0;
let enKotuDers = "";
let enIyiDers = "";
for (let sayac = 0; sayac < dersOrtalamasi.length; sayac++) {
    if (enIyiDersOrtalamasi < dersOrtalamasi[sayac]) {
        enIyiDersOrtalamasi = dersOrtalamasi[sayac];
    }
    if (enKotuDersOrtalamasi > dersOrtalamasi[sayac]) {
        enKotuDersOrtalamasi = dersOrtalamasi[sayac];
    }
}

if (enIyiDersOrtalamasi === matametikOrtalamasi) {
    enIyiDers = "Matemetik";
} else if (enIyiDersOrtalamasi === almancaOrtalamasi) {
    enIyiDers = "Almanaca";
} else if (enIyiDersOrtalamasi === ingilizceOrtalamasi) {
    enIyiDers = "Ingilizce";
} else {
    enIyiDers = "Cografya";
}

if (enKotuDersOrtalamasi === matametikOrtalamasi) {
    enKotuDers = "Matemetik";
} else if (enKotuDersOrtalamasi === almancaOrtalamasi) {
    enKotuDers = "Almanaca";
} else if (enKotuDersOrtalamasi === ingilizceOrtalamasi) {
    enKotuDers = "Ingilizce";
} else {
    enKotuDers = "Cografya";
}

console.log("En Iyi Ders:", enIyiDers);
console.log("En Kötü Ders:", enKotuDers);

/**
 * Tüm derslerin en iyi ögrencilerini bulmasi
 */
let matematiktenEnYüksekPuanAlan = "";
let matematikPuani = 0;
let almancadanEnYüksekPuanAlan = "";
let almancaPuani = 0;
let ingilizcedenEnYüksekPuanAlan = "";
let ingilizcePuani = 0;
let CografyadanEnYüksekPuanAlan = "";
let cografyaPuani = 0;

for (let sutun = 0; sutun < notes.length; sutun++) {

    if (notes[sutun][1] > matematikPuani) {
        matematikPuani = notes[sutun][1];
        matematiktenEnYüksekPuanAlan = notes[sutun][0];
    }
    if (notes[sutun][2] > almancaPuani) {
        almancaPuani = notes[sutun][2];
        almancadanEnYüksekPuanAlan = notes[sutun][0];
    }
    if (notes[sutun][3] > ingilizcePuani) {
        ingilizcePuani = notes[sutun][3];
        ingilizcedenEnYüksekPuanAlan = notes[sutun][0];
    }
    if (notes[sutun][4] > cografyaPuani) {
        cografyaPuani = notes[sutun][4];
        CografyadanEnYüksekPuanAlan = notes[sutun][0];
    }
}

console.log("Matematik Dersinden En Basarili Ögrenci:", matematiktenEnYüksekPuanAlan)
console.log("Almanca Dersinden En Basarili Ögrenci:", almancadanEnYüksekPuanAlan)
console.log("Ingilizce Dersinden En Basarili Ögrenci:", ingilizcedenEnYüksekPuanAlan)
console.log("Cografya Dersinden En Basarili Ögrenci:", CografyadanEnYüksekPuanAlan)