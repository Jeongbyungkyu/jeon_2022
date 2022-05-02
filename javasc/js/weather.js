const APIkey = `eae03f77e9486e33e2558b0cba92cf38`;
const weather = document.querySelector(`div#weather`);
const span1 = document.querySelector(`#span1`);

console.dir(span1);

function onGeo(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
        fetch(url).then(response => response.json()).then(data =>{
            const wespan = document.createElement(`span`);
            const nara = document.createElement(`span`);
            const gida = document.createElement(`sapn`);
            wespan.innerText = `${data.main.temp} 도`;
            nara.innerText = `${data.sys.country}`;
            gida.innerText =`${data.name}`;
            span1.appendChild(nara);
            span1.appendChild(gida);
            span1.appendChild(wespan);
        }); 
};

function onGeoErr(){
    alert(`위치를 찾을수 없음`);
};

navigator.geolocation.getCurrentPosition(onGeo, onGeoErr);