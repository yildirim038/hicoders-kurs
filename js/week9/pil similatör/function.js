function fillBattery() {
    batteryStatusPlus();
    chenchColorBattery();
    chenchBatteryRate();
}

function emptyBattery() {
    batterxStatusMinus();
    chenchColorBattery();
    chenchBatteryRate();
}

function batteryStatusPlus() {
    if (batteryStatus < 3) {
        batteryStatus++;
    }
}

function batterxStatusMinus() {
    if (batteryStatus > 0) {
        batteryStatus--;
    }
}

function chenchColorBattery() {
    if (batteryStatus === 0) {
        batteryBoxOne.style["background-color"] = "white";
        batteryBoxTwo.style["background-color"] = "white";
        batteryBoxThree.style["background-color"] = "white";
    } else if (batteryStatus === 1) {
        batteryBoxOne.style["background-color"] = "red";
        batteryBoxTwo.style["background-color"] = "white";
        batteryBoxThree.style["background-color"] = "white";
    } else if (batteryStatus === 2) {
        batteryBoxOne.style["background-color"] = "orange";
        batteryBoxTwo.style["background-color"] = "orange";
        batteryBoxThree.style["background-color"] = "white";
    } else if (batteryStatus === 3) {
        batteryBoxOne.style["background-color"] = "green";
        batteryBoxTwo.style["background-color"] = "green";
        batteryBoxThree.style["background-color"] = "green";
    }

}

function chenchBatteryRate() {
    if (batteryStatus === 0) {
        batteryRate.innerHTML = "Doluluk Orani: %0";
    } else if (batteryStatus === 1) {
        batteryRate.innerHTML = "Doluluk Orani: %33";
    } else if (batteryStatus === 2) {
        batteryRate.innerHTML = "Doluluk Orani: %66";
    } else if (batteryStatus === 3) {
        batteryRate.innerHTML = "Doluluk Orani: %100";
    }
}