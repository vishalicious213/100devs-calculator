let buttons = document.getElementById("buttons")
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let operations = ["/", "x", "+", "-", "."]

let num1 = null
let total = null
let operation = null

// ⬇️ EVENT LISTENERS ⬇️

buttons.addEventListener("click", function(e) {
    if (numbers.includes(e.target.id)) {
        getNumber(e.target.id)
    }
    
    if (operations.includes(e.target.id)) {
        getOperation(e.target.id)
    }

    if (e.target.id === "=") {
        calculate(total, operation, num1)
    }
})

// ⬇️ EVENT HANDLERS ⬇️

function getNumber(num) {
    if (num1 === null) {
        num1 = num
    } else {
        num1 += num
    }

    console.log(num1)
}

function getOperation(op) {
    if (num1 !== null) {
        total = num1
        num1 = null
    }

    if (total !== null) {
        operation = op
    }
}

function calculate(total, op, num) {
    let num1 = Number(total)
    let num2 = Number(num)

    if (op === "+") {
        console.log(num1 + num2)
    }

    if (op === "-") {
        console.log(num1 - num2)
    }

    if (op === "*") {
        console.log(num1 * num2)
    }

    if (op === "/") {
        console.log(num1 / num2)
    }
}

// ⬇️ RENDER APP ⬇️


// Get num1
// Get operator
// Display total when = is clicked
// Handle negative numbers