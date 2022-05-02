const imgsrc = [`bg1.jpg`, `bg2.jpg`, `bg3.jpg`, `bg4.jpg`, `bg5.jpg`,];

const imgcho = imgsrc[Math.floor(Math.random() * imgsrc.length)]


const bgimgs = document.createElement(`img`);
const kakada =  document.createElement(`span`);

bgimgs.src = `img/${imgcho}`;
bgimgs.id =`backimggo`;
kakada.innerText = `rr`;

console.log(kakada);

document.body.appendChild(bgimgs);