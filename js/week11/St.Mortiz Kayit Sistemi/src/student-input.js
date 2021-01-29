/**
 * Ekranin Sol tarafini olusturan Fonksiyonlar
 */
function creatInputHeader() {
    return `<header>
    <h3>Ögrenci Bilgileri</h3>
</header>`;
}

function creatInputName() {
    return ` <div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text">Adi:</span>
    </div>
    <input id="nameId" type="text" class="form-control" aria-label="Default"
        aria-describedby="inputGroup-sizing-default" placeholder="Isim Giriniz">
</div>`;
}

function creatInputSurname() {
    return `<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text">Soyadi:</span>
    </div>
    <input id="surname" type="text" class="form-control" aria-label="Default"
        aria-describedby="inputGroup-sizing-default" placeholder="Soyisim Giriniz">
</div>`;
}

function creatInputYas() {
    return `<div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text">Yasi:</span>
    </div>
    <input id="age" type="text" class="form-control" aria-label="Default"
        aria-describedby="inputGroup-sizing-default" placeholder="Yas Giriniz (Lütfen sayi olarak girin.)">
</div>`;
}

function creatInputButton() {
    return `<button id="ekle" type="button" class="btn btn-secondary btn-lg">Ekle</button>`;
}

function creatInput() {
    return creatInputHeader() +
        creatInputName() +
        creatInputSurname() +
        creatInputYas() +
        creatInputButton();
}