/**
 * Bir ciflikte karisik olarak verilmis hayvan listemiz var.
 * Bu program sayesinde paca yapacak necip ustaya müslümanlarin yiyebilecegi, paca yapilacak hayvanlarin bacak sayisini vermeyi amacliyoruz.
 * Sonucu ekrana yazdiracagiz.
 */
const cifliktekiHayvanlar = ["inek", "koyun", "inek", "domuz", "inek", "tavuk", "inek", "koyun", "domuz", "inek", "tavuk", "inek", "inek", "koyun", "domuz", "tavuk", "domuz", "inek"];
const kullanilabilenHayvanBacakSayisi = 4; // Paca yapiminda buyuk ve kucuk bas hayvanlar kullanilir. Kanatli hayvan kullanilmaz.
const kullanilabilirHayvanlar = ["inek", "koyun"]; // Paca yapilacak hayvanlar inek ve koyundur. Domuz müslümanlar tarafindan yenmedigi icin isleme alinmamistir.
let kullanilabilirHayvanlarAhiri = [];

for (let index = 0; index < cifliktekiHayvanlar.length; index++) {
    if (cifliktekiHayvanlar[index] === kullanilabilirHayvanlar[0] || cifliktekiHayvanlar[index] === kullanilabilirHayvanlar[1]) {
        kullanilabilirHayvanlarAhiri.push(cifliktekiHayvanlar[index]);
    }
}

console.log(`Kullanilabilir ayak sayisi: ${kullanilabilirHayvanlarAhiri.length * kullanilabilenHayvanBacakSayisi}`);