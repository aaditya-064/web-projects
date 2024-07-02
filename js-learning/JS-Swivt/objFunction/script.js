const currentForm = document.getElementById("main_form")
const result = document.querySelector(".result")
const inputField = document.getElementById("input_field")

const countryCapital = {
    nepal: "kathmandu",
    india: "delhi",
    china: "beijing",
    france: "paris",
}

currentForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const inputCountry= countryCapital[inputField.value];
    if (!inputCountry){
        result.innerHTML= "country not found"
    }
    else{
        result.innerHTML= inputCountry
    }
})



