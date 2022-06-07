const id = document.getElementById(`input__id`);
const pw = document.getElementById(`input__pw`);
const submit = document.getElementById(`login__button`);

function noNull() {
  if (id.value.length === 0) {
    alert(`아이디를 입력해주세요`);
  } else if (pw.value.length === 0) {
    alert(`패워드를 입력해주세요`);
  }
}

submit.addEventListener(`click`, noNull);
