let body = document.querySelector("body");
let keyName = document.querySelector(".key");
let keyCode = document.querySelector(".key-code");

body.addEventListener("keydown", function (e) {
    keyCode.innerHTML = ""
    keyName.innerHTML = ""
    let keyMessage = `<h1>you pressed <span class="green">${e.key}</span></h1>`
    keyName.innerHTML = keyMessage;
    let keyCodeMessage = `<h1><span class="green">${e.keyCode}</span></h1>`
    keyCode.innerHTML = keyCodeMessage;
    console.log(e)
});
