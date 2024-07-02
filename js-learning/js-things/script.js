// class Table {
//     constructor(){
//         this.rows= []
//     }
//     addRow(row) {
//         console.log(row, + 'added' );
//     }

// }

// class Sum {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }
//   addNumber() {
//     // console.log(this.num1 + this.num2)
//   }
// }
// const addTwoNumber = new Sum(1, 2);
// // console.log(addTwoNumber)
// addTwoNumber.addNumber();
// console.log(sumNumber)

//Arithmetic Operations
// class Arithmetic {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }
//   subNumber() {
//     console.log("Addition", this.num1 - this.num2);
//   }
//   multiplyNumber() {
//     console.log("Multiplication", this.num1 * this.num2);
//   }
//   divideNumber() {
//     console.log("Division", this.num1 / this.num2);
//   }
// }

// const twoNumbers = new Arithmetic(5, 0);
// twoNumbers.subNumber();
// twoNumbers.multiplyNumber();
// twoNumbers.divideNumber();

class Parent {
  constructor(name) {
    this.name = name;
  }
  name() {
    console.log(this.name);
  }
}

class Child extends Parent {
  constructor(name) {
    super(name);
  }
  name2() {
    console.log("child");
  }
}

const inheritClass = new Child();
inheritClass.name();
