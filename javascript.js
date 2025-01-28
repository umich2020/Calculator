//functions
//coding based function
function displayCalculator(number) {
    html_display.textContent = number
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
        if (string[i] === "=") {
            break
        }
        if (string[i] === "x" || string[i] === "+" || string[i] === "-" || string[i] === "÷") {
            firstOperation = string[i]
            for (let k=i+1; k < string.length -1; k++) {
                second = 10 * second + Number(string[k])
                //console.log("second is "+ second)
            }
            break
        } else {
            
            if(mulitpleOperation === false) {
                first = 10 * first + Number(string[i])
            }
       }
        
    }
    console.log("the second value is "+second)
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
            temp_answer = divide(Number(first),Number(second))
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
        console.log(value)
        display = 0 //i'm not sure if this is right, will fix later no it's ocrrect
        html_display.textContent = display
        if (value[value.length -1] === "x" || value[value.length -1] === "+" || value[value.length -1] === "-" || value[value.length -1] === "÷") {
            value = value.slice(0,-1)
        }
        value+= operator.textContent
        
        console.log(value)
        lastOperation = value[value.length -1]
        if (isNumeric(value[value.length -2]) && checkOperators(value) === true) {
            console.log("operation time!")
            operation(value)
            console.log('value after operation is ' +value)
            //console.log('to fixed is' +Number(value[0, value.length-2]).toFixed(5))
            
            if (Number(value.slice(0, value.length-1)) % 1 === 0 ) {
            console.log('whay doesnt this work value is' + Number(value.slice(0, value.length-1)))
            console.log('value after operation is ' +value)
                displayCalculator(value)
            }
            else {
                html_display.textContent = Number(value.slice(0, value.length-1)).toFixed(5)

            } 
            
        }

    })
})
/*
const commence = document.getElementById("commence")
commence.addEventListener(`click`, () => {
    operation(value)
}) 
*/
//set the clear to reset the once operator
