function createListHeader() {
    return ` <h3>Temizlenecek Yer Sahipleri</h3>
    <tr>
        <th>Adi-Soyadi</th>
    </tr>`;
}

function createListBody(pList, id) {
    return pList[id].personToClean.map((p, index) => ` 
<tr>
  <td id="row${index}">${p.name}</td>
  <td><button  type="button" class="btn btn-primary s" id="0${index}">Adresleri Listele</button></td>
  <td><button id="okey" type="button" class="btn btn-primary">Tamamlandi</button></td>
</tr>
    `).join("");
}

function createListAdress(pList, id, nummer) {
    return pList[id].personToClean[nummer].addresses.map((p) =>
        `<tr><td>${p}</td></tr>`).join("");
}

function crearteListAddressHeader() {
    return `<caption><strong>Adres Listesi</strong></caption></table>`
}

function createListView(pList, id) {
    return `<table class="table table-striped">
    ${createListHeader()}
    ${ createListBody(pList,id)}
    </table>
    
    `;
}