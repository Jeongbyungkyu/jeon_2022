const todoinput = document.querySelector(`.todo`);
const todolist = document.querySelector(`.todolist`);
const BUTTONCLASS = `fa-solid fa-xmark fa-2x fa-flip`

let todosavelist = [];

function StorageAdd(){
   localStorage.setItem(`todoadd`,JSON.stringify(todosavelist));
}



function TodoInput(value){
    const todolist0 = document.createElement(`div`)
    const todolist1 = document.createElement(`li`);
    const todobutton = document.createElement(`i`);
    todobutton.className = BUTTONCLASS
    todobutton.id = `xbutton`
    todolist1.innerText = value.todoval;
    todolist0.className = value.id;
    todolist.appendChild(todolist0)
    todolist0.appendChild(todolist1);
    todolist0.appendChild(todobutton);
}


function todoinputha(event){
    event.preventDefault();
    const Id = Date.now();
    const todo = {
        todoval: event.target[0].value,
        id: Id
    }
    event.target[0].value =``;
    todosavelist.push(todo);
    TodoInput(todo);
    StorageAdd();
}

function TodoDel(event){
    const mouse = event.target.className;
    if(BUTTONCLASS == mouse){
        const delid = event.target.parentElement.className;
        const deldiv = event.target.parentElement;
        const TodoDelF = todosavelist.filter(notitem => notitem.id != delid);
        todosavelist = TodoDelF;
        StorageAdd();
        deldiv.remove();
    }

}


todoinput.addEventListener(`submit`,todoinputha);

const kada = localStorage.getItem(`todoadd`);

if(kada !== null){
    const DataJsonPer = JSON.parse(kada);
    todosavelist = DataJsonPer;
    todosavelist.forEach(TodoInput);
    
}


const xbutton = document.getElementById(`xbutton`)
todolist.addEventListener('click', TodoDel);