const clock = document.querySelector(`.clock`);
const dayday = document.querySelector(`.dayday`);

function newdate(){
    const date = new Date();
    let hrhr = String(date.getHours()).padStart(2,"0");
    let mumu = String(date.getMinutes()).padStart(2,"0");
    let cho = String(date.getSeconds()).padStart(2,"0");
    let day1 = String(date.getFullYear());
    let day2 = String(date.getMonth());
    let day3 = String(date.getDay());
    
    clock.innerText = `${hrhr} : ${mumu} : ${cho}`;
    dayday.innerText = `${day1}.${day2}.${day3}`;
};

newdate();
setInterval(newdate, 1000);