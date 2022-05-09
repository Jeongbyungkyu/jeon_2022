const canvas = document.getElementById(`main`);
const ctx = canvas.getContext('2d');

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


let keys= [];
function keyinput(e){
    keys[e.keyCode] = true;
    speed = 0.1;
    setInterval(function keinput1(e){
    if(keys[37]){
        console.log(`left`);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        juin.x -=speed;
        console.log(keys);

    }
    if(keys[38]){
        console.log(`up`);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        juin.y -=speed/2;
        console.log(keys);

    }
    if(keys[39]){
        console.log(`right`);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        juin.x +=speed;
        console.log(keys);

    }
    if(keys[40]){
        console.log(`down`);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        juin.y +=speed/2;
    }
    console.log(`rr`+juin.y);
    console.log(`rr`+juin.x);
    juin.draw();
}, 10);



}


function KeyInputUp(e){
    keys[e.keyCode] = false;
    console.log(keys)
    
}


juin.draw();

window.addEventListener(`keydown`, keyinput, false);
window.addEventListener(`keyup`, KeyInputUp, false);

// function keyInput(event){
//     switch (event.key){
//         case `ArrowDown`:
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         juin.y +=10;
//         juin.draw()
//         console.log(`다운`);
//         break;

//         case `ArrowUp`:
//         requestAnimationFrame(keyInput);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         juin.y -=10;
//         juin.draw();
//         console.log(`업`);
//         break;

//         case `ArrowLeft`:
//         console.log(`왼쪽`);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         juin.x -=10;
//         juin.draw();
//         break;

//         case `ArrowRight`:
//         console.log(`오른쪽`);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         juin.x +=10;
//         juin.draw();
//         break;

//         case `ArrowRight`, `ArrowDown`:
//         console.log(`오른쪽, 다운`);
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         juin.x +=10;
//         juin.y +=10;
//         juin.draw();
//         break;


//         default:
//         return;
//     }
// }   

