let timer;
let hour = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const displayHours = document.getElementById('hour');
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const displayMilliseconds = document.getElementById('milliseconds');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

const StartWatch = () => {
  timer = setInterval(start, 10);
  startBtn.disabled = true;
};

const StopWatch = () => {
  clearInterval(timer);
  startBtn.disabled = false;
};

const reset = () => {
  StopWatch();
  hour = 0;
  seconds = 0;
  minutes = 0;
  milliseconds = 0;
  updateDisplay();
};

const start = () => {
  milliseconds++;
  if (milliseconds > 99) {
    milliseconds = 0;
    seconds++;
    if (seconds > 59) {
      seconds = 0;
      minutes++;
      if (minutes > 59) {
        minutes = 0;
        hour++;
      }
    }
  }
  updateDisplay();
};

const updateDisplay = () => {
  displayHours.innerText = formatTime(hour);
  displayMinutes.innerText = formatTime(minutes);
  displaySeconds.innerText = formatTime(seconds);
  displayMilliseconds.innerText = formatTime(milliseconds);
};

const formatTime = (time) => (time < 10 ? `0${time}:` : `${time}:`);
