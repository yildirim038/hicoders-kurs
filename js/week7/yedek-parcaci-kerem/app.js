/**
 * Kerem Bey'in istedigi program, asagiaki durumlari karsilamasi gerekmektedir.
 * Parca isimleri büyük harflere cevrilecektir.
 * Parca isimlerinden sayilar cikartilacaktir.
 * Parca isimleri tersine cevrilecektir.
 * Her parcanin basina KEREMAG_ eklenecektir.
 * Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir.
 */
const arabaParcalari = ["far", "ayna", "tampon206", "tampon_c5", "kapi", "ön_cam", "arka_cam", "silecek", "fren_balatasi"];
let istenilenListe = [];
/**
 * Büyük Harfle Yazma Foksiyonu.
 */
function buyukHarf(urun) {
    return urun.toUpperCase();
}
/**
 * Sayilari Silme Foksiyonu.
 */
function sayiSil(urun) {
    return urun.replace(/[0-9]/g, "")
}
/**
 * Ters Yazma Foksiyonu.
 */
function tersCevir(urun) {
    return urun.split("").reverse().join("");
}
/**
 * Basina Firma adi ekleme Foksiyonu.
 */
function isimEkle(urun) {
    const basaEkle = "KEREMAG_";
    return basaEkle.concat(urun);
}
/**
 * Tarih ekleme Foksiyonu. Tarih Daha rahat okunmasi icin araya _ ekledim.
 */
function tarihEkle(data) {
    const tarih = new Date();
    return data.concat("_", tarih);
}
/**
 * Fonksiyonlari Kullanarak döngü ile istenilen liste elde edildi.
 */
for (let index = 0; index < arabaParcalari.length; index++) {
    const element = arabaParcalari[index];
    const buyukHarfElement = buyukHarf(element);
    const sayisizElement = sayiSil(buyukHarfElement);
    const tersElement = tersCevir(sayisizElement);
    const baslikliElement = isimEkle(tersElement);

    istenilenListe.push(tarihEkle(baslikliElement));
}

console.log("Kerem Beyin Istedigi Liste Sekli: ", istenilenListe);