const LoginForm = document.querySelector(".login-form");
console.log(LoginForm);
const LoginInput = document.querySelector(".login-form input");
console.log(LoginInput);
const LinkValue = document.querySelector("body a");
console.dir(LinkValue);
const Link = document.querySelector("a");
console.log(Link);
const logout = document.querySelector("input.hidden.dada");
console.dir(logout.classList);


function onLoginsSubmit(prog){
    const username = LoginInput.value;
    const usernamevalue = localStorage.setItem("username", username);
    prog.preventDefault();
    console.log(username);
    LoginForm.classList.add("hidden");
    console.dir(LoginForm.classList);
    console.log(usernamevalue);

    if(LoginForm.classList.value === "login-form hidden"){
        const hiddenlist = Link.classList;
        console.log(LoginForm.classList.value);
        hiddenlist.remove("hidden");
        LinkValue.innerText = `환영합니다 ${username}님 클릭하시면 이동됩니다.`;
        logout.classList.remove("hidden");
    }
}

function LinkNo(solclick){
    LinkNo.preventDefault();
    console.log(solclick);
}


function showuser(){
    LoginForm.classList.add("hidden");
    Link.classList.remove("hidden");
    LinkValue.innerText = `환영합니다 ${Usernamekey}님 클릭하시면 이동됩니다.`;
    logout.classList.remove("hidden");
}

function logoutkk(){
    localStorage.removeItem("username");
    window.location.reload();
}


LoginForm.addEventListener("submit", onLoginsSubmit);
Link.addEventListener("click", LinkNo);
logout.addEventListener("click", logoutkk);


const Usernamekey = localStorage.getItem("username");

if(Usernamekey === null){
    console.log(`유저정보 없음`);
}else{
    showuser();   
}
