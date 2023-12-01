const log = document.getElementById("log")
const input = document.getElementById("textbox_id")
var Input1


function bpt1() {
console.log(document.getElementById('textbox_id').value)
var Input1= document.getElementById("textbox_id").value + " this is the variable"
console.log(Input1)
document.getElementById("textbox_id").value = ""
}

input.onkeydown = keybordTest1()

input.addEventListener("keypress", keybordTest1)


function keybordTest1(e) {
    log.textContent += ` ${e.code}`
}

