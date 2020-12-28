/**
 * String olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirdik
 * daha sonra konsolo yazdirdik.
 */
const isim = "kayra numan yildirim"
let parcalar = isim.split(" ");

for (let index = 0; index < parcalar.length; index++) {
    let buyukHarf = parcalar[index].charAt(0).toUpperCase();
    parcalar[index] = buyukHarf + parcalar[index].substr(1).toLowerCase();
}

console.log(`Uppercase ile isim yazima: ${parcalar.join(" ")}`)

//1 den 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda virgul olacak sekilde yazdirdim.
let sayilar = " ";
const maxSayi = 100;
for (let sayac = 1; sayac < maxSayi; sayac++) {
    sayilar += sayac + ",";
    if (sayac % 10 == 0) {
        sayilar += "\n"
    }
}
console.log(sayilar + "100");


//0-100 arasindaki asal sayilar.Asal sayilar ikiden basladigi icin ilk sayiyi ikiden baslattim.
let asalSayilar = []
for (let index = 2; index <= 100; index++) {
    let asalKontrol = true;
    for (let bolen = 2; bolen < index; bolen++) {
        if (index % bolen == 0) {
            asalKontrol = false;
            break;
        }
    }
    if (asalKontrol) {
        asalSayilar.push(index);
    }
}
console.log("0-100 arasinda ki Asal Sayilar: ", asalSayilar)

//Kucuk, buyuk, ozel karakterler ve sayilardan olusan 8 ile 16 (hane) uzunluklari arasinda guvenli 50 adet sifre olusturuldu. 

let sifreler = [];
const kucukHarfler = "abcdefghijklmnopqrstuvwxyz";
const buyukHarfler = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const rakamlar = "0123456789"
const kareterler = "!@#$%^&*()_+~`|}{[]\:;?><,./-="
const sifreSayisi = 50;
for (ilkDongu = 0; ilkDongu < sifreSayisi; ilkDongu++) {
    const sifreUzunlugu = Math.floor(Math.random() * 8) + 8
    let sifre = " ";
    for (index = 1; index < sifreUzunlugu; index++) {
        if (index % 3 == 0) {
            let karakterSec = Math.floor(Math.random() * buyukHarfler.length);
            sifre += buyukHarfler.charAt(karakterSec)
        } else if (index % 5 == 0) {
            let karakterSec = Math.floor(Math.random() * rakamlar.length);
            sifre += rakamlar.charAt(karakterSec)
        } else if (index % 4 == 0) {
            let karakterSec = Math.floor(Math.random() * kareterler.length);
            sifre += kareterler.charAt(karakterSec)
        } else {
            let karakterSec = Math.floor(Math.random() * kucukHarfler.length);
            sifre += kucukHarfler.charAt(karakterSec)
        }
    }
    sifreler.push(sifre)
}
console.log("50 Adet Sifre:", sifreler)

//Sekil olustirma
let sekil = "";
const satirSayisi = 6;
for (index = 1; index <= satirSayisi; index++) {
    for (sayac = 0; sayac < index; sayac++) {
        sekil += "*";
    }
    sekil += "\n";
}
console.log(sekil)