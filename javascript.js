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
//assume string is 30x60
function operation(string) {
    for (let i =0; i < string.length; i++) {
        if (string[i] === "x" || string[i] === "+" || string[i] === "-" || string[i] === "÷") {
            thing_todo = string[i]
            for (let k=i+1; k < string.length; k++) {
                second = 10 * second + Number(string[k])
            }
            break
        } else {
            first = 10 * first + Number(string[i])
        }
    }
    console.log(first + " with operator" + thing_todo +"with"+ second)
    
}
//variables
let display = 0
let value = "" 
let first = 0
let second = 0
let thing_todo =""
const opps = ["+", "-", "X", "÷"]
const html_display = document.getElementById("display")
//non functions
//gets each number and output to display
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener(`click`, () => {
        display = 10 * display + Number(number.textContent)
        display = display.toString()
        value += number.textContent
        html_display.textContent = display
        console.log(value)
    })
})
//gets operators and assign them to variable
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener(`click`, () => {
        if (opps.some(opp => value.includes(opp))) {
            console.log(value)
            operation(value)
            console.log("operation is successful")
        }
        value += operator.textContent
        display = 0 //i'm not sure if this is right, will fix later
        html_display.textContent = display
        console.log(value)
    })
})

const commence = document.getElementById("commence")
//commence.addEventListener(`click`, ())