const Today = document.getElementById(`today`);
const Month = document.getElementById(`month`);
const moim__y = document.querySelector(`.moim__y`);
const moim__m = document.querySelector(`.moim__m`);

function clickgo() {
  Today.className = `click__tmy_h blod select`;
  Month.className = `click__tmy_h blod`;
  moim__y.style.animation = `test1 2s`;
  moim__y.className = `moim__y`;
  moim__m.style.animation = `test1 2s`;
  moim__m.className = `moim__m `;
  location.reload();
}

Today.addEventListener(`click`, clickgo);

function clickmo() {
  Today.className = `click__tmy_h blod`;
  Month.className = `click__tmy_h blod select`;
  moim__y.style.animation = `test1 2s`;
  moim__y.className = `moim__y anbogi`;
  moim__m.style.animation = `test1 2s`;
  moim__m.className = `moim__m anbogi_m`;
  location.reload();
}

Month.addEventListener(`click`, clickmo);
