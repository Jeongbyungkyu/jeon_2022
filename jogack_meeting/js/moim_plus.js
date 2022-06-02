const CloseButton = document.querySelector(`.moim__make_x`);
const MakejokaMain = document.getElementById(`moim__plus`);
const main = document.querySelector(".main");
const OpenButton = document.querySelector(`.main__botom_icon`);
const inputButton = document.querySelector(`.input__make_buuton`);

function CloseMoim() {
  MakejokaMain.style.animation = "cugamo 0.5s forwards";
  MakejokaMain.style.zIndex = -99;
  main.style.animation = "main 0.5s forwards";
}

CloseButton.addEventListener(`click`, CloseMoim);

function OpenMoim() {
  MakejokaMain.style.animation = "cugamo_click 0.5s forwards";
  MakejokaMain.style.display = "flex";
  MakejokaMain.style.zIndex = 99;
  main.style.animation = "main_click 0.5s forwards";
}

OpenButton.addEventListener(`click`, OpenMoim);

function inputbutton() {
  MakejokaMain.style.animation = "cugamo 0.5s forwards";
  MakejokaMain.style.zIndex = -99;
  main.style.animation = "main 0.5s forwards";
}

inputButton.addEventListener(`click`, inputbutton);
