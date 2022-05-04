const APIKEY = `eae03f77e9486e33e2558b0cba92cf38`
const wech1 = document.querySelector(`.wech`);
const ondo1 = document.querySelector(`.ondo`);
const nalci1 = document.querySelector(`.nalci`);



function wechgo(gogo){
    let lat = gogo.coords.latitude;
    let lon = gogo.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    fetch(url).then(res => res.json()).then(data => { 

    let wech = data.name;
    let ondo = data.main.temp;
    let nalci = data.weather[0].main;
        wech1.innerText = wech;
        ondo1.innerText = `${ondo}°C`;
        nalci1.innerText = nalci;

    })
}


function nowech(){
    alert("위치를 찾지못해 날씨가 표시되지 않습니다.");

}

navigator.geolocation.getCurrentPosition(wechgo, nowech);
setInterval(newdate, 5000);