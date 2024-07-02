const inputValues = document.querySelectorAll("[data-value]");
const outputField = document.querySelector("#result");
const equalTo = document.querySelector("#equal");
const allClear = document.querySelector("#all_clear");
const clearButton = document.querySelector("#clear");


const arr = []
const operators = ["%", "+", "-", "*", "/"]

inputValues.forEach(item => {
    // console.log(item.getAttribute('data-value'))
    item.addEventListener("click", () =>{
        const element = item.getAttribute("data-value")
        if(operators.includes(arr[arr.length -1]) && operators.includes(item.getAttribute('data-value'))){
            return;
        }
        const addedElements = arr.push(element)
        // console.log(addedElements)
        const joinedElement = arr.join("")
        outputField.innerHTML= joinedElement;
        // console.log(joinedElement)
        // console.log(arr)
    })
})

equalTo.addEventListener("click", () =>{
    if(operators.includes(arr[arr.length-1])){
        arr.pop();
        // console.log("isw ")
    }
    calculate();
})



clearButton.addEventListener("click", () =>{
    arr.pop()
    outputField.innerHTML = arr.join("") 
    // console.log(arr.join())
})

allClear.addEventListener("click", ()=>{
    arr.splice(0,arr.length)
    // console.log(arr.splice(arr.length));
    outputField.innerHTML = "0"
    // console.log('hll')
})



function calculate(){
    const val = arr.join('')
    const evaluatedResult = eval(val)
    outputField.innerHTML= evaluatedResult
}


