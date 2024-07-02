const currentForm = document.querySelector("#input_form");
const taskField = document.querySelector("#input_box");
const addButton = document.querySelector("#addTask");
const resultArea = document.querySelector("#output");

const list=[];
console.log(list.length)
let counter = 0;

currentForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    counter ++;
    const elements = {
        id: list.length + counter,
        title: taskField.value,
        date: new Date(),
    }
    addTask(elements);
    // list.unshift(elements);
    taskField.value = " ";
    console.log(elements.id)

})

function addTask(val){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("data-box", val.id);

    newDiv.innerHTML= `
    <p id= "taskTitle"> Task: ${val.title} </p>
    <p> Date: ${val.date} </p>
    <input type="checkbox" />
    <button onclick="editTask(${val.id})" class="btn_edit">Edit</button>
    <button onclick="deleteTask(${val.id})" class="btn_delete">Delete</button>
    `
    resultArea.appendChild(newDiv);
    // deleteTask(id);
}

function deleteTask(id){
    list.splice(id, 1);
    const selectBox = document.querySelector(`[data-box= '${id}']`)
    selectBox.remove();
}

function editTask(id){
    const replace = prompt("Enter the thing to replace")
    // console.log(replace)
    list.splice(id, 1, replace);
    const selectBox = document.querySelector(`[data-box='${id}']`)
    const taskEdit = selectBox.querySelector("#taskTitle")
    console.log(selectBox)
    // console.log(taskEdit)
    taskEdit.innerHTML = `Task: ${replace}`;

}

