// Créer la logique de compte à rebours
let totalSeconds;
let myInterval;
const audio = new Audio('sonnerie.wav');

const showCountdown = () => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  countdownDisplay.innerText = `${minutes} : ${seconds > 10 ? seconds : '0' + seconds}`;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    clearInterval(myInterval);
    countdownDisplay.innerText = "C'est terminé";
    audio.play();
  }
  console.log(totalSeconds);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  totalSeconds = choice.value * 60;
  choice.value = '';
  audio.pause();
  audio.currentTime = 0;
  clearInterval(myInterval);
  myInterval = setInterval(showCountdown, 100);
});
