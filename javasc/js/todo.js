const todoform = document.querySelector(`#todoform`);
const todoinput = todoform.querySelector(`input`);
const todolist = document.querySelector(`ul#todolist`);
let savetodo = [];


function savetodlist(){
    localStorage.setItem(`todolist`, JSON.stringify(savetodo));
};


function tododel(button){
    const tododelko = button.target.parentElement;
    tododelko.remove();
};

function todoinput1(todoinputvalue){
    const li = document.createElement(`li`);
    const button = document.createElement(`button`);
    li.innerText = todoinputvalue;
    button.innerText = `X`;
    todolist.appendChild(li);
    li.appendChild(button);
    li.addEventListener("click", tododel);
};


function todoenter(event){
    event.preventDefault();
    const todoinputvalue = todoinput.value;
    todoinput.value="";
    savetodo.push(todoinputvalue);
    todoinput1(todoinputvalue);
    savetodlist();
    
};


todoform.addEventListener(`submit`, todoenter);

const todolistsave = localStorage.getItem(`todolist`);

if(todolistsave !== null){
    const parstodolist = JSON.parse(todolistsave);
    console.log(parstodolist);
    savetodo = parstodolist;
    parstodolist.forEach(todoinput1);
}