const outputField = document.querySelector(".outputField")
const outputField1 = document.querySelector(".outputField1")
const outputField2 = document.querySelector(".outputField2")

let date= new Date()
const dayAndDate = date.toString()
const modifiedDate = date.toDateString()
const dateAndTime = date.toLocaleString()

outputField.innerHTML = `Today's Date is ${dayAndDate}` 
outputField1.innerHTML = `Today's Date is ${modifiedDate}` 
outputField2.innerHTML = `Today's Date is ${dateAndTime}` 