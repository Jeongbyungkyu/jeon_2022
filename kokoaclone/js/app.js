const userid = document.querySelector(`#login-form input`);
const userpw = document.querySelector(`#login-form input:nth-child(2)`);
const caruserid = localStorage.setItem(`userid`, `191102`);
const caruserps = localStorage.setItem(`userpw`, `123456`)
const Loginbutton = document.querySelector('.loginbutton');


function LoginId(kada){
    const userid1 = userid.value;
    const userpw1 = userpw.value;

    kada.preventDefault();
    if(userid1 === `123456` && userpw1 ===`123456`){
        location.href=`fr.html`;
    }else{
        alert(`아이디 암호가 틀리지만 이동합니다`)
        location.href=`fr.html`;
    }
}

Loginbutton.addEventListener(`click`, LoginId);