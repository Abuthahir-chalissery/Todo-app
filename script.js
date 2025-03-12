// Selecting elements
const todoInput = document.getElementById('input-todo');
const addBtn = document.getElementById('add-btn');
const listContainer = document.getElementById('list-container');


LoadData()


// Add Task Function
function addTask(e) {
    e.preventDefault();

    const task = todoInput.value.trim(); 

    if (task === "") return;


    // Creating task elements
    const todoDiv = document.createElement('div');
    const todoLi = document.createElement('li');
    const checkBox = document.createElement('button')
    const delDiv = document.createElement('div');
    const trashBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    

    // Adding content
    todoLi.textContent = task;
    // editBtn.innerHTML = `<ion-icon class="text-lg text-[#4A4D57]" name="create-outline"></ion-icon>`;
    trashBtn.textContent = `<ion-icon class="text-[#4A4D57] text-lg" name="trash-outline"></ion-icon>`;


    // Appending elements
    todoDiv.appendChild(todoLi);
    todoLi.prepend(checkBox)
    delDiv.appendChild(editBtn)
    delDiv.appendChild(trashBtn);
    todoDiv.appendChild(delDiv);
    listContainer.appendChild(todoDiv);





    // Input field clearing
    todoInput.value = "";

    // Adding classes
    todoDiv.classList.add("flex", "justify-between", "items-center", "py-1.5", "my-4", "px-3", "border-1", "rounded-md", "bg-[#1C1D20]", "border-none", "text-gray-50");
    todoLi.classList.add("flex", "gap-2", "items-center");
    checkBox.classList.add("w-5", "h-5", "rounded-full",  "border-1",  "text-[#4A90E2]")
    delDiv.classList.add("flex", "items-center", "justify-center", "gap-2");
    trashBtn.classList.add("text-red-500", "hover:text-red-700", "transition");
    
    // Adding the icons
    trashBtn.innerHTML = trashBtn.innerHTML = `<ion-icon class="text-[#4A4D57] text-lg" name="trash-outline"></ion-icon>`;

    saveData()


    // Functionalities
    // Delete
    function TrashTask(){
        listContainer.removeChild(todoDiv)

    }
    trashBtn.addEventListener('click',TrashTask);


    function ToggleTask(){
        if (checkBox.classList.contains('bg-[#4A90E2]')){
            checkBox.classList.remove('bg-[#4A90E2]')
            checkBox.classList.add('bg-transparent')
            todoLi.style.textDecoration = 'none'
            todoLi.style.color = 'white'
        }else{
            checkBox.classList.add('bg-[#4A90E2]')
            checkBox.classList.remove('bg-transparent')
            todoLi.style.textDecoration = 'line-through'
            todoLi.style.color = 'gray'
            
        }
        saveData()

        
    }

    
    checkBox.addEventListener('click',ToggleTask)

}


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function LoadData(){
    listContainer.innerHTML = localStorage.getItem("data")
}




//  adding tasks
addBtn.addEventListener('click', addTask);
