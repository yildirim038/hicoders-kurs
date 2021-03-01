/**
 *localStorage Kayit  fonsiyonu
 * @param {} pList 
 * @param {*} pId 
 */
function saveLocal(pList, pId) {
    stringifyPersonList = JSON.stringify(pList);
    localStorage.setItem(pId, stringifyPersonList);
}
/**
 * localStorage geri ala fonsiyonu
 * @param {*} pId 
 */
function getLocal(pId) {
    let database = localStorage.getItem(pId);
    if (database === null) {
        listElement.innerHTML = createStartView(customerList)
        saveLocal(customerList, customerList[0].name)
    } else {
        let personList = JSON.parse(database)
        let newList = Object.values(personList)
        listElement.innerHTML = createStartView(newList)
        return newList;
    }
}