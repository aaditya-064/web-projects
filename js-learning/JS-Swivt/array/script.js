const listOfCarsName = [
    "bmw",
    "ferrari",
    "lamborghini",
    "suzuki",
    "isuzu",
    "mahindra",
    "ford",
]

// listOfCarsName.push("mercedes");
// listOfCarsName.unshift("bugatti");
// listOfCarsName.pop();

// listOfCarsName.splice(0, 1)
listOfCarsName.splice(0, 1, "hello")
listOfCarsName.splice(4, 1);
listOfCarsName.splice(3, 1, "tata")

// const index = listOfCarsName.findIndex((i) => i === "mahindra")
const index = listOfCarsName.findIndex(function (item, index){
    if(item === "ford") return index;
})
console.log(index)

console.log(listOfCarsName.findIndex((i) => i === "ford"))




console.log(listOfCarsName)
console.log(listOfCarsName.length)
