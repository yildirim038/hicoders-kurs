let batteryStatus = 0;
const plusElement = document.querySelector("#plus");
const minusElement = document.querySelector("#minus");
const batteryBoxOne = document.querySelector("#battery-one-box");
const batteryBoxTwo = document.querySelector("#battery-two-box");
const batteryBoxThree = document.querySelector("#battery-three-box");
const batteryRate = document.querySelector("#battery-rate");

plusElement.addEventListener("click", fillBattery);
minusElement.addEventListener("click", emptyBattery);