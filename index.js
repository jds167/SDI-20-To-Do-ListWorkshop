// document.querySelector('input').addEventListener('input', (eventObj)) =>
// document.querySelector('#list').innerHTML =
// '<li>${eventObj.target.value}</li>'

// document.querySelector('input').addEventListener("keyup")

let input = document.getElementById("todoInput");
let addButton = document.getElementById("addTodo");
let list = document.getElementById("todoList")
let inputValue = "";

input.addEventListener("keyup", (eventObj) => {
    inputValue = eventObj.target.value;
    // console.log('return ' + inputValue);
    return inputValue;
})

addButton.addEventListener('click', () => {alert(inputValue)})

