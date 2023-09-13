let input = document.getElementById("todoInput");
let addButton = document.getElementById("addTodo");
let list = document.getElementById("todoList")
let inputValue = "";

input.addEventListener("keyup", (eventObj) => {
    inputValue = eventObj.target.value;
    if (eventObj.keyword == 13) {
        list.innerHTML += '<li> ${item} </li>'
    }
    // console.log('return ' + inputValue);
    return inputValue;
})

addButton.addEventListener('click', () => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputValue} <input type = "checkbox">`;
    list.appendChild(listItem);
})

