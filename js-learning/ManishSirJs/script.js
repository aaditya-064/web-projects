function Car(name) {
  this.name = name;
}
//drains is a variable
//without using prototype the datas can't be passed
//for example
Car.getCarName = function () {
  console.log(`${this.name}, this is not a valid way`);
}; // this kinda function brings error

Car.prototype.drains = function () {
  console.log(`${this.name} sucks my Money`);
};

Car.prototype.getName = function () {
  console.log(`${this.name} is my favourtie one`);
};
const carBrand = new Car("BMW");
carBrand.drains();
carBrand.getName();
// carBrand.getCarName(); //this brings error

const arr = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
const modifyArray = arr.map((i) => {
  if (i === "four") {
    return "four_hello";
  }
  return i;
});

console.log(modifyArray);

class Parent {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(`${this.name}, this is from Parent`);
  }
}

class Child extends Parent {
  constructor(name) {
    super(name);
  }
  getNameChild() {
    console.log(`${this.name}, this is from Child`);
  }
}

const newName = new Child("Ram Sharma");
newName.getName();
newName.getNameChild();
