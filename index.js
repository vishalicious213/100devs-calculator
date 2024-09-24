let display = document.getElementById("display")
let buttons = document.getElementById("buttons")
let clearBtn = document.getElementById("clear-btn")

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
    if (char === "clear") {
        clearDisplay()
    } else if (char !== "=") {
        if (char === "x") {
            char = "*"
        }
        display.value += char
    }
}

function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch(error) {
        display.value = "Error"
    }
}

function clearDisplay() {
    display.value = ""
}