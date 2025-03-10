
let TodoInput = document.getElementById('input-todo')

let AddBtn = document.getElementById('add-btn')

let ListContainer = document.getElementById('list-container')

function addTask(){
    let TodoLi = document.createElement('li')
    TodoLi.textContent = TodoInput.value
    ListContainer.appendChild(TodoLi)
    TodoInput.value = ""

    
}

AddBtn.addEventListener('click',addTask)