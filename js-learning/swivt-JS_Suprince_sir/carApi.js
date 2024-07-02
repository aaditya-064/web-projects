const selectCar = document.querySelector("#car-select")
const storeCars = document.querySelector("#cars")

selectCar.addEventListener("change", (e)=>{
    // console.log("selection changed")
    // carChanged(e.target.value);
    
})

fetch("https://freetestapi.com/api/v1/cars").then(function(response){
    response.json().then(function(jsonResponse){
        const carsName = jsonResponse
        // console.log(carsName)

        
        for(let car of carsName){
            for(let i = 0; i<carsName.length; i++){
                const brandName = carsName[i].make
                // console.log(brandName)
                const carOption = document.createElement("option")
                carOption.innerHTML = brandName;
                carOption.value = brandName;
                selectCar.appendChild(carOption)
            }
        }
    })
})

// carChanged((carBrand)=>{
//     fetch()
// })

