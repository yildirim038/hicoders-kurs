/**
 * Ekle butanuna basinca oyuncu bilgilerini listeye alan fonksiyon
 */
function creatNewList() {
    if (nameId.value && surname.value !== "") {
        players.push({
            "name": nameId.value,
            "surname": surname.value,
            "puan": 0,
            "key": players.length
        })
    }
}
/**
 * Oyun Alanini olusturan fonksiyon
 */
function createGame() {
    return createOyunHeader() + createGameTime() + createGameArea();
}
/**
 * Sayi olusturan fonksiyon
 */
function sayiUret() {
    sayi = Math.floor((Math.random() * 10) + 1)
    return sayi;
}
/**
 * Kiyaslama yapan  fonksiyon
 */
function sayiKiyasla() {
    const sayi1 = document.getElementById("birinciSayi").textContent
    const sayi2 = document.getElementById("ikinciSayi").textContent
    const cevap = document.getElementById("sonuc").value
    let puan = 0;
    if (sayi1 * sayi2 == cevap) {
        puan = 4
    }
    return puan;
}
/**
 * Toplam Puani hesaplayan fonksiyon 
 */
function totalPuan(pDizi) {
    let toplam = 0
    for (let index = 0; index < pDizi.length; index++) {
        const element = pDizi[index];
        toplam = toplam + element
    }
    return toplam
}
/**
 * Liste olusturma Fonksiyonu
 * @param {*} pEvent 
 */
function listFunction(pEvent) {
    if (pEvent.target.id === "ekleme") {
        kayitUI()
    }
}
/**
 * Yeni soru getiren Fonsiyon
 * @param {*} pEvent 
 */
function newFrage(pEvent) {
    if (pEvent.target.id === "button") {
        oyunUI()
    }
}
/**
 * Oyuncu ekleme Fonksiyonu
 * @param {*} pEvent 
 */
function addPlayer(pEvent) {
    if (pEvent.target.id === "ekle") {
        creatNewList();
        saveList(players)
        updateUI()
    }
}
/**
 * Ekrani yenileme Foksiyonu
 */
function updateUI() {
     retrieveList()                          //    Abi bu kismi local storage attim ama bir türlü düzgün alamadim.
    gameElement.innerHTML = creatList(players) //     Kodu denedigimde undefined olarak objeler cikiyor.

}
/**
 * Kayit Ekleme Ekrani getiren Fonksiyon
 */
function kayitUI() {
    gameElement.innerHTML = creatInput()
}
/**
 * Oyun Alanin getiren Fonksiyon 
 */
function oyunUI() {
    gameElement.innerHTML = createGame()
    saniye = 30
    saniyeBaslat()
}
/**
 * Oyun Baslatan Fonksiyon
 * @param {*} pEvent 
 */
function startGame(pEvent) {

    let clickedElement = pEvent.target;
    if (clickedElement.className === "btn btn-secondary baslat") {
        startMusik()
        let index = parseInt(clickedElement.id);
        oyunUI()
        deger = setInterval(function () {
            saniyeBaslat()
        }, 1000);
        oyunSayisi = 0
        oyunPuani = []
        secilenId.push(index)
    }
}
/**
 * Oyun Sayisini Tutan ve Bitiren Fonksiyon
 */
function gamePlay(pEvent) {
    if (pEvent.target.id === "tamam") {
        if (oyunSayisi < 25) {
            oyunSayisi++
            oyunPuani.push(sayiKiyasla())
            oyunUI()
        }
        if (oyunSayisi === 25) {
            if(players[secilenId[secilenId.length - 1]].puan<totalPuan(oyunPuani)){
                players[secilenId[secilenId.length - 1]].puan = totalPuan(oyunPuani)
            }
            stopMusik();
            alert(`Puaniniz:${totalPuan(oyunPuani)}`)
            updateUI()
            saniyeDurdur();
            localStorage.clear()
            saveList(players)

        }
    }
}
/**
 * Saniye durdurma Fonsiyonu
 */
function saniyeDurdur() {
    window.clearInterval(deger);
}
/**
 * Saniye Baslatan ve geriye dogru saymayi saglayan fonksiyon
 */
function saniyeBaslat() {
    if (saniye >= 0) {
        document.getElementById('time').innerHTML = saniye;
        saniye--;
    } else {
        players[secilenId[secilenId.length - 1]].puan = totalPuan(oyunPuani)
        saniyeDurdur();
        stopMusik();
        alert(totalPuan(oyunPuani));
        updateUI();
        localStorage.clear()
        saveList(players)
    }
}
/**
 * Local Storage'e kayit Fonsiyonu 
 * @param {*} pList 
 */
function saveList(pList) {
    for (let index = 0; index < players.length; index++) {
        let stringifyList = JSON.stringify(pList)
        let key = pList[index].key
        window.localStorage.setItem(key, stringifyList)
    }
}
/**
 *Local Storage'den geri alma fonsiyonu
 */
function retrieveList() {
    if (localStorage.length !== 0) {
        if (players.length === 0) {
            for (let index = 0; index < localStorage.length; index++) {
                let element = JSON.parse(localStorage.getItem(localStorage.key(index)));
                players.push(element[index])
            }
        }
    }
}
/**
 * Müzik Ekleme Foksiyonu
 */
function startMusik() {
    audio.src = "./muzik/muzik.mp3";
    audio.volume = 0.5;
    audio.loop = true;
    audio.play();
}
/**
 * Müzik Durdurma Foksiyonu
 */
function stopMusik() {
    audio.pause();
}