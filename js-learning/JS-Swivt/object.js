// const obj = {
//     nepal:"kathmandu",
//     china:"beijing",
//     france:"paris",
//     england:"London",
//     Nepal:"New Delhi"
// }

// function findCapital(country){
//     return obj[country]
// }

// const capitalOfNepal= obj['nepal'];
// console.log(capitalOfNepal);



const currentForm = document.getElementById("main_form");
const inputField = document.getElementById("carName")
const result = document.querySelector(".result")


const countryCars ={
    germany: "BMW",
    france: "bugatti",
    nepal: "404", 
    USA: "ford",
}

currentForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const cars = countryCars[inputField.value];    
        if (cars){
            result.innerHTML= cars;         
        }
        else{
            result.innerHTML= "cars not found";
        }


})


// function countryMadeCars(cars){
//     const gaadi = countryCars[cars]
//     console.log(gaadi);
//     if (!gaadi) return false;
//     return gaadi;
// }

// const carGermany =  countryMadeCars(['germany'])
// const carIndia =  countryMadeCars(['india'])
// console.table([carGermany, carIndia]);


