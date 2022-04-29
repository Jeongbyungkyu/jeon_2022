const clock = document.querySelector(`h2#clock`);



function sayHello(){
    const date = new Date();
    let hrhr = String(date.getHours()).padStart(2,"0");
    let mumu = String(date.getMinutes()).padStart(2,"0");
    let cho = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hrhr} : ${mumu} : ${cho}`;    

}
sayHello();
setInterval(sayHello, 1000);