/**
 * Her cocuk programi actiginda bir isim listesi ve toplam basari puani ile karsilacak. 
 * Eger listede kendi ismi yoksa yeni bir isim girilebilecek. 
 * Isim secildikten sonra otomatik olarak 10 soruluk oturum baslayacak. 
 * Her soru oturumun süresi 30 saniyedir.
 * 10 saniye sonunda veya cocugun 10 soruyu bitirmesi durumunda program bitecek ve yine isim listesine geri dönecektir. 
 * Cocuk güncellenmis isim listesinde puanini görebilecektir.
 * 1)Önce görünüm HTML de hazirlanir
 * 2)Oyuncularin bulundugu liste olusturulur. Burda bir baslangic buttonu bulunur bu buton oyunu baslatacak.
 * 3)Alt kismina oyuncu kaydi icin bir alan olusturlur ve bu olanda oyuncu ismini yoksa kendini kaydeder.
 * 4)Ekle buttonuna basilinca kisi kendini  listede görür.(UI yenilenir.)
 * 5)Oyuncu yukardeki basla buttonuna basinca oyun baslar ve müzik çalmaya baslar.
 * 6)Oyun bölümü olusturlur ve bu kisimda random olarak bir den ona kadar olan 2 sayi alinir.
 * 7)Sonucun girilecegi bir alan olsurulur ve oyuncu bu alana sayiyi girer.
 * 8)Sayi girildikten sonra tamam buttonuna balsilir ve bir sonraki soru ekrana gelir.
 * 9)Ayrica bir sayac 10 dan geriye dogru sayar ve bu süre tamam butonuna basilirsa tekrar 10 döner.
 * 10)Süre dolarsa oyun ve ya tüm sorular cevaplanirsa sona erer.
 * 11)Müzik durdurulur,Alert ile alinan puan gösterilir ve listeye alinan puan yazdirilir .
 */
let oyunSayisi = 0;
let saniye = 30;
let oyunPuani = []
let players = []
let deger = 0;
let secilenId = [];
let audio = new Audio();
const gameElement = domBaglan()

gameElement.addEventListener("click", addPlayer)
gameElement.addEventListener("click", startGame)
gameElement.addEventListener("click", listFunction)
gameElement.addEventListener("click", newFrage)
gameElement.addEventListener("click", gamePlay)
updateUI()
