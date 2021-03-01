/**
 * Ismet sisteme girer ve ilk olarak müsterilerinin listesini görür. 
 * Bir müsterinin üzerine tikladiginda, o müsteriye ait bir veya birden fazla temilik yapilacak kisi listesi karsisina cikar.
 * Bu listede temilik yapilacak kisinin üzerine tikladiginda o kisinin adreslerini görür. 
 * Ayrica eger temizlik yapilmis ise o kisiyi listede isaretleyecek bir butonda mevcuttur ve listede ismi daha silik gösterilmelidir.
 * 
 * 1)Liste Yukarida anlatildigi gibi ilgili bilgilerin yer aldigi obje ile olsuturulur.
 * 2)Müsterinin temizlik yaptirmak istedigi kisler ilk objenin icinde ikinci obje olarak olsuturulur.(ic ice obje)
 * 3)Temilik Yapilacak adresler de ikici ibjenin icinde bir dizi olarak olsuturulur. Temiligin yapilip yapilmadigi bilgisi boolean bilgisi olarak konur.
 * 4)Olusrulan listenin icin HTML icreisinde görüntüler hazirlanir ve bunlar Template Literaller ile view.js lere aktarilir(2 tane kullandim)
 * 5)Objenin icinde map ile dönülerek ilgili tablo alanlari doldurulur ve join ile bu tablolar birlestirilir.
 * 6)Localstorage  kayit kismi olsturulur ve güncelmeler local üzerinden yapilir.
 * 7)Boolean durumuna bakilarak temizlik durumuna göre listede ki renk düzenlenir.
 */

const listElement = document.querySelector("#countainer")
const addressElement = document.querySelector("#address")
const backElement = document.querySelector("#back")
listElement.addEventListener("click", getCleanerList)
refreshUI(customerList);