/**
 * Raziye Hanimin istedegi internet satis sitesini yapacagiz.
 * Bu sitenin sol tarafinda ürünler ve özellikleri ve satin al butonu  buluncak.
 * Sitenin sag tarafinda ise alinan ürünler ve bu ürünlerin sepetten cikaran bir buton ve en alt kisimda toplam fiyat yer alacak
 * 1)Öncelikli olarak HTML ayirlancak; main icinde hem sag hemde sol kisim icin 2 adet section olusturlacak
 * 2)Main flex yapilarak iki section un yanyana gelmesi saglacak
 * 3)Sol kisim icin elimizdeki Object dizisinden yararlanarak js de tablo olusturulup HTML de gösterilecek
 * 4)Sag tarafa olustulacak liste icin öncelikli olarak butona click edildiginde yeni bir objeck dizisi olustulmasi saglanacak
 * 5)Bu yeni listeden yararlanilarak sag tarafta js üzerinde tablo olusturularak HTML ye yansiltilacak
 * 6)Del butonuna basinca ürünlerin sagdaki listeden cikarilmasi saglanacak
 * 7)Sepete atilan sipraislerin toplam miktari hesaplanilacak program hazirlanacak.
 */
const productList = [{
        productName: "Aprikosen",
        price: 7.90,
        expireDate: new Date(2021, 11, 12),
        productImage: "https://image.migros.ch/product-zoom/47c42ac7c3f96779711c07b4e887fa314f7d3118/extra-konfituere-aprikosen.jpg",
        totalCalories: 460,
    },
    {
        productName: "Waldbeeren",
        price: 5.20,
        expireDate: new Date(2021, 3, 19),
        productImage: "https://image.migros.ch/product-zoom/b1efd55d4b123bdfdb9e5dd644aed4a472a52e21/favorit-konfituere-waldbeeren.jpg",
        totalCalories: 240
    },
    {
        productName: "Hagenbutten",
        price: 3.10,
        expireDate: new Date(2021, 5, 15),
        productImage: "https://image.migros.ch/product-zoom/7155c76b6f1134f6a57795ded7c1fb8c80953cf7/extra-konfituere-hagenbutten.jpg",
        totalCalories: 300
    },
    {
        productName: "Himbeeren",
        price: 10,
        expireDate: new Date(2021, 8, 17),
        productImage: "https://image.migros.ch/product-zoom/fb3e595303aa4bb287c274b6b0bc7e7c020f80e7/extra-konfituere-himbeeren.jpg",
        totalCalories: 600
    },
    {
        productName: "Kirschen",
        price: 13.70,
        expireDate: new Date(2021, 10, 11),
        productImage: "https://image.migros.ch/product-zoom/2d4a9cc209dcb269be4b805fbf139207c78dc8a4/favorit-konfituere-schwarze-kirschen.jpg",
        totalCalories: 125,
    },
    {
        productName: "Orangen",
        price: 8.90,
        expireDate: new Date(2021, 6, 18),
        productImage: "https://image.migros.ch/product-zoom/cfb4e6683236afcefe918e3e5c273dfb2718ea64/extra-marmelade-bitterorangen.jpg",
        totalCalories: 150
    },
    {
        productName: "Erdbeeren",
        price: 11.90,
        expireDate: new Date(2021, 10, 1),
        productImage: "https://image.migros.ch/product-zoom/c88b57754e8e31309bf45015a0535ed59c05e02c/m-budget-konfituere-erdbeer.jpg",
        totalCalories: 222
    },
    {
        productName: "Erdbeer Extra",
        price: 4.80,
        expireDate: new Date(2021, 2, 14),
        productImage: "https://image.migros.ch/product-zoom/36b67f0227f055314b9ace8fe2daa24e2279c079/extra-konfituere-erdbeeren.jpg",
        totalCalories: 333
    },
    {
        productName: "Erdbeer Klein",
        price: 19.50,
        expireDate: new Date(2021, 0, 1),
        productImage: "https://image.migros.ch/product-zoom/023deb389cae5f7f523d2560f5f90f0ee49b8f38/favorit-konfituere-erdbeeren.jpg",
        totalCalories: 250
    }
]

const tableElement = document.querySelector("#table-sale");
const sepetElement = document.querySelector("#sepet");
let saleTableList = []

tableElement.addEventListener("click", function (pEvent) {
    saleTableList.push(productList[pEvent.target.id]);
    updateUI(pEvent.target.id);
})

sepetElement.addEventListener("click", function (pEvent) {
    saleTableList.splice(pEvent.target.id, 1);
    updateUI(pEvent.target.id);
})

updateUI(0)