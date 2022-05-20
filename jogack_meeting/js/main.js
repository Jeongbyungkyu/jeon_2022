const socket = io(`http://localhost:5500`);

socket.on(`userinfo`, (data) => {
  const username = document.querySelector(`.heder__user_user`);
  const usermadi = document.querySelector(`.heder__user_stas`);
  username.innerText = data[0].username;
  usermadi.innerText = data[0].usermadi;
});

socket.on(`jogakinfo`, (data) => {
  const moim_title = document.querySelector(`.moim_tilte_s`);
  const moim_int = document.querySelector(`.moim_pr_pro_state_bar > p`);
  const moim_date = document.querySelector(`.moim_pr_pro_date`);
  const moiim_bar = document.querySelector(`.bar__1`);
  const date = data.moim_date;
  const nDate =
    date.substr(0, 4) + ". " + date.substr(5, 2) + ". " + date.substr(8, 2);

  moim_title.innerText = data.moim_title;
  moim_int.innerText = `(${data.moim_int_value}/${data.moim_in_max})`;
  moim_date.innerText = `조각 모임날 : ${nDate}`;
  moiim_bar.value = data.moim_int_value;
  moiim_bar.max = data.moim_in_max;
});
