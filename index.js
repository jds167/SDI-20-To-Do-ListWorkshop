let input = document.getElementById("todoInput");
let addButton = document.getElementById("addTodo");
let list = document.getElementById("todoList")
let inputValue = "";
let taskCount = 0;

function addTaskItem () {
    input.value = "";
    let listElement = document.createElement("li");
    listElement.id = taskCount++;
    // Put style on CSS instead

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.onchange = toggleTask;

    listElement.appendChild(checkBox);
    listElement.appendChild(document.createTextNode(inputValue));
    list.appendChild(listElement);
}

input.addEventListener("keyup", (eventObj) => {
    inputValue = eventObj.target.value;
    // if (eventObj.keyword == 13) {
    //     list.innerHTML += '<li> ${item} </li>'
    // }
    
})

addButton.addEventListener('click', addTaskItem);

function toggleTask () {
    let task = document.getElementById(this.parentNode.id);
    if (this.checked)
    {
        task.style.textDecoration = 'line-through';
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = deleteTask;
        task.appendChild(deleteButton);

    } else {
        task.style.textDecoration = 'none';
    }
}

function deleteTask() {
    let task = document.getElementById(this.parentNode.id);
    task.remove();
}

