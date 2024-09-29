const displayTimer = document.querySelector(".timer");
const stop = document.querySelector(".stop");
const play = document.querySelector(".play");
const reset = document.querySelector(".reset");

let [hour, minute, second] = [0, 0, 0];
let timer = null;

play.addEventListener("click", () => {
  start();
});

stop.addEventListener("click", () => {
  stopWatch();
});

reset.addEventListener("click", () => {
  resetWatch();
});

function playWatch() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
  } else if (minute == 60) {
    minute = 0;
    hour++;
  }

  let hr = hour >= 10 ? hour : "0" + hour;
  let min = minute >= 10 ? minute : "0" + minute;
  let sec = second >= 10 ? second : "0" + second;
  displayTimer.innerHTML = `${hr} : ${min} : ${sec}`;
}

function start() {
  play.setAttribute("disabled", "true");
  play.childNodes[0].classList.remove("hover");
  play.childNodes[0].style.color = "#ccc";

  console.log(play);
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(playWatch, 1000);
}

function stopWatch() {
  play.removeAttribute("disabled");
  play.childNodes[0].classList.add("hover");
  play.childNodes[0].style.color = "#fff";
  clearInterval(timer);
}

function resetWatch() {
  play.removeAttribute("disabled");
  play.childNodes[0].classList.add("hover");
  play.childNodes[0].style.color = "#fff";
  clearInterval(timer);
  [hour, minute, second] = [0, 0, 0];
  displayTimer.innerHTML = "00 : 00 : 00";
}
