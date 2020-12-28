let sayilarDizisi = [24, 56, 98, 44, 17, 71, 49, 37, 64, 86];
let dizidekiSayilarinToplami = 0;
let diziUzunlugu = sayilarDizisi.length;
let minSayi = sayilarDizisi[0];
let maxSayi = sayilarDizisi[0];

for (let sayac = 0; sayac < diziUzunlugu; sayac++) {
    let karekok = Math.sqrt(sayilarDizisi[sayac]);
    console.log("Sayilarin Karekökü:", karekok);
}

for (let sayac = 0; sayac < diziUzunlugu; sayac++) {
    let sayilarinKaresiniAlma = (sayilarDizisi[sayac]) * (sayilarDizisi[sayac]);
    console.log("Sayilarin Karesi:", sayilarinKaresiniAlma);
}

for (let sayac = 0; sayac < diziUzunlugu; sayac++) {
    let dizidekiSayi = sayilarDizisi[sayac];
    dizidekiSayilarinToplami = dizidekiSayilarinToplami + dizidekiSayi;
}

console.log("Dizideki Sayilarin Toplami:", dizidekiSayilarinToplami);
console.log("Dizideki Sayilarin Ortalamasi:", dizidekiSayilarinToplami / diziUzunlugu);

for (let sayac = 0; sayac < diziUzunlugu; sayac++) {
    if (minSayi > sayilarDizisi[sayac]) { // minimum sayi bulma
        minSayi = sayilarDizisi[sayac];
    }

    if (maxSayi < sayilarDizisi[sayac]) { // maximum sayi bulma
        maxSayi = sayilarDizisi[sayac];
    }
}

console.log("En Küçük Sayi:", minSayi);
console.log("En Büyük Sayi:", maxSayi);