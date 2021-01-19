/** 
 * Sol tarafta tablonun baslik kismi 
 * */
function creatTableHeader() {
    return `<tr>
        <th>Name</th>
        <th>Calori</th>
        <th>Exp. Date</th>
        <th>Price</th>
        <th>Foto</th>
        <th></th>
        </tr>`;
}
/** 
 * Sol taraftaki tablonun icerigi
 */
function creatSellList() {
    let object = ''
    for (index = 0; index < productList.length; index++) {
        object += '<tr>';
        object += '<td>' + productList[index].productName + '</td>';
        object += '<td>' + productList[index].totalCalories + '</td>';
        object += '<td>' + productList[index].expireDate + '</td>';
        object += '<td>' + productList[index].price + '</td>';
        object += '<td>' + `<img src="${productList[index].productImage}" alt="foto">` + '</td > ';
        object += '<td>' + `<button type="button" class="btn btn-primary" id="${index}">Buy</button>` + '</td>';
        object += '</tr>';
    }
    return object;
}
/**
 * Yukardaki iki fonksiyonu bir table icresinde birlestirilmesi.
 */
function creatSaleTable() {
    return `<table> 
    ${creatTableHeader()} ${creatSellList()}
    </table>`;
}
/**
 * Sag taraftaki satin alinan ürünlerin listesinin olusturulmasi.
 */
function createShoppingCart() {
    let objectBuy = '';
    for (nummer = 0; nummer < saleTableList.length; nummer++) {
        objectBuy += '<tr>';
        objectBuy += '<td>' + saleTableList[nummer].productName + '</td>';
        objectBuy += '<td>' + saleTableList[nummer].price + '</td>';
        objectBuy += '<td>' + `<img src="${saleTableList[nummer].productImage}" alt="foto">` + '</td > ';
        objectBuy += '<td>' + `<button  type="button" class="btn btn-danger" id="${nummer}">Del</button>` + '</td>';
        objectBuy += '</tr>';
    }
    return objectBuy;
}
/**
 * Üsteki fonksiyonun table icrisine yerlestirilmesi.
 */
function creatBoxTable() {
    return `<table> 
    ${createShoppingCart()} 
    </table>`;
}
/**
 * Alisveris Sepetinin ambleminin resimle olusturulmasi.
 */
function createFotoShoppingCart() {
    return ` <div>
    <img src="https://media.istockphoto.com/vectors/fast-shopping-cart-icon-vector-flat-design-best-vector-icon-vector-id1139882981" alt="foto">
</div> `;
}
/**
 * Objeden toplami alinacak fiyatlarin hesaplanacagi sayilarin bir diziye atilma fonsiyonu.
 * @param {*} list 
 */
function priceList(list) {
    return list.map(value => value.price);
}
/**
 * Toplam alma Fonksiyonu
 * @param {*} array 
 */
function sumCalculation(array) {
    let toplam = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        toplam = toplam + element;
    }
    return toplam;
}
/**
 * Satis Toplaminin alinmasi
 */
function createTotal() {
    return `<div>Total: ${sumCalculation(priceList(saleTableList))} Frank</div>`;
}
/**
 * Olusturulan Listelerin HTML ye yansirilmasi.
 * @param {*} pLevel 
 */
function updateUI(pLevel) {
    tableElement.innerHTML = creatSaleTable(pLevel);
    sepetElement.innerHTML = createFotoShoppingCart() + creatBoxTable(pLevel) + createTotal();
}