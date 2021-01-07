function findSeason(season, desiredSeason) {
    return desiredSeason === season;
}

function isItBern(city) {
    const location = "BE";
    return location === city;
}

function showEndOfUseDate() {
    let newList = [];
    fishFarm.map((day) => {
        day.entryDate.setDate(day.entryDate.getDate() + day.durationInDays);
        let lastUseDate = new Date(day.entryDate);
        newList.push({
            date: lastUseDate,
            name: day.fishType
        });
    });
    return newList;
}

function doSort(a, b) {
    return a.date.getTime() - b.date.getTime();
};

function chooseKanton(swissRomandaRegion) {
    for (let index = 0; index < swissRomandaRegion.length; index++) {
        const element = swissRomandaRegion[index];
        return element;
    }
}

function isItTicino(city) {
    const location = "TI";
    return location === city;
}

function isItZurich(city) {
    const location = "ZH";
    return location === city;
}