function merhabaFonksiyonu() {
    console.log("node'dan merhaba")
}

function guleguleFonksiyonu() {
    console.log("node'dan gülegüle")
}

module.export = {
    merhaba: merhabaFonksiyonu(),
    gulegule: guleguleFonksiyonu()
}