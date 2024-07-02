// const currentForm = document.querySelector("#main_form")
const firstInput = document.querySelector("#firstNumber")
const secondInput = document.querySelector("#secondNumber")
const result = document.querySelector("#result")
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const deleteButton = document.querySelector("#delete");


// function numbers() {
//     const a = parseInt(firstInput.value);
//     const b = parseInt(secondInput.value);
// }

addButton.addEventListener("click", () =>{
    const a = parseInt(firstInput.value);
    const b = parseInt(secondInput.value);

    const sum = a + b;    
    // console.log(sum)
    result.innerHTML = `The addition is ${sum}`;
})

subtractButton.addEventListener("click", () =>{
    const a = parseInt(firstInput.value);
    const b = parseInt(secondInput.value);
    const difference = a - b;    
    // console.log(difference)
    result.innerHTML = `The subtraction is ${difference}`;
})

multiplyButton.addEventListener("click", () =>{
    const a = parseInt(firstInput.value);
    const b = parseInt(secondInput.value);
    const multiply = a * b;    
    // console.log(multiply)
    result.innerHTML = `The multiplication is ${multiply}`;
})

divideButton.addEventListener("click", () =>{
    const a = parseInt(firstInput.value);
    const b = parseInt(secondInput.value);
    const divide = a / b;    
    // console.log(divide)
    result.innerHTML = `The division is ${divide}`;
})

deleteButton.addEventListener("click", () =>{
    firstInput.value = " "
    secondInput.value = " "
    result.innerHTML= " "
})