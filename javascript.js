//functions
//coding based function
function displayCalculator(numbers) {
    html_display.textContent = numbers.toString().slice(0, numbers.length-1)
}
function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }
function checkOperators(string) {
    for (let i=0; i<string.length-2;i++) {
        if (string[i] === "x" || string[i] === "+" || string[i] === "-" || string[i] === "÷") {
            return true
        }
    }
    return false
}
function add(x,y) {
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
    for (let i =0; i < string.length - 1; i++) {
        
        if (string[i] === "x" || string[i] === "+" || string[i] === "-" || string[i] === "÷") {
            firstOperation = string[i]
            for (let k=i+1; k < string.length -1; k++) {
                second = 10 * second + Number(string[k])
            }
            break
        } else {
            
            if(mulitpleOperation === false) {
                first = 10 * first + Number(string[i])
            }
       }
        
    }
    switch(firstOperation) {
        case "+":
            temp_answer = add(Number(first),Number(second))
            displayCalculator(temp_answer)
            first=temp_answer
            value= temp_answer
            second=0
            mulitpleOperation = true
            break
        case "-":
            temp_answer = subtract(Number(first),Number(second))
            displayCalculator(temp_answer)
            first=temp_answer
            value= temp_answer
            second=0
            mulitpleOperation = true
            break
        case "x":
            temp_answer = multiply(Number(first),Number(second))
            displayCalculator(temp_answer)
            first=temp_answer
            value= temp_answer
            second=0
            mulitpleOperation = true
            break
        case "÷":
            if (second === 0) {
                temp_answer = "TRY again :("
            } else {
            temp_answer = divide(Number(first),Number(second))
            }
            displayCalculator(temp_answer)
            first=temp_answer
            value= temp_answer
            second=0
            mulitpleOperation = true
            break
        default:
            console.log("error")

    }
    value += lastOperation
    
}

//variables
    //display variables
    let display = 0
    let value = "" 
//operation variables
    let first = 0
    let second = 0
    let temp_answer = 0
    let mulitpleOperation = false

//operation variables
    let lastOperation =""
    let firstOperation = ""
    //let secondOperation = ""
   //not a variable we just copy and past:  value[value.length -1]    
const opps = ["+", "-", "x", "÷", "="]
let html_display = document.getElementById("display")
//Event listeners
//gets each number and output to display
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener(`click`, () => {
        if (display === "CLEARED!") {
            display = 0
        }
        display = 10 * display + Number(number.textContent)
        display = display.toString()
        value += number.textContent
        html_display.textContent = display
    })
})

//gets operators and assign them to variable
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener(`click`, () => {
        display = 0 
        html_display.textContent = display
        if (value[value.length -1] === "x" || value[value.length -1] === "+" || value[value.length -1] === "-" || value[value.length -1] === "÷") {
            value = value.slice(0,-1)
        }
        value+= operator.textContent
        lastOperation = value[value.length -1]
        if (isNumeric(value[value.length -2]) && checkOperators(value) === true) {
            operation(value)
            
            if (Number(value.slice(0, value.length-1)) % 1 === 0 ) {
                displayCalculator(value)
            }
            else {
                html_display.textContent = Number(value.slice(0, value.length-1)).toFixed(5)
            } 
            
        }

    })
})

const commence = document.getElementById("commence")
commence.addEventListener(`click`, () => {
    if (value[value.length -1] !== "=" && value.length >= 3 ) {
        value += "z"
        operation(value)
        if (Number(value.slice(0, value.length-1)) % 1 === 0 ) {
            displayCalculator(value)
        }
        else {
            html_display.textContent = Number(value.slice(0, value.length-1)).toFixed(5)
        } 
    }
}) 
const clear = document.getElementById("clear")
clear.addEventListener('click', () => {
    value = ""
    display = "CLEARED!"
    displayCalculator(display)
    first = 0
    second = 0
    temp_answer = 0
    mulitpleOperation = false
    lastOperation =""
    firstOperation = ""
})
