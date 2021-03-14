/**
 * Alta verilen Obje EXCEL dosyasinin icinde aktarmak olacaktir.
 * 1) Bunun icin xlsx kütüphanesinden yararlandim
 * 2) npm ile kütüphane bilgisayara indirilip dosya require kullanilarak aktarildi.
 * 3) Yeni bir sayfa olusturuldu ve burda buluanan objeck excel dosyasina json_to_sheet ile dönüstürldü.
 * 4) book_append_sheet metodu ile veriler bir sayfaya kaydedildi
 * 5) writeFile ile yeni excel sayfasi olsuturldu.
 * 6) Consol log ile bu bilgi görüntülendi yeni excel dosyasi acilarak datalar görülebilir.
 */
let data = [{
        ISIM: 'Cabbar',
        SOYISIM: 'Mikail',
        YAS: 22,
        'ALDIGI MAAS': 6000,
        CINSIYETI: 'ERKEK'
    },
    {
        ISIM: 'Hans',
        SOYISIM: 'Joe',
        YAS: 39,
        'ALDIGI MAAS': 16000,
        CINSIYETI: 'ERKEK'
    },
    {
        ISIM: 'Murtaza',
        SOYISIM: 'Kaya',
        YAS: 49,
        'ALDIGI MAAS': 6000,
        CINSIYETI: 'ERKEK'
    },
    {
        ISIM: 'Marion',
        SOYISIM: 'Minna',
        YAS: 55,
        'ALDIGI MAAS': 9000,
        CINSIYETI: 'KADIN'
    },
    {
        ISIM: 'Murat',
        SOYISIM: 'Burhan',
        YAS: 40,
        'ALDIGI MAAS': 10000,
        CINSIYETI: 'ERKEK'
    },
    {
        ISIM: 'Abdurrezzak',
        SOYISIM: 'Adigüzel',
        YAS: 22,
        'ALDIGI MAAS': 6000,
        CINSIYETI: 'ERKEK'
    },
    {
        ISIM: 'Mehmet',
        SOYISIM: 'Sökmen',
        YAS: 33,
        'ALDIGI MAAS': 12000,
        CINSIYETI: 'ERKEK'
    },
]
const xlsx = require('xlsx');
const newData = xlsx.utils.book_new()
const newDataSheet = xlsx.utils.json_to_sheet(data)
xlsx.utils.book_append_sheet(newData, newDataSheet, "New Data")
xlsx.writeFile(newData, "New Data File.xlsx")

console.log("Yeni Dosya Olusturuldu.")