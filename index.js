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
}