/**
 * Header
 */
function createListHeader() {
    return ` <h3>Temizlenecek Yer Sahipleri</h3>
    <tr>
        <th>Adi-Soyadi</th>
    </tr>`;
}
/**
 * Liste olusturan fonksiyon
 * @param {*} pList 
 * @param {*} id 
 */
function createListBody(pList, id) {
    return pList[id].personToClean.map((p, index) => ` 
<tr>
  <td id="row${index}">${p.name}</td>
  <td><button  type="button" class="btn btn-primary s" id="0${index}">Adresleri Listele</button></td>
  <td><button id="okey" type="button" class="btn btn-primary">Tamamlandi</button></td>
</tr>
    `).join("");
}
/**
 * Adresi olusturan fonksiyon
 * @param {*} pList 
 * @param {*} id 
 * @param {*} nummer 
 */
function createListAdress(pList, id, nummer) {
    return pList[id].personToClean[nummer].addresses.map((p) =>
        `<tr><td>${p}</td></tr>`).join("");
}
/**
 * Body kismini birlestiran fonksiyon
 * @param {*} pList 
 * @param {*} id 
 */
function createListView(pList, id) {
    return `<table class="table table-striped">
    ${createListHeader()}
    ${ createListBody(pList,id)}
    </table>
    
    `;
}