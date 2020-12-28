let randomSayi, sayac, hak = 4;
let baslat = document.querySelector("#baslat");
let tahmin = document.querySelector("#tahmin");
let sayi = document.querySelector("#sayi");

baslat.onclick = function () {
    tahmin.disabled = false;
    randomSayi = Math.round(Math.random() * 10);
    sayac = 0;
}

tahmin.onclick = function () {
    sayac++;
    if (randomSayi != randomSayi.value && sayac >= hak) {
        window.alert("Üzgünüm Süpheliyi yakalayamadiniz. Süphelinin oldugu vagon : " + randomSayi);
        tahmin.disabled = true;
    }
    if (randomSayi == randomSayi.value) {
        window.alert("Tebrikler Hirsizi Yakaladiniz.");
        if (randomSayi == 1) {
            window.alert("Süpheliyi ilk denemede yakaladiginiz icin  100 puan aldiniz")
        } else if (hak == 2) {
            window.alert("Süpheliyi ikinci denemede yakaladiginiz icin  90 puan aldiniz")
        } else if (hak == 3) {
            window.alert("Süpheliyi ücüncü denemede yakaladiginiz icin  80 puan aldiniz")
        } else {
            window.alert("Süpheliyi dördüncü denemede yakaladiginiz icin  60 puan aldiniz")
        }
    } else if (randomSayi.value > randomSayi) {
        window.alert("Ön Vagona ilerleyin");
    } else {
        window.alert("Arka Vagona ilerleyin");
    }
}