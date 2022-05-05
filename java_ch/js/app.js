const backloding = document.getElementById(`loding`);
const namehello = document.querySelector(`.namehello`);
const ANI = "test 2s ease 0s 1 normal forwards";
const applink = document.querySelector(`.jaturi`)
console.log(applink);




function backlodingka(event){
    event.preventDefault();
    backloding.style.animation = ANI;
    console.log(event.target[0].value);
    const span1 = document.createElement(`span`);
    span1.innerText = `${event.target[0].value}님 환영홥니다.`;
    namehello.appendChild(span1);
};


function linkmove(){
    window.open("https://jeongbyungkyu.github.io/jeon_2022/kokoaclone/","캉캉오","width=500px,height=800px");
}


backloding.addEventListener(`submit`, backlodingka);
applink.addEventListener(`click`, linkmove);