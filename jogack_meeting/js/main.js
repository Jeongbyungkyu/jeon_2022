// const socket = io();
const socket = io(`http://10.100.220.184:5300`);

socket.on(`userinfo`, (data) => {
  const username = document.querySelector(`.heder__user_user`);
  const usermadi = document.querySelector(`.heder__user_stas`);
  const usersajin = document.querySelector(`.heder__user_img`);
  console.log(data);
  username.innerText = data[0].user_name;
  usermadi.innerText = data[0].user_madi;
  usersajin.src = `img/user_img/${data[0].user_id}.jpg`;
});
//today 조각 처리 하자
const moim = document.querySelector(`.moim__move1`);
const wowcuga = document.querySelector(`.moim__pr`);
const nums = [];
socket.on(`jogakinfo`, (data) => {
  for (let i = 0; i < 10; i++) {
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

    // moim_title.innerText = dataran.moim_title;
    // moim_int.innerText = `(${dataran.moim_int_value}/${dataran.moim_in_max})`;
    // moim_date.innerText = `조각 모임날 : ${nDate}`;
    // moiim_bar.value = dataran.moim_int_value;
    // moiim_bar.max = dataran.moim_in_max;
    cuga.className = `moim__pr`;
    cuga.innerHTML = `<div class="moim__pr_pro">
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

//참영중인 모임 처리
socket.on(`userjogak_info`, (data) => {
  if (data.length === 0) {
    const moimy = document.querySelector(`.moim__y`);
    const textcuga = document.createElement(`p`);
    const moimycuga = document.createElement("div");
    moimycuga.className = `noitem`;
    textcuga.innerHTML = `Today 추천을 통해 조각 모임에<br><br>참여해보세요^^`;
    textcuga.className = `textcuga blod`;
    moimy.appendChild(textcuga);
    moimy.appendChild(moimycuga);
  } else {
    const moimy = document.querySelector(`.moim__y`);
    for (let i = 0; i < data.length; i++) {
      const moimycuga = document.createElement("div");
      let intv = data[i].moim_int_value;
      let intm = data[i].moim_in_max;
      let datetime =
        data[i].moim_time.substr(0, 2) +
        `시 ` +
        data[i].moim_time.substr(3, 2) +
        `분`;
      let jokasuck;
      let date1 =
        data[i].moim_date.substr(0, 4) +
        `. ` +
        data[i].moim_date.substr(5, 2) +
        `. ` +
        data[i].moim_date.substr(8, 2);
      if (intv === intm) {
        jokasuck = `<div class="moim_pr_stats_mojip_s blod">조각모음완료</div>`;
      } else {
        jokasuck = `<div class="moim_pr_stats_mojip blod">조각모음 중..</div>`;
      }
      moimycuga.className = `moim__stats`;
      moimycuga.innerHTML = `<div class="moim__stats_a">
      <div class="moimy__stats_title margin__bottom">
        <div class="moim__y_tilte_s blod">${data[i].moim_title}</div>
        ${jokasuck}
      </div>
      <div class="blod margin__bottom jangso">
        <div class="moim__y_soda">
          <p>모임 장소 :</p>
          <div class="moim__y_wich">${data[i].moim_so}</div>
          <i class="fa-solid fa-map maginleft10"></i>
        </div>
        <div>
          <div class="moim__y_ji">${data[i].moim_ji}</div>
        </div>
      </div>
        <div class="moimy__stats_k">
          <div class="moim__y_valmax">
            <div>
              <div class="blod margin__bottom moim_date">
                <p>모임 날짜 :</p>
                <div class="moim__y_wich_d maginleft10">${date1}</div>
              </div>
            </div>
            <div class="moim__y_inwon blod">모집인원 (${data[i].moim_int_value}/${data[i].moim_in_max})</div>
          </div>
        </div>
          <div class="blod moimy__stats_last">
          <div class="blod margin__bottom moim_si">
            <p>모임 시간 :</p>
            <div class="moim__y_wich_s maginleft10">${datetime}</div>
          </div>
        <div>
          <div class="sarm__img_s">
            <img class="sarm__img_0_s" src="https://picsum.photos/30?random=11">
            <img class="sarm__img_1_s" src="https://picsum.photos/30?random=12">
            <img class="sarm__img_2_s" src="https://picsum.photos/30?random=13">
            <img class="sarm__img_3_s" src="https://picsum.photos/30?random=14">
            <img class="sarm__img_4_s" src="https://picsum.photos/30?random=15">
            <i class="jogo__icon_plus_s fa-solid fa-plus plus_s"></i>
          </div>
        </div>
      </div>
    </div>`;

      moimy.appendChild(moimycuga);
    }
  }
});
//참여중인 조각 모임 [월]
socket.on(`userjogak_info_m`, (data) => {
  if (data.length === 0) {
    const moimy = document.querySelector(`.moim__m`);
    const textcuga = document.createElement(`p`);
    const moimycuga = document.createElement("div");
    moimycuga.className = `noitem`;
    textcuga.innerHTML = `이번달은 일정이 없네요~^^ <br><br>조각모임에 참가해보세요`;
    textcuga.className = `textcuga blod`;
    moimy.appendChild(textcuga);
    moimy.appendChild(moimycuga);
  } else {
    const moimy = document.querySelector(`.moim__m`);
    for (let i = 0; i < data.length; i++) {
      const moimycuga = document.createElement("div");
      let intv = data[i].moim_int_value;
      let intm = data[i].moim_in_max;
      let datetime =
        data[i].moim_time.substr(0, 2) +
        `시 ` +
        data[i].moim_time.substr(3, 2) +
        `분`;
      let jokasuck;
      let date1 =
        data[i].moim_date.substr(0, 4) +
        `. ` +
        data[i].moim_date.substr(5, 2) +
        `. ` +
        data[i].moim_date.substr(8, 2);
      if (intv === intm) {
        jokasuck = `<div class="moim_pr_stats_mojip_s blod">조각모음완료</div>`;
      } else {
        jokasuck = `<div class="moim_pr_stats_mojip blod">조각모음 중..</div>`;
      }
      moimycuga.className = `moim__stats`;
      moimycuga.innerHTML = `<div class="moim__stats_a">
        <div class="moimy__stats_title margin__bottom">
          <div class="moim__y_tilte_s blod">${data[i].moim_title}</div>
          ${jokasuck}
        </div>
        <div class="blod margin__bottom jangso">
          <div class="moim__y_soda">
            <p>모임 장소 :</p>
            <div class="moim__y_wich">${data[i].moim_so}</div>
            <i class="fa-solid fa-map maginleft10"></i>
          </div>
          <div>
            <div class="moim__y_ji">${data[i].moim_ji}</div>
          </div>
        </div>
          <div class="moimy__stats_k">
            <div class="moim__y_valmax">
              <div>
                <div class="blod margin__bottom moim_date">
                  <p>모임 날짜 :</p>
                  <div class="moim__y_wich_d maginleft10">${date1}</div>
                </div>
              </div>
              <div class="moim__y_inwon blod">모집인원 (${data[i].moim_int_value}/${data[i].moim_in_max})</div>
            </div>
          </div>
            <div class="blod moimy__stats_last">
            <div class="blod margin__bottom moim_si">
              <p>모임 시간 :</p>
              <div class="moim__y_wich_s maginleft10">${datetime}</div>
            </div>
          <div>
            <div class="sarm__img_s">
              <img class="sarm__img_0_s" src="https://picsum.photos/30?random=11">
              <img class="sarm__img_1_s" src="https://picsum.photos/30?random=12">
              <img class="sarm__img_2_s" src="https://picsum.photos/30?random=13">
              <img class="sarm__img_3_s" src="https://picsum.photos/30?random=14">
              <img class="sarm__img_4_s" src="https://picsum.photos/30?random=15">
              <i class="jogo__icon_plus_s fa-solid fa-plus plus_s"></i>
            </div>
          </div>
        </div>
      </div>`;

      moimy.appendChild(moimycuga);
    }
  }
});
