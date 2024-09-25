// this solution takes an object-oriented approach

class Calculator {
    constructor(displayID, buttonsID, clearBtnID) {
        this.display = document.getElementById(displayID)
        this.buttons = document.getElementById(buttonsID)
        this.clearBtn = document.getElementById(clearBtnID)

        this.initialize()
    }

    // ⬇️ EVENT LISTENERS ⬇️
    initialize() {
        this.buttons.addEventListener("click", (e) => this.handleButtonClick(e))
        this.clearBtn.addEventListener("click", () => this.clearDisplay())
    }

    // ⬇️ EVENT HANDLERS ⬇️

    handleButtonClick(e) {
        const char = e.target.textContent

        if (char !== "=") {
            this.addToDisplay(char)
        } else {
            this.calculate()
        }
    }

    // ⬇️ RENDER FUNCTIONS ⬇️

    // Add clicked button's character to display
    addToDisplay(char) {
        if (char === "clear") {
            this.clearDisplay()
        } else if (char !== "=") {
            if (char === "x") {
                char = "*" // change x to * for multiplication
            }
        }

        this.display.value += char
    }

    calculate() {
        try {
            this.display.value = eval(this.display.value)
        }
        catch(error) {
            this.display.value = "Error"
        }
    }

    clearDisplay() {
        this.display.value = ""
    }
}