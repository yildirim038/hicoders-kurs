function findSeason(season, desiredSeason) {
    return desiredSeason === season;
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