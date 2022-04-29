const imgsrc = [`bg1.jpg`, `bg2.jpg`, `bg3.jpg`, `bg4.jpg`, `bg5.jpg`,];

const imgcho = imgsrc[Math.floor(Math.random() * imgsrc.length)]

console.log(imgcho);

const bgimgs = document.createElement(`img`);
bgimgs.src = `img/${imgcho}`;

console.log(bgimgs);

document.body.appendChild(bgimgs);