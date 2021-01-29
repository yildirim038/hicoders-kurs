/**
 * Sehir secme fonksiyonu
 */
function findCity(pValue) {
    if (pValue.target.value === "Tokyo") {
        saatFarki = 8;
        sehrinAdi.innerHTML = pValue.target.value
    } else if (pValue.target.value === "Zürich") {
        saatFarki = 0;
        sehrinAdi.innerHTML = pValue.target.value
    } else if (pValue.target.value === "NewYork") {
        saatFarki = -6
        sehrinAdi.innerHTML = pValue.target.value
    }
}
/**
 * Date yi bulunan konumun date ile degistirme fonksiyonu
 */
function convertTime(pSaatFarki) {
    let newTime = new Date()
    const yerelSaat = newTime.getTime()
    const localOffset = newTime.getTimezoneOffset() * 6000
    const utc = yerelSaat + localOffset
    const newClock = utc + (3600000 * pSaatFarki)
    newTime = new Date(newClock)
    return newTime;
}
/**
 * Saat olusturan Fonksiyon
 */
function writeTime() {
    const cityDate = (convertTime(saatFarki))
    const cityHour = cityDate.getHours();
    const cityMinute = cityDate.getMinutes();
    const citySecond = cityDate.getSeconds();
    const time = `${addHourNull(cityHour)} : ${addMinuteNull(cityMinute)} : ${addSekondeNull(citySecond)} `
    digitalClock.innerHTML = time;
}
/**
 * 10 dan kücük saatleri cift hane yapma fonksiyonu
 */
function addHourNull(hours) {
    if (hours < 10) {
        hours = `0${hours}`
        return hours;
    } else {
        return hours;
    }
}
/**
 * 10 dan kücük dakikalarin cift hane yapma fonksiyonu
 */
function addMinuteNull(minute) {
    if (minute < 10) {
        minute = `0${minute}`
        return minute;
    } else {
        return minute;
    }
}
/**
 * 10 dan kücük saniyeleri cift hane yapma fonksiyonu
 */
function addSekondeNull(sekonde) {
    if (sekonde < 10) {
        sekonde = `0${sekonde}`
        return sekonde;
    } else {
        return sekonde;
    }
}