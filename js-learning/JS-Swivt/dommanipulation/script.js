const currentForm = document.getElementById("main_form");
const inputField = document.querySelectorAll(".inputField");
const submitButton= document.getElementById("btn");
const result = document.querySelector(".result");
const restartButton =document.querySelector(".restart");

currentForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    result.innerHTML="Hello World";
    // result.value =" ";
    restartButton.classList.toggle('hide');
    // document.body.innerHTML= "hello"
})

restartButton.addEventListener("click", () =>{
    inputField.forEach(field => {
        field.value= " ";
    })
    result.innerHTML=" ";
    restartButton.classList.toggle("hide")

})

