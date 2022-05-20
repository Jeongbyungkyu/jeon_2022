const socket = io(`http://10.100.220.184:5300`);

socket.on(`userinfo`, (data) => {
  const username = document.querySelector(`.heder__user_user`);
  const usermadi = document.querySelector(`.heder__user_stas`);
  const usersajin = document.querySelector(`.heder__user_img`);
  username.innerText = data[0].username;
  usermadi.innerText = data[0].usermadi;
  usersajin.src = data[0].usersajin;
});
//today 조각 처리 하자
const moim = document.querySelector(`.moim__move`);
const wowcuga = document.querySelector(`.moim__pr`);
const nums = [];
socket.on(`jogakinfo`, (data) => {
  for (let i = 0; i < 9; i++) {
    while (true) {
      const num = Math.floor(Math.random() * data.length);
      if (nums.indexOf(num) == -1) {
        nums.push(num);
        break;
      }
    }
    const dataran = data[nums[nums.length - 1]];
    let cuga = document.createElement("div");
    const moim_title = document.querySelector(`.moim_tilte_s`);
    const moim_int = document.querySelector(`.moim_pr_pro_state_bar > p`);
    const moim_date = document.querySelector(`.moim_pr_pro_date`);
    const moiim_bar = document.querySelector(`.bar__1`);
    const date = dataran.moim_date;
    const nDate =
      date.substr(0, 4) + ". " + date.substr(5, 2) + ". " + date.substr(8, 2);

    moim_title.innerText = dataran.moim_title;
    moim_int.innerText = `(${dataran.moim_int_value}/${dataran.moim_in_max})`;
    moim_date.innerText = `조각 모임날 : ${nDate}`;
    moiim_bar.value = dataran.moim_int_value;
    moiim_bar.max = dataran.moim_in_max;
    cuga.className = `moim__pr`;
    cuga.innerHTML = `            <div class="moim__pr_pro">
<div class="moim__pr_pro_title">
  <div class="blod moim_tilte_s">${dataran.moim_title}</div>
  <!--div class="blod moim__stats_proman">
  <p>85%</p>
</div-->
</div>
<div class="blod moim_pr_pro_date">조각 모임날 : ${nDate}</div>
<div class="moim_pr_pro_state">
  <div class="blod moim_pr_pro_state_bar">
    모집인원
    <p>(${dataran.moim_int_value}/${dataran.moim_in_max})</p>
  </div>
  <div class="moim__state_bar_ko">
    <!--div class="moim__stats_proman">20%</div-->
    <progress class="bar__1" value="${dataran.moim_int_value}" max="${dataran.moim_in_max}"></progress>
  </div>
</div>
<div class="moim_pr_pro_last">
  <div class="sarm__img">
    <img class="sarm__img_0" src="https://picsum.photos/30?random=1">
    <img class="sarm__img_1" src="https://picsum.photos/30?random=2">
    <img class="sarm__img_2" src="https://picsum.photos/30?random=3">
    <img class="sarm__img_3" src="https://picsum.photos/30?random=4">
    <img class="sarm__img_4" src="https://picsum.photos/30?random=5">
  </div>
  <div class="blod moim_pr_stats_mojip">조각모음 중..</div>
</div>
</div>`;

    moim.appendChild(cuga);
  }
});
