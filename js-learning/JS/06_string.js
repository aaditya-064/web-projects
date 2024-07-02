const name = "Aaditya"
const repoCount = 50

// console.log (name + repoCount + " Value");

console.log (`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String("aaditya-BDU")

console.log(gameName[2]) //to get the single chracter from the string
console.log(gameName.__proto__); //it gives off the curly brackets with something hidden inside it
console.log(gameName.toUpperCase()); //makes all the character UPPERCASE
console.log(gameName.charAt(4)); //to get to know the position of the character
console.log(gameName.indexOf("t")); //to know what position is the character in  

const newString =gameName.substring(0, 4);
console.log(newString); //starts from the zero of the string and prints upto the n-1 point

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
1

