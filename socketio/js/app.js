const send = document.getElementById(`send`);
const socket = io();
let submail = {
    from : ``,
    to : ``,
    subject : ``,
    html :``,
}

submail.from = `ouregol@naver.com`


function onClick1(event){
    const to = document.getElementById(`to`);
    const subject = document.getElementById(`sub`);
    const html = document.getElementById(`html`);

    submail.to = to.value;
    submail.subject =subject.value;
    submail.html =html.value;

    
    socket.emit(`chatroom`, submail);
}

socket.on(`chatroom`, (data)=>{
})


send.addEventListener(`click`, onClick1);