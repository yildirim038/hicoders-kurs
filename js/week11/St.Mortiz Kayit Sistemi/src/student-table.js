/**
 * Ekranin Sag tarafini olusturan fonksiyonlar
 */
function creatTabloHeader() {
    return ` <tr>
    <th scope="col">Adi</th>
    <th scope="col">Soyadi</th>
    <th scope="col">Yasi</th>
</tr>`;
}

function creatTabloBody(pList) {
    return pList.map((p, index) => ` <tr>
    <td>${p.name}</td>
    <td>${p.surname}</td>
    <td>${p.age}</td>
    <td><button  id="${index}" type="button" class="btn btn-secondary">Sil</button></td>
</tr>`).join("")
}

function creatTotalStudent() {
    return `            <div id="toplam">
Toplam Ögrenci Sayisi:${ogrenciBilgileri.length}
</div>`
}

function creatList(pList) {
    return `<table class="table">
       ${creatTabloHeader()}${creatTabloBody(pList)}
</table> ${creatTotalStudent()}`
}