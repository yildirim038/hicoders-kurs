/**
 * ekran basligini olusturur (header)
 */
function createStartHeader() {
    return `<h1><b> Ismetin Müsteri Listesi</b></h1>
    <tr>
        <th>Adi</th>
    </tr>`
}
/**
 * Müsteri listesini olusturur.
 * @param {*} pList 
 */
function createStartList(pList) {
    return pList.map((p, index) => `<tr>
        <td>${p.name}</td>
        <td><button id="${index}" class="btn btn-primary se">Seç</button></td>
    </tr>`).join("")
}
/**
 * Birlestirme Fonsiyonu
 * @param {*} pList 
 */
function createStartView(pList) {
    return ` <table class="table table-striped">
        ${createStartHeader()}
            ${createStartList(pList)}
    </table>
    `
}