const moim_slid = document.querySelector(`.moim`);
const moim_move = document.querySelector(`.moim__move`);
const allowLeft = document.querySelector(`.left`);
const allowRight = document.querySelector(`.right`);

const ANI = "test 2s ease 0s 1 normal forwards";

function moim_Hover() {
  allowLeft.style.transform = `scale(1)`;
  allowRight.style.transform = `scale(1)`;
  // if (moim_slid.className === `moim`) {
  // }
}

function moim_Hover_s() {
  allowLeft.style.transform = `scale(0)`;
  allowRight.style.transform = `scale(0)`;
  // if (moim_slid.className === `moim`) {
  // }
}

moim_slid.addEventListener(`mousemove`, moim_Hover);

moim_slid.addEventListener(`mouseleave`, moim_Hover_s);

let suja = 409;
let sujaplus = 0;

function left_move() {
  if (sujaplus === 0 || sujaplus > -3681) {
    sujaplus -= suja;
    moim_move.style.transform = `translate(${sujaplus}px)`;
    console.log(sujaplus);
  }
}

allowRight.addEventListener(`click`, left_move);

function right_move() {
  if (sujaplus < 0) {
    sujaplus += suja;
    moim_move.style.transform = `translate(${sujaplus}px)`;
    console.log(sujaplus);
  }
}

allowLeft.addEventListener(`click`, right_move);
