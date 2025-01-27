//functions
function add(x,y) {
    console.log("dipslay is" + display)
    console.log("x is"+x)
    console.log("y is"+y)

    return x+y
}
function subtract(x,y) {
    return x-y
}
function multiply(x,y) {
    return x*y
}
function divide(x,y) {
    return x/y
}
//assume string is 30x60
function operation(string) {
    for (let i =0; i < string.length; i++) {
        if (string[i] === "=") {
            break
        }
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
    switch(thing_todo) {
        case "+":
            temp_answer = add(Number(first),Number(second))
            displayCalculator(temp_answer)
            console.log("i thought value was" + value)
            console.log("but temp_answer is "+temp_answer+'and shall be type'+typeof temp_answer)
            value = temp_answer
            console.log(value)
            break
        case "-":
            temp_answer = subtract(Number(first),Number(second))
            displayCalculator(temp_answer)
            value += temp_answer.toString
            break
        case "x":
            temp_answer = multiply(Number(first),Number(second))
            displayCalculator(temp_answer)
            value += temp_answer.toString
            break
        case "÷":
            temp_answer = divide(Number(first),Number(second))
            displayCalculator(temp_answer)
            value += temp_answer.toString
            break
        default:
            console.log("error")

    }
    
}
function displayCalculator(number) {
    html_display.textContent = number
}
//variables
let display = 0
let value = "" 
let first = 0
let second = 0
let temp_answer = 0
let thing_todo =""//bad naming but this is the operator
const opps = ["+", "-", "x", "÷"]
let html_display = document.getElementById("display")
//Event listeners
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
            console.log("operation begining")
            console.log(value)
            operation(value)
        }
        value += operator.textContent
        display = 0 //i'm not sure if this is right, will fix later
        html_display.textContent = display
        if (opps.some(opp => value.includes(opp))) { 
        displayCalculator(temp_answer)
        }
        console.log(value)
    })
})

const commence = document.getElementById("commence")
commence.addEventListener(`click`, () => {
    operation(value)
}) 