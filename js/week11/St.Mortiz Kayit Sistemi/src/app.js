/**
 * Bir okul Yöneticisi Bizden Okul kayitlarinda kullanmak üzere bir program hazirlamamizi istiyor
 * Programin sol tarafinda kayit bilgilrini girecek
 * Programin sag tarafinda ise okula kayit olan ögrencileri listelemek istemektedir
 * Ayrica sag tarafa ekledigi ögrencileri yanlis veya kayit sildirmesi durumunda listeden cikaracagi bir sil putonu talep etmektedir
 * Son olarak ekranin sag tarfin en altinda ise okula kayit olan toplam örenci sayisini görmek istemektedir.
 * 
 * 1)Oncelikli olarak sol tarafta ögrencilerin kayitlarinin girlilecegi kisim olusturulur.
 * 2)Kayit butunanina basilinca ; Olusturlun inputlara id ile ulasilarak icindeki veriler alinir ve bir objeck dizisi olustukur.
 * 3)Olusturulan dizi yanda tabloda gösterilirmesi icin fonksiyonlar yazilir. ( biri header digeri ise dizi icerisinde dönerek verilen degerleri alir)
 * 4)Tablonun son hücresine bir buton konur ve bu butona id olarak dizideki index i verilir.
 * 5)Dizideki indekse ulasilarak silinmek istenen kayitin silinmesi saglanir
 * 6)Son olarak tablonun alt kisminda kayit edilen ögrencilerin dizi uzunlugu gösterilir.
 */
const tabloElement = document.querySelector("#liste")
const kayitElement = document.querySelector("#form")
let ogrenciBilgileri = []

kayitElement.addEventListener("click", addStudent)
tabloElement.addEventListener("click", removeOgrenci)
updateUI()