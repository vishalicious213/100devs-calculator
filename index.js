let buttons = document.getElementById("buttons")
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

buttons.addEventListener("click", function(e) {
    if (numbers.includes(e.target.id)) {
        console.log(e.target.id)
    }
})