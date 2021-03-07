/**
 * Miladi tarihten hicri tarihe gecme foksiyonu.
 * @param {*} pDay 
 * @param {*} pMount 
 * @param {*} pYear 
 * @returns 
 */
function writeHicri(pDay, pMount, pYear) {
    let date = new Date(`${pYear}-${pMount}-${pDay}`);
    lang = 'tr';
    let options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    return date.toLocaleString(lang + '-u-ca-islamic', options);
}

module.exports = writeHicri