const currentForm = document.querySelector("#main_form")
const quantity = document.querySelector("#quantity")
const rate = document.querySelector("#rate")
const button = document.querySelector("#btn")
const outputBox =document.querySelector("#result")

// currentForm.addEventListener("submit", (e) =>{
//     e.preventDefault();
//     const a = quantity.value
//     const b = rate.value
//     amount = a * b;
//     window.location = "bill.html?result=" + result;
// })

function calculateBill() {
    const quantity = parseFloat(document.getElementById("quantity").value);
    const rate = parseFloat(document.getElementById("rate").value);
    
    const result = quantity * rate;

    // Redirect to bill.html with the result as a URL parameter
    window.location = "bill.html?result=" + result;
}
