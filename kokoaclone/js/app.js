const userid = document.querySelector(`#login-form input`);
const userpw = document.querySelector(`#login-form input:nth-child(2)`);
const caruserid = localStorage.setItem(`userid`, `191102`);
const caruserps = localStorage.setItem(`userpw`, `123456`)
const Loginbutton = document.querySelector('.loginbutton');


function LoginId(kada){
    const userid1 = userid.value;
    const userpw1 = userpw.value;

    kada.preventDefault();
    if(userid1 === `191102` && userpw1 ===`123456`){
        location.href=`fr.html`;
    }else{
        alert(`ID또는 암호가틀립니다.`);
    }
}

Loginbutton.addEventListener(`click`, LoginId);