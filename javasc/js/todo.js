const todoform = document.querySelector(`#todoform`);
const todoinput = todoform.querySelector(`input`);
const todolist = document.querySelector(`ul#todolist`);
let savetodo = [];

/*저장 펑션*/
function savetodlist(){
    localStorage.setItem(`todolist`, JSON.stringify(savetodo));
    console.log(savetodo);
};


function tododel(event){
    const tododelko = event.target.parentElement;
    savetodo = savetodo.filter((savetodo) => savetodo.id !== parseInt(tododelko.id));
    savetodlist();
    tododelko.remove();
};

function todoinput1(newtododata){
    const li = document.createElement(`li`);
    const span = document.createElement("span");
    const button = document.createElement(`button`);
    span.innerText = newtododata.text;
    button.innerText = `X`;
    li.id = newtododata.id;
    li.appendChild(span);
    li.appendChild(button);
    todolist.appendChild(li);
    button.addEventListener("click", tododel);
};


function todoenter(event){
    event.preventDefault();
    const todoinputvalue = todoinput.value;
    todoinput.value="";
    const newtododata = {
        text: todoinputvalue,
        id: Date.now(),
    };
    savetodo.push(newtododata);
    todoinput1(newtododata);
    savetodlist();
};


todoform.addEventListener(`submit`, todoenter);

const todolistsave = localStorage.getItem(`todolist`);


if(todolistsave !== null){
    const parstodolist = JSON.parse(todolistsave);
    console.log(parstodolist);
    savetodo = parstodolist;
    parstodolist.forEach(todoinput1);
};