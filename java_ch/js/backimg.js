const imgsrc = [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg`, `7.jpg`];
const imghtml = document.getElementById(`backimg1`)

function imgrandom(){
    let randomimgMath = imgsrc[Math.floor(Math.random() * imgsrc.length)];
    let imgadd = document.createElement(`img`);
    imgadd.src = `img/${randomimgMath}`;
    imgadd.className = `wow18`
    imghtml.appendChild(imgadd);

}

function imgrandommove(){
    let randomimgMath = imgsrc[Math.floor(Math.random() * imgsrc.length)];
    const chang = document.querySelector(`.wow18`)
    chang.src = `img/${randomimgMath}`;

}

imgrandom()
setInterval(imgrandommove, 6000)