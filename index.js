// this solution takes an object-oriented approach

class Calculator {
    constructor(displayID, buttonsID, clearBtnID) {
        this.display = document.getElementById(displayID)
        this.buttons = document.getElementById(buttonsID)
        this.clearBtn = document.getElementById(clearBtnID)
    }
}