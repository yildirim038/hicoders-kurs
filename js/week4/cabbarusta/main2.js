let arabaRengi  = "kirmizi"; 
let arabaMarkasi = "Audi";
let arabaModeli = 2015;
let kacYillikMusteri = 2;

if (kacYillikMusteri > 4) {
    console.log("Arabanizi tamir etmekteyiz.");
}
else if (arabaMarkasi == "BMW"){
    if( arabaRengi == "kirmizi") {
        if (arabaModeli > 2010 && arabaModeli < 2019) {
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
        if ( (arabaModeli > 2005 && arabaModeli < 2010) || (arabaModeli > 2014 && arabaModeli < 2020 )) {
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
        if( arabaModeli > 2001 && arabaModeli < 2018) {
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