	let randomSayi, hak = 1;
	let tahmin = [5, 7, 9, 2];
	let diziUzunlugu = tahmin.length;
	randomSayi = Math.round(Math.random() * 10);

	for (let sayac = 0; sayac < (diziUzunlugu); sayac++) {

		if (tahmin[sayac] < randomSayi) {
			console.log("Arka Vagona ilerleyin");
		}
		if (tahmin[sayac] > randomSayi) {
			console.log("Ön Vagona ilerleyin");
		}
		if (tahmin[sayac] == randomSayi) {
			console.log("Tebrikler Süpheliyi", hak, "denemede yakaladiniz");
			if (hak == 1) {
				console.log("Süpheliyi ilk denemede yakaladiginiz icin  100 puan aldiniz")
			} else if (hak == 2) {
				console.log("Süpheliyi ikinci denemede yakaladiginiz icin  90 puan aldiniz")
			} else if (hak == 3) {
				console.log("Süpheliyi ücüncü denemede yakaladiginiz icin  80 puan aldiniz")
			} else {
				console.log("Süpheliyi dördüncü denemede yakaladiginiz icin  60 puan aldiniz")
			}
			break
		}
		hak++;
		if (hak > 4) {
			console.log("Üzgünüm Süpheliyi yakalayamadiniz. Süphelinin oldugu vagon : " + randomSayi);
		}
	}