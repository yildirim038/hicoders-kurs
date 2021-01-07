const fishFarm = [{
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1), // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway",
        season: "Winter",
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12), // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan",
        season: "Winter",
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    {
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom",
        season: "Spring",
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    {
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland",
        season: "Summer",
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    {
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France",
        season: "Autumn",
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Bluefish",
        price: 13.70,
        entryDate: new Date(2021, 10, 11),
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy",
        season: "Winter",
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    {
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "GREECE",
        season: "Summer",
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    {
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt",
        season: "Summer",
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    {
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam",
        season: "Summer",
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain",
        season: "Winter",
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },
]
/**
 * Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
 */
const MIN_STOK = 500;
const enoughStok = fishFarm.filter(item => item.stockVolumeInKg > MIN_STOK);
const enoughStokList = enoughStok.map(element => element.fishType);

console.log("Stok Miktari 500 Kg dan Fazla olan Baliklar:", enoughStokList)
/** 
 *  Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
 */
const MIN_PRICE = 9;
const MAX_PRICE = 12;
const rangePrices = fishFarm.filter(item => item.price > MIN_PRICE && item.price < MAX_PRICE);

const rangePriceList = rangePrices.map(element => element.fishType);
console.log("Fiyati 9 ile 12 Frank arasi Ücreti olan Baliklar;", rangePriceList)
/** 
 * Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
 */
let winterFishInBern = []
const KANTON = "BE"

for (let index = 0; index < fishFarm.length; index++) {
    const element = fishFarm[index].season;
    const location = fishFarm[index].saleLocations;
    const season = "Winter"
    if (findSeason(season, element) && (KANTON === location.find(isItBern))) {
        winterFishInBern.push(fishFarm[index].fishType)
    }
}

console.log("Kisin Bern de Satilan Baliklar;", winterFishInBern)
/** 
 * Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
 */
let newListToSort = showEndOfUseDate().sort(doSort);
const expirationDateList = newListToSort.map(element => element.name)

console.log("Son kullanma tarihlerine gore baliklari siralamasi:", expirationDateList);
/**
 * Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
 */

const euFish = fishFarm.filter(item => (item.originCountry === "Poland" || item.originCountry === "Spain" || item.originCountry === "GREECE" || item.originCountry === "Italy" || item.originCountry === "France") && item.price < 10)
let euFishName = euFish.map(element => element.fishType)
euFishName.sort();

console.log("AB den gelen ve fiyati 10 Frank altindaki ürünler:", euFishName)
/**
 * Toplam balik stoku ne kadardir ?
 */
let totalStok = 0;
fishFarm.map(element => totalStok += element.stockVolumeInKg);

console.log("Toplam Stok:", totalStok, "KG")
/**
 * En pahali olan balik hangisidir ?
 */
const smallToLarge = fishFarm.sort(function (a, b) {
    let c = a.price;
    let d = b.price;
    return c - d;
});
const expensiveFish = smallToLarge[smallToLarge.length - 1].fishType;

console.log("En Pahali Balik:", expensiveFish)
/**
 * En uzun sureli durabilen baliklar hangi ulkeden gelmektedir ?
 */
const largeToSmall = fishFarm.sort(function (a, b) {
    let c = a.durationInDays;
    let d = b.durationInDays;
    return d - c;
});
const longestDurationDay = largeToSmall[0].durationInDays;
const longestDurationFishs = fishFarm.filter(item => item.durationInDays === longestDurationDay)
const longestDurationFishNames = longestDurationFishs.map(element => element.fishType)

console.log("En Uzun Süre Dayanan Baliklar:", longestDurationFishNames)
/**
 * Kis ve sonbahar sezonu icin swiss romande region 'da satilan baliklarin ortalama fiyati nedir?
 */


const swissRomandaRegion = ["VD", "NE", "GE", "JU"];
let swissRomandaRegionFishs = []
let totalPreis = 0;

for (let index = 0; index < fishFarm.length; index++) {
    const element = fishFarm[index].season;
    const location = fishFarm[index].saleLocations
    let kanton = location.find(chooseKanton)
    for (let sayi = 0; sayi < location.length; sayi++) {
        const kanton = location[sayi];
        for (let nummer = 0; nummer < swissRomandaRegion.length; nummer++) {
            const city = swissRomandaRegion[nummer];
            const seasonWinter = "Winter"
            const seasonAutumn = "Autumn"
            if ((element === seasonWinter || element === seasonAutumn) && city === kanton) {
                totalPreis = totalPreis + fishFarm[index].price
                swissRomandaRegionFishs.push(fishFarm[index].fishType)

            }
            break;
        }
    }
}
console.log(`Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati: ${totalPreis /swissRomandaRegionFishs.length} Frank`)
/**
 * Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur ?
 */
let fishStockInTicino = [];
const KANTON_TI = "TI"
let totalStockInTicino = 0;

for (let index = 0; index < fishFarm.length; index++) {
    const element = fishFarm[index].saleLocations;
    if (KANTON_TI == element.find(isItTicino)) {
        fishStockInTicino.push(fishFarm[index].stockVolumeInKg)
    }
}

for (let index = 0; index < fishStockInTicino.length; index++) {
    const element = fishStockInTicino[index];
    totalStockInTicino = totalStockInTicino + element;
}

console.log("Ticino icin stokta olan balik miktari:", totalStockInTicino, "KG")
/**
 *Yazlik sezonda cikan ve AB disindan gelen ve de ZH 'de satilan baliklarin ortalama gramajini bulunuz?
 */
const outsideEuFish = fishFarm.filter(item => (item.originCountry === "Egypt" || item.originCountry === "Norway" || item.originCountry === "Japan" || item.originCountry === "Vietnam" || item.originCountry === "United Kingdom") && item.season === 'Summer');
const KANTON_ZH = "ZH";
let fishItemWeightInGrams = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

for (let index = 0; index < outsideEuFish.length; index++) {
    const element = outsideEuFish[index].saleLocations;
    const elementGram = outsideEuFish[index].itemWeightInGrams;
    if (KANTON_ZH === element.find(isItZurich)) {
        fishItemWeightInGrams.push(elementGram)
    }
}

console.log(`Yazlik sezonda cikan ve AB disindan gelen ve de ZH 'de satilan baliklarin ortalama gramaji : ${fishItemWeightInGrams.reduce(reducer)/fishItemWeightInGrams.length}`)