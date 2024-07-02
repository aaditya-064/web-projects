const score = 199
const scoreValue = 100.44

const isLoggedIn = true
const outsideTemp = null

let userEmail;
// let userEmail = undefined;

const id = Symbol('696969')
const anotherId = Symbol("696969")

// console.log(id != anotherId);  //true
// console.log(id == anotherId); //false
// console.log(id)
// console.log(anotherId)

//for the big integer, put an n at the last of the number
const bigInteger = 696969696969696969n;




// Array, Objects, Functions

//Array
const forbes = ["aaditya", "elon", "jeff"]

//object
let objectType = {
    name: "Aaditya",
    age: "16",
}


//function
const myFunction = function (){
    console.log("hello world");
}


// stack (PRIMITIVE) and heap (NON-PRIMITIVE)

let myCompanyName = "buddhaDanaUdhyog"
let anotherName = myCompanyName

anotherName = "BimaShrestha"

console.log(myCompanyName);
console.log(anotherName);


let userOne = {
    email: "user@facebook.com",
    bankId: "user@abl"
}

let userTwo = userOne

userTwo.email = "aaditya@facebook.com"
// userTwo = {
//     email: "aaditya@facebookk.com",
//     bankId: "aaditya@ownBank"
// }

console.log(userOne.email);
console.log(userTwo.email);

const email= Symbol("hello World");
const anotherEmail = Symbol("hello World");

console.log(email === anotherEmail);
console.log(email != anotherEmail);