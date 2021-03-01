/**
 * Ekran ilk acildiginda gelecek fonksiyon
 */
function refreshUI(pList) {
    getLocal(pList[0].name)
}
/**
 * adresleri ekrana yansitan fonksiyon
 * @param {*} pList 
 * @param {*} id 
 * @param {*} nummer 
 */
function addressUI(pList, id, nummer) {
    addressElement.innerHTML = createListAdress(pList, id, nummer)
}
/**
 * Temilenecek ksililerin adlarini gösteren fonksiyon
 * @param {*} pList 
 * @param {*} id 
 */
function listUI(pList, id) {
    let list = getLocal(pList[0].name)
    listElement.innerHTML = createListView(list, id)

}
/**
 * tiklama islemlerin yer aldigi fonksiyon
 * @param {*} pEvent 
 */
function getCleanerList(pEvent) {
    if (pEvent.target.className === "btn btn-primary se") {
        let index = parseInt(pEvent.target.id);
        listUI(customerList, index);
        listElement.addEventListener("click", getAddressList)

        function getAddressList(pEvent) {
            if (pEvent.target.className === "btn btn-primary s") {
                let nummer = parseInt(pEvent.target.id);
                addressUI(customerList, index, nummer);
                listElement.addEventListener("click", cleaning)

                function cleaning(pEvent) {
                    if (pEvent.target.id === "okey") {
                        cleaningPerson(customerList, index, nummer)
                        opaque()
                        saveLocal(customerList, customerList[0].name)
                    }

                }
            }
        }
    }
}
/**
 * renk degisimini saglayan fonsiyon
 */
function opaque() {
    for (let index = 0; index < customerList.length; index++) {
        const element = customerList[index];
        for (let nummer = 0; nummer < element.personToClean.length; nummer++) {
            const event = element.personToClean[nummer];
            if (event.cleaner === true) {
                document.querySelector(`#row${nummer}`).style["color"] = "white";
            }
        }
    }
}
/**
 * Tamam butonunun islemini anlatan fonsiyon
 * @param {*} pList 
 * @param {*} pIndex 
 * @param {*} pId 
 */
function cleaningPerson(pList, pIndex, pId) {
    let list = getLocal(pList[0].name)
    pList[pIndex].personToClean[pId].cleaner = true;
    addressElement.innerHTML = ""
    listUI(list, pIndex);
}