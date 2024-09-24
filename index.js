let display = document.getElementById("display")
let buttons = document.getElementById("buttons")

// ⬇️ EVENT LISTENERS ⬇️

buttons.addEventListener("click", function(e) {
    if (e.target.textContent !== "=") {
        addToDisplay(e.target.textContent)
    } else {
        calculate()
    }
})

// ⬇️ EVENT HANDLERS ⬇️

function addToDisplay(char) {
    if (char !== "=") {
        display.value += char
    }
}

function calculate() {
    console.log("calculate")
}