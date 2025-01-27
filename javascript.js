//functions
function add(x,y) {
    return x+y
}
function subtract(x,y) {
    return x-y
}
function multiple(x,y) {
    return x*y
}
function divide(x,y) {
    return x/y
}
function operator(x,y,operator) {
    return "to be complete"
    //could use if statements for operator
}
//variables
let display = 0
const html_display = document.getElementById("display")
//non functions
//gets each number and output to display
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener(`click`, () => {
        display = 10 * display + Number(number.textContent)
        html_display.textContent = display
    })
})

