let buttons = document.getElementById("buttons")
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let operations = ["/", "x", "+", "-", "=", "."]

let num1 = null
let num2 = null
let total = null

// ⬇️ EVENT LISTENERS ⬇️

buttons.addEventListener("click", function(e) {
    if (numbers.includes(e.target.id)) {
        getNumber(e.target.id)
    }
    
    if (operations.includes(e.target.id)) {
        getOperation(e.target.id)
    }
})

// ⬇️ EVENT HANDLERS ⬇️

function getNumber(num) {
    console.log(num)
}

function getOperation(op) {
    console.log(op)
}

// ⬇️ RENDER APP ⬇️


// Get num1
// Get operator
// Get num2
// Display total when = is clicked
// Handle negative numbers