// function cb(name, callBack) {
//   console.log(name);
//   callBack(name);
// }

// function display(data) {
//   console.log("Hello " + data);
// }

// cb("My Name is Elon Musk", display);

//practical use
function operation(a, b, cb) {
  //   console.log("Main function called");
  const multiplication = a * b;
  //   console.log("Operation is being performed");
  cb(multiplication);
}

function output(data) {
  //   console.log("Call Back function called");
  //   console.log(data);
}

operation(2, 3, output);

//asynchromous
// console.log("hello world, this is the first command");
// console.log("task 1");
// setTimeout(function () {
//   //   console.log("Output comes at the last");
//   console.log("task 2");
// }, 0);

// console.log("task 3");
// console.log("end of the tasks");

//add event listener is also the call back function
function display() {
  console.log("button is clicked");
}

document.querySelector("#clickButton").addEventListener("click", display);

// higher order function
// ForEach(),
// Map(),
// Reduce(),
// Filter(),
// Sort()

//something that comes after dot(.) is method

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(Array(arr));

//for Each
arr.forEach((el, i, data) => {
  //   console.log(data);
});

const newArr = arr.map((el, i, data) => {
  const newData = el * 2;
  return newData;
});

console.log(newArr);

const filterArray = arr.filter((el) => {
  return el < 5;
});
console.log(filterArray);

// the 2 is the starting value of acc as it's default value is 0
// const reducedValue = arr.reduce((acc, el) => acc + el, 2);
// console.log(reducedValue);
const reducedvalue = arr.reduce((acc, el) => {
  if (el % 2 != 0) {
    return acc + el;
  }
  return acc;
});
console.log(reducedvalue);

const sortedArr = arr.sort((b, a) => {
  console.log(a, b);
  return a - b;
});
console.log(sortedArr);

const users = [
  { id: 1, name: "Bob", email: "bobSucks@gmail.com" },
  { id: 2, name: "Mark", email: "markLicks@gmail.com" },
  { id: 3, name: "Jobs", email: "jobsChokes@gmail.com" },
];

function fetchUserData(id, callback) {
  console.log("data is loading..........");
  setTimeout(() => {
    const user = users.find((user) => {
      if (user.id === id) {
        return user;
      }
    });
    // console.clear()
    if (!user) {
      return callback(null);
    }
    callback(user);
  }, 500);
}

function display(user) {
  if (user) {
    console.log(`name: ${user.name}`);
    console.log(`email: ${user.email}`);
  }
  if (!user) {
    console.log("user not found");
  }
}
fetchUserData(2, display);
