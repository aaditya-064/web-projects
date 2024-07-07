// function addInfiniteNumber(a, ...arg) {
//   console.log(arg);
//   console.log("Destructured", ...arg);
// }

// addInfiniteNumber(1, 2, 3, 4, 5, 6, 7);
// addInfiniteNumber(1, 2, 3, 4);
// addInfiniteNumber(1, 2);
// addInfiniteNumber(1);

function currieAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const addNum = currieAdd(5);
const sum = addNum(2)(3);
console.log(sum);

function stringConcat(str1) {
  return function (str2) {
    return function (str3) {
      return str1 + str2 + str3;
    };
  };
}

const inputString = stringConcat("My Name");
const finalString = inputString("\nIs")("\nAaditya Shrestha");
console.log(finalString);

function partialMultiply(x, y) {
  return function (z) {
    return x * y * z;
  };
}
const multiplyBy2And3 = partialMultiply(2, 3);
const result = multiplyBy2And3(4);
console.log(result);

// function calculateDiscount(price, discount, tax) {
//   const discountedPrice = price - price * discount;
//   const finalPrice = discountedPrice + discountedPrice * tax;
//   return finalPrice;
// }

// function partial(fn, ...presentArgs) {
//   return function (...remainingArgs) {
//     return fn(...presentArgs, ...remainingArgs);
//   };
// }

// const calculatePrice = partial(calculateDiscount, 0.1, 0.05);
// const result1 = calculatePrice(100);
// console.log(result1);

const arr = [1, 2, 3, 4, 5, 6, 7];
const sortArr = arr.sort((a, b) => {
  return a - b;
});
const filterArr = arr.filter((item) => {
  if (item > 5) {
    return item;
  }
});
console.log(filterArr);
console.log(sortArr);

const people = [
  { name: "Alice", age: "22" },
  { name: "Eve", age: "16" },
  { name: "Bob", age: "17" },
  { name: "Charlie", age: "19" },
  { name: "David", age: "25" },
];

const filterAge = people.filter((el, i) => {
  if (el.age <= 19) {
    return el;
  }
});
console.log("LESSER THAN OR IS EQUAL TO 19", filterAge);

const findArr = people.find((el) => {
  return el.name == "Eve";
});
console.log(findArr);
