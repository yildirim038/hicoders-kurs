/**
 * Ögrenci ekleme Fonksiyonu
 * @param {*} pEvent 
 */
function addStudent(pEvent) {
    if (pEvent.target.id === "ekle") {
        creatNewList();
        updateUI()
    }
}
/**
 * Ekle butanuna basinca ögrenci bilgilerini listeye alan foksiyon
 */
function creatNewList() {
    ogrenciBilgileri.push({
        "name": nameId.value,
        "surname": surname.value,
        "age": Number(age.value)
    })
}
/**
 * Ekrani yenileme Foksiyonu
 */
function updateUI() {
    kayitElement.innerHTML = creatInput()
    tabloElement.innerHTML = creatList(ogrenciBilgileri)
}
/**
 * Sil butonuna basilan kaydin silinmesi fonsiyonu
 * @param {*} pDeletedIndex 
 */
function removeList(pDeletedIndex) {
    ogrenciBilgileri.splice(pDeletedIndex, 1);
    updateUI()
}
/**
 * Silme fonksiyonu
 * @param {*} pEvent 
 */
function removeOgrenci(pEvent) {
    let clickedElement = pEvent.target;
    if (clickedElement.tagName.toLowerCase() === "button") {
        let index = parseInt(clickedElement.id);
        removeList(index);
    }
}