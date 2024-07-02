const students= [
    {
        name: "hello",
        age: 30,
        salary: 15000,
    },
    {
        name: "world",
        age: 33,
        salary: 105000,
    },
    {
        name: "universe",
        age: 40,
        salary: 1005000,
    },
    {
        name: "sakfhsadf",
        age: 50,
        salary: 150022,
    }
]

const list = []
const filteringArray = students.forEach(student => {
    if(student.age>= 33){
        list.push(student);
    }
});
// console.log(list);


// const identity = []
// for (let names of students){
//     console.log(students[]);
//     // identity.push(studentsName);
// }
// // console.log(studentsName)


const identity=[]
for (let i=0; i < students.length; i ++){
    identity.push(students[i].name)
}

console.log(identity)



// const filterArray = students.filter(function(students){
//     // return student.age>= 33;
//     if(students.age >= 33){
//         return students
//     }
// ;})


// const filteredArray =students.filter(students=> students.age>=33)
const nameArray =students.filter(students=> students.name)


const filteredArray = []
for (let student of students){
    const temp = {
        name: student.name,
        salary: student.salary
    }
    filteredArray.push(temp)
} 

console.log(filteredArray)


// other way

const filterArrayMap = students.map(student =>{ 
    const studentName = {
        name: student.name,
    }
    // filterArrayMap.push(studentName)
    return studentName
})
console.log(filterArrayMap)