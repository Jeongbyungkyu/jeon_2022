const send = document.getElementById(`send`);
const socket = io();
let submail = {
    from : ``,
    to : ``,
    subject : ``,
    html :``,
}

submail.from = `ouregol@naver.com`
submail.to =`ouregol@gmail.com`
submail.subject=`이건 조금더 만들어 보자`
submail.html=`첫 메일 발송 만들어보기 굿좝`

function onClick1(event){
    socket.emit(`chatroom`, submail);
}

socket.on(`chatroom`, (data)=>{
    console.log(data)
})


send.addEventListener(`click`, onClick1);