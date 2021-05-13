const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector("[data-action='start']");
const stopBtn = document.querySelector("[data-action='stop']");
const body = document.querySelector("body");
startBtn.addEventListener("click", changeColor);
stopBtn.addEventListener("click", stopChangeColor);

const min = 0;
const max = colors.length - 1;
let setTimer = null;
function changeColor(e) {
  if (setTimer) return;
  startBtn.disabled = true;
  setTimer = setInterval(() => {
    const randomItem = randomIntegerFromInterval(min, max);
    body.style.backgroundColor = colors[randomItem];
  }, 300);
}

function stopChangeColor(e) {
  startBtn.disabled = false;
  clearInterval(setTimer);
  setTimer = null;
}
