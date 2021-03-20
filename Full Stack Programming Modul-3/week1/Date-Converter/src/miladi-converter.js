/**
 *  Hicri Tarihten miladi tarihe gecme foksiyonu.
 * @param {*} pDay 
 * @param {*} pMount 
 * @param {*} pYear 
 * @returns 
 */
function writeMiladi(pDay, pMount, pYear) {
    let date = new Date(`${pYear}-${pMount}-${pDay}`);
    date.setDate(date.getDate() + (211337 + ((1442 - pYear) * 10.9)));
    const newYear = new Intl.DateTimeFormat('tr', {
        year: 'numeric'
    }).format(date)
    const newMonat = new Intl.DateTimeFormat('tr', {
        month: 'long'
    }).format(date)
    const newDay = new Intl.DateTimeFormat('tr', {
        day: '2-digit'
    }).format(date)
    return `Miladi ${newDay}-${newMonat}-${newYear}`;
}

module.exports = writeMiladi