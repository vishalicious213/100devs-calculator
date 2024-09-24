let display = document.getElementById("display")
let buttons = document.getElementById("buttons")

// ⬇️ EVENT LISTENERS ⬇️

buttons.addEventListener("click", function(e) {
    console.log(e)
    addToDisplay(e.target.textContent)
})

// ⬇️ EVENT HANDLERS ⬇️

function addToDisplay(char) {
    display.value += char
}