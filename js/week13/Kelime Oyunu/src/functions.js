function parcalama(pKelime) {
    return pKelime.split(",")
}

function sayi(sayi) {
    return sayi;
}

function karistir(pDizi) {
    let control = pDizi.length,
        temp, index;
    while (control > 0) {
        index = Math.floor(Math.random() * control);

        control--;
        temp = pDizi[control];
        pDizi[control] = pDizi[index];
        pDizi[index] = temp;
    }
    return pDizi;
}

function clickButton(pEvent) {
    if (pEvent.target.id === "test") {
        if (getDropCountainerValues() === orjinalKelime) {
            alert("Tebrikler Dogru Kelime")
        } else {
            alert("Yanlis Cevap. Lütfen Tekrar Deneyin...")
        }
    }
    if (pEvent.target.id === "new") {
        location.reload()
    }
}

function createDrag(pIndex) {
    const dragItem = document.createElement("div");
    dragItem.setAttribute("draggable", true);
    const element = kelimeHeceleri[pIndex]
    dragItem.innerHTML = element;
    dragCounteiner.appendChild(dragItem);
    dragItem.addEventListener("dragstart", function (pEvent) {
        dragItem.classList.add("dragging")
        pEvent.dataTransfer.effectAllowed = "move"
        pEvent.dataTransfer.setData("text/plain", element)
    })
}

function createDrop() {
    const dropItem = document.createElement("div");
    dropCounteiner.appendChild(dropItem);
    dropItem.addEventListener("dragenter", (pEvent) => {
        dropItem.classList.add("drag-select");
        pEvent.dataTransfer.dropEffect = "move";
    })
    dropItem.addEventListener("dragover", (pEvent) => {
        pEvent.preventDefault();
    })
    dropItem.addEventListener("drop", (pEvent) => {
        dropItem.classList.remove("drag-select");
        const character = pEvent.dataTransfer.getData("text/plain");
        dropItem.innerHTML = character;
    })
}

function getDropCountainerValues() {
    const dropElements = Array.from(dropCounteiner.querySelectorAll("div"));
    const dropValues = [];
    dropElements.forEach((dropElement) => {
        dropValues.push(dropElement.innerText.trim())
    })
    return dropValues.join("")
}