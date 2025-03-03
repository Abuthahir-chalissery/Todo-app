
let TodoInput = document.getElementById("input-todo");


let ListContainer = document.getElementById("list-container");

function addTask(){
    if (TodoInput.value === ''){
        alert("You Must write something!!!")
    }
    else{
        let div = document.createElement("div");
        div.innerHTML = TodoInput.value;
        ListContainer.appendChild(div);
        
    }
}