const textArray = ["Chano"];
const el = document.querySelector(".title-nav");

let i = 0;
let j = 0;
let currentText = '';
let isDeleting = false;

function type() {
  const fullText = textArray[i];

  currentText = isDeleting
    ? fullText.substring(0, j--)
    : fullText.substring(0, j++);

  el.textContent = currentText;

  let speed = isDeleting ? 100 : 200;

  if (!isDeleting && j > fullText.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && j < 0) {
    isDeleting = false;
    i = (i + 1) % textArray.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

type();

function menu() {
  alert('tinatamad pa ako, sa susunod na.');
}