
const dogSelect = document.querySelector("#dog-select");
const dogContainer = document.querySelector("#dogs")

dogSelect.addEventListener("change", (e) =>{
    callDogApi(e.target.value)
})

fetch("https://dog.ceo/api/breeds/list/all").then((rawResponse)=>{
        rawResponse.json().then((jsonResponds)=>{
            const breedsName = jsonResponds.message

            console.log(jsonResponds)   
            
            // const breedArray = []
            for(let breed in breedsName){
                // console.log(breed);
                const breedOption = document.createElement("option") 
                breedOption.innerHTML = breed;
                breedOption.value = breed;
                dogSelect.appendChild(breedOption)
            }
        })
})

function callDogApi(dogBreed){
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images`).then((response=>{
        response.json().then((jsonResponse)=>{
            dogContainer.replaceChildren()
            const dogImages = jsonResponse.message
            for(let dogImage of dogImages){
                const dogImageTag = document.createElement("img")
                dogImageTag.src= dogImage
                dogContainer.appendChild(dogImageTag)
            }
        })
    }))
    }