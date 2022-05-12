const send = document.getElementById(`send`);
const socket = io();
const canvas = document.getElementById(`gogo`);
const ctx = canvas.getContext('2d');



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


send.addEventListener(`click`, onClick1);



canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;




let juin = {
    x : 300,
    y : 50,
    width :60,
    height :10,
    draw(){
        ctx.fillStyle = `red`;
       let ctx1 = ctx.fillRect(this.x, this.y, this.width, this.height);
}

};


let juin1 = {
    x : 100,
    y : 100,
    width :60,
    height :30,
    draw(){
        ctx.fillStyle = `red`;
       let ctx1 = ctx.fillRect(this.x, this.y, this.width, this.height);
}

};



socket.emit(`ggmove`, juin1);


let keys= [];
function keyinput(e){
    keys[e.keyCode] = true;
    speed = 10;
    
    if(keys[37]){
        juin.x -=speed;
    }
    if(keys[38]){
        juin.y -=speed/2;
        }
    if(keys[39]){
        juin.x +=speed;
    }
    if(keys[40]){
        juin.y +=speed/2;
    }
    socket.emit(`ggmove1`,juin);
}


function KeyInputUp(e){
    keys[e.keyCode] = false;
    
}

socket.on(`ggmove1`, (movedata)=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    juin1.x = movedata.x;
    juin1.y = movedata.y;
    juin1.draw();

})



window.addEventListener(`keydown`, keyinput, false);
window.addEventListener(`keyup`, KeyInputUp, false);

// socket.on(`ggmove1`, (down1=>{
//     juin1.y = down1
//     console.log(`한번보자`+down1)
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     juin1.draw();
// }))

// socket.on(`ggmove1`, (down1=>{
//     juin1.y = up1
//     console.log(`한번보자`+up1)
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     juin1.draw();
// }))

// socket.on(`ggmove3`, (left1=>{
//     juin1.x = left1
//     console.log(`한번보자`+left1)
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     juin1.draw();
// }))

// socket.on(`ggmove4`, (right1=>{
//     juin1.x = right1
//     console.log(`한번보자`+right1)
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     juin1.draw();
// }))