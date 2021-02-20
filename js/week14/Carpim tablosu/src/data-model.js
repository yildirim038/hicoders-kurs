/**
 * header olusturma fonksiyonu
 */
function creatInputHeader() {
    return `<header>
    <h3>Oyuncu Bilgileri</h3>
</header>`;
}
/**
 * Isim alanini olsuturan fonksiyon
 */
function creatInputName() {
    return ` <div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text">Adi:</span>
    </div>
    <input id="nameId" type="text" class="form-control" aria-label="Default"
        aria-describedby="inputGroup-sizing-default" placeholder="Isim Giriniz">
</div>`;
}
/**
 * Soyisim alanini olsuturan fonksiyon
 */
function creatInputSurname() {
    return `<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text">Soyadi:</span>
    </div>
    <input id="surname" type="text" class="form-control" aria-label="Default"
        aria-describedby="inputGroup-sizing-default" placeholder="Soyisim Giriniz">
</div>`;
}
/**
 * Isim button olsuturan fonksiyon
 */
function creatInputButton() {
    return `<button id="ekle" type="button" class="btn btn-secondary btn-lg">Ekle</button>`;
}
/**
 * Inputlari olsuturan fonksiyon
 */
function creatInput() {
    return creatInputHeader() +
        creatInputName() +
        creatInputSurname() +
        creatInputButton();
}
/**
 * Liste Alaninin Headerini olusturan fonksiyon
 */
function creatTabloHeader() {
    return ` <tr>
    <th scope="col">Adi</th>
    <th scope="col">Soyadi</th>
    <th scope="col">Puani</th>
</tr>`;
}
/**
 * Liste Alanini olusturan fonksiyon
 */
function creatTabloBody(pList) {
    return pList.map((p, index) => ` <tr>
    <td>${p.name}</td>
    <td>${p.surname}</td>
    <td>${p.puan}</td>
    <td><button  id="${index}" type="button" class="btn btn-secondary baslat">Baslat</button></td>
</tr>`).join("")
}
/**
 * Liste  olusturan fonksiyon
 */
function creatList(pList) {
    return `<table class="table">
       ${creatTabloHeader()}${creatTabloBody(pList)}
</table><button  id="ekleme" type="button" class="btn btn-secondary">Oyuncu Ekle</button>`
}
/**
 * Oyun Alaninin Headerini olusturan fonksiyon
 */
function createOyunHeader() {
    return `<header>
    <h1>Carpma Oyunu</h1>
</header>`
}
/**
 * Oyun Alaninin Süre kismini olusturan fonksiyon
 */
function createGameTime() {
    return `<span>Kalan Süre: </span><span id="time"></span><span> Saniye</span><br/>`
}
/**
 * Oyun Alaninin Sayilarin oldugu kismi olusturan fonksiyon
 */
function createGameArea() {
    return `<span id="birinciSayi">${sayiUret()}</span>
    <span id="carpi">X</span>
    <span id="ikinciSayi">${sayiUret()}</span>
    <span class="input-group mb-3">
        <input id="sonuc" type="text" class="form-control" aria-label="Default"
            aria-describedby="inputGroup-sizing-default" placeholder="Sonucu Giriniz">
    </span>
    <button id="tamam"  type="button" class="btn btn-secondary">Tamam</button>`
}