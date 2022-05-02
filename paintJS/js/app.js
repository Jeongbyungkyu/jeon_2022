const paint = document.getElementById(`canvas`);
const ctx = paint.getContext(`2d`);
const range1 = document.getElementById(`jsran`);
const col = document.querySelector(`div.col`);
const backpaint = document.querySelector(`div.option`);
console.log(backpaint);

let painting = false;
let col1;

canvas.width = 800;
canvas.height = 600;
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

function stopPainting(){
    painting = false;
};

function startPainting(){
    painting = true;
};

function mousemove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
};

function mousedown(event){
    painting = true;
};

function colcol(event){
    console.log(event);
    if(col.children[0].className === event.target.className){
        ctx.strokeStyle = col1 = "black";
    }else if(col.children[1].className === event.target.className){
        ctx.strokeStyle = col1 = "white";
    }else if(col.children[2].className === event.target.className){
        ctx.strokeStyle = col1 = "red";
    }else if(col.children[3].className === event.target.className){
        ctx.strokeStyle = col1 = "orange";
    }else if(col.children[4].className === event.target.className){
        ctx.strokeStyle = col1 = "yellow";
    }else if(col.children[5].className === event.target.className){
        ctx.strokeStyle = col1 = "green";
    }else if(col.children[6].className === event.target.className){
        ctx.strokeStyle = col1 = "skyblue";
    }else if(col.children[7].className === event.target.className){
        ctx.strokeStyle = col1 = "blue";
    }else if(col.children[8].className === event.target.className){
        ctx.strokeStyle = col1 = "purple";
    };
    console.log(col1);
};


function downloadURI(uri, name){
    const link = document.createElement("a")
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
}


function option(event){
    if(backpaint.children[1].className === event.target.className){
        ctx.fillStyle = col1;
        ctx.fillRect(0, 0, 800, 600);
    } else if(backpaint.children[2].className === event.target.className){
        html2canvas(paint).then(function(canvas) {
            const myImage = canvas.toDataURL();
            downloadURI(myImage, "img저장.png");
        });
    }
};


if(paint){
paint.addEventListener(`mousemove`, mousemove);
paint.addEventListener(`mousedown`, mousedown);
paint.addEventListener(`mouseup`, stopPainting);
paint.addEventListener(`mouseleave`, stopPainting);
};

col.addEventListener(`click`, colcol);
backpaint.addEventListener(`click`, option);