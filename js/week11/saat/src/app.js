/**
 * Uc ayri sehrin yerel saatlerini gösteren bir program yazmamiz isteniyor
 * 
 * 1)Öncelikli olarak yerel saat alinir.
 * 2)Girilecek sehirlerin saat farklari tesbit edilir.
 * 3)Hangi sehrin secildigi tesbit edilir ve bu sehirin saat farkina göre secilen sehrin yerel zamanini olusturacak program yazilir
 * 4)Saatin Hanelerinin her zaman iki hane olmasi saglanir.
 * 5)Olusturulan degerler bir fonksiyon ile bir araya getirilerek secilen sehrin saati olusturulur ve ekrana yansitilir.
 */
let digitalClock = document.querySelector("#digitalClock")
let dropDown = document.querySelector("#sehir-sec");
let sehrinAdi = document.querySelector("#city")
let mainContent = document.querySelector("#counteiner")
let saatFarki = 0;

dropDown.addEventListener("change", findCity)
let timerHandler = setInterval(writeTime, 1000);