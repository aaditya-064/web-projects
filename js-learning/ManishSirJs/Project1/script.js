class Person {
  constructor(name1, age) {
    this.name1 = name1;
    this.age = age;
  }
  getDetails() {
    console.log(`${this.name1}, this is name`);
    console.log(`${this.age}, this is age`);
  }
}

class Student extends Person {
  constructor(name1, age, studentId) {
    super(name1, age);
    this.studentId = studentId;
  }
  getPrintedData() {
    console.log(`${this.name1}, this is name`);
    console.log(`${this.age}, this is age`);
    console.log(`${this.studentId}, this is studentId`);
  }
}

const personParent = new Person("Ram Sharma", "13");
const studentChild = new Student("Hari Bol", "12", "nh77470");
const studentChild1 = new Student("Geeta", "20", "55003");
personParent.getDetails();
studentChild.getPrintedData();
studentChild1.getPrintedData();
