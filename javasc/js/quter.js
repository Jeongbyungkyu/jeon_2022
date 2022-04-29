const quter =[
    {
        why:`삶이 있는 한 희망은 있다`,
        who:`키케로`,
    },
    {
        why:`산다는것 그것은 치열한 전투이다`,
        who:`로망로랑`,
    },
    {
        why:`하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다`,
        who:`사무엘존슨`,
    },
    {
        why:`언제나 현재에 집중할수 있다면 행복할것이다`,
        who:`파울로 코엘료`,
    },
    {
        why:`진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해`,
        who:`찰리 채플린`,
    },
    {
        why:`직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다`,
        who:`엘버트 허버드`,
    },
    {
        why:`신은 용기있는자를 결코 버리지 않는다`,
        who:`켄러`,
    },
    {
        why:`우리를 향해 열린 문을 보지 못하게 된다`,
        who:`헬렌켈러`,
    },
    {
        why:`단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?`,
        who:`이드리스 샤흐`,
    },
    {
        why:`먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에`,
        who:`엘사 맥스웰`,
    },
]

const why = document.querySelector(`#quter span:first-child`);
const who = document.querySelector(`#quter span:last-child`);

const quterRandom = (quter[Math.floor(Math.random() * quter.length)]);

why.innerText = quterRandom.why;
who.innerText = quterRandom.who;