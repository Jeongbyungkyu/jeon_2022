const serch_input = document.querySelector(`.serch__input`);

function serch() {
  let serch_list = serch_input.value;
  const bekyu = [];
  if (serch_list.length > 0 || serch_list != bekyu) {
    socket.emit(`serch_list`, serch_list);
  } else {
    const serch_list = document.querySelector(`.serch_list`);
    serch_list.innerHTML = "";
  }
}

serch_input.addEventListener(`keyup`, serch);

socket.on(`serch_list_s`, (data) => {
  const serch_list = document.querySelector(`.serch_list`);
  serch_list.innerHTML = "";
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
    moimycuga.className = `moim__serch`;
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
    serch_list.appendChild(moimycuga);
  }
});
