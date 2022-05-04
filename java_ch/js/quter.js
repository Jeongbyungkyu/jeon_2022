const quterMara = document.querySelector(`.mara`);
const quterNugu = document.querySelector(`.nugu`);

const quter = [
    {
        mora:`늘 하던 대로 하면 늘 얻던 것을 얻는다`,
        nugu:`미상`
    },
    {
        mora:`열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.`,
        nugu:`윈스턴 처칠`
    },
    {
        mora:`애벌레가 세상이 끝났다고 생각하는 순간 나비로 변했다`,
        nugu:`속담`
    },
    {
        mora:`성공한 사업가들은 긍정적인 에너지를 주는 사람들이지 가져가는 사람들이 아니다.`,
        nugu:`미상`
    },
    {
        mora:`기회는 일어나는 것이 아니라 만들어내는 것이다.`,
        nugu:`크리스 그로서`
    },
    {
        mora:`성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라.`,
        nugu:`알버트 아인슈타인`
    },
    {
        mora:`나는 실패한 게 아니다. 나는 잘 되지 않는 방법 1만 가지를 발견한 것이다.`,
        nugu:`토마스 에디슨`
    },
    {
        mora:`당신이 허락해주지 않으면 아무도 당신이 열등감을 느끼게 만들 수 없다.`,
        nugu:`엘리너 루즈벨트`
    }
];


function moja1(){
let quterrandom = quter[Math.floor(Math.random() * quter.length)];

quterNugu.innerText = `- ${quterrandom.nugu} -`;
quterMara.innerText = quterrandom.mora;
}
moja1();
setInterval(moja1, 5000);