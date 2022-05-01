const APIkey = `eae03f77e9486e33e2558b0cba92cf38`;
const weather = document.querySelector(`div#weather`);

console.log(weather);

function onGeo(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
        fetch(url).then(response => response.json()).then(data =>{
            const wespan = document.createElement(`span`);
            wespan.innerText = `국가:${data.sys.country} 지역:${data.name} 온도:${data.main.temp}`;
            weather.appendChild(wespan);
        }); 
};

function onGeoErr(){
    alert(`위치를 찾을수 없음`);
};

navigator.geolocation.getCurrentPosition(onGeo, onGeoErr);