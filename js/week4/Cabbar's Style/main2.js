const arabaRengi  = "kirmizi"; 
const arabaMarkasi = "BMW";
const arabaModeli = 2019;
const kacYillikMusteri = 2;

if (kacYillikMusteri > 4) {
    console.log("Arabanizi tamir etmekteyiz.");
}
else if (arabaMarkasi == "BMW"){
    if( arabaRengi == "kirmizi") {
        if (arabaModeli > 2009 && arabaModeli < 2020) {
            console.log("Arabanizi tamir etmekteyiz.");
        }
        else {
            console.log("Ne yazik ki bu model araclari tamir edemiyoruz."); // Olumsuz yazilari programin dogru calistigini anlayabilmek icin farkli yazdim.
        }
    }
     else if (arabaRengi == "siyah"){
        if( arabaModeli == 2020){
            console.log("Arabanizi tamir etmekteyiz.");
        }
        else {
            console.log("Ne yazik ki bu model araclari tamir edemiyoruz.");
        }
    }
    else {
        console.log("Ne yazik ki bu renk arabalari tamir etmemekteyiz.");
    }
}

else if (arabaMarkasi == "Audi") {  
    if (arabaRengi == "kirmizi" || arabaRengi == "siyah") {
        if ( arabaModeli > 2004 && arabaModeli < 2011 || arabaModeli > 2013 && arabaModeli < 2021 ) {
            console.log("Arabanizi tamir etmekteyiz.");
        }
        else {
            console.log("Ne yazik ki bu model araclari tamir edemiyoruz.");
        }
    }
    else {
        console.log("Ne yazik ki bu renk arabalari tamir etmemekteyiz.");
    }
}

else if (arabaMarkasi == "VW" ) {
    if (arabaRengi == "siyah") {
        if( arabaModeli > 2000 && arabaModeli < 2019) {
            console.log("Arabanizi tamir etmekteyiz.");
        }

        else {
            console.log("Ne yazik ki bu model araclari tamir edemiyoruz.");
        }
    }

    else {
        console.log("Ne yazik ki bu renk arabalari tamir etmemekteyiz.");
    }
}

else{
    console.log("Firmamizda arabaniz tamir edilmemektedir.")
 }