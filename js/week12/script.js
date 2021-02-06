const buttonElement = document.querySelector("#buttons")

buttonElement.addEventListener("click", function (pEvent) {
    if (pEvent.target.id === "back") {
        myFunctionBack();
    } else if (pEvent.target.id === "back-go") {
        myFunctionGoBack();
    } else if (pEvent.target.id === "forward") {
        myFunctionForward();
    } else if (pEvent.target.id === "forward-go") {
        myFunctionGoForward();
    }
})

function myFunctionBack() {
    window.history.back();
}

function myFunctionForward() {
    window.history.forward();
}

function myFunctionGoBack() {
    window.history.go(-2);
}

function myFunctionGoForward() {
    window.history.go(2);
}