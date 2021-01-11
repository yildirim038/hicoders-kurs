function fillBattery() {
    if (batteryStatus < 3) {
        batteryStatus++;
    }
    if (batteryStatus === 1) {
        batteryBoxOne.style.background = "red";
        batteryRate.innerHTML = "Doluluk Orani: %33"
    }
    if (batteryStatus === 2) {
        batteryBoxOne.style.background = "orange";
        batteryBoxTwo.style.background = "orange";
        batteryRate.innerHTML = "Doluluk Orani: %66"
    }
    if (batteryStatus === 3) {
        batteryBoxOne.style.background = "green";
        batteryBoxTwo.style.background = "green";
        batteryBoxThree.style.background = "green";
        batteryRate.innerHTML = "Doluluk Orani: %100"
    }
}

function emptyBattery() {
    if (batteryStatus > 0) {
        batteryStatus--;
    }
    if (batteryStatus === 0) {
        batteryBoxOne.style.background = "white";
        batteryBoxTwo.style.background = "white";
        batteryBoxThree.style.background = "white";
        batteryRate.innerHTML = "Doluluk Orani: %0"
    }
    if (batteryStatus === 1) {
        batteryBoxOne.style.background = "red";
        batteryBoxTwo.style.background = "white";
        batteryBoxThree.style.background = "white";
        batteryRate.innerHTML = "Doluluk Orani: %33"
    }
    if (batteryStatus === 2) {
        batteryBoxOne.style.background = "orange";
        batteryBoxTwo.style.background = "orange";
        batteryBoxThree.style.background = "white";
        batteryRate.innerHTML = "Doluluk Orani: %66"
    }
    if (batteryStatus === 3) {
        batteryBoxOne.style.background = "green";
        batteryBoxTwo.style.background = "green";
        batteryBoxThree.style.background = "green";
        batteryRate.innerHTML = "Doluluk Orani: %100"
    }
}