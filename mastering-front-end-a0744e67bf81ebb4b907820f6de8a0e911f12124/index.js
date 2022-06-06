// Créer la logique de compte à rebours
const choice = document.querySelector("input[type=number]");
let totalSeconds = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  showCountdown();
  console.log(totalSeconds + "secondes");
});

// choice.value = 5 minutes

// Créer un événement à la validation du form pour lancer le compte à rebours

const showCountdown = () => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = 0;
  // let seconds.toLocaleString(undefined, {
  //   minimumIntegerDigits: 2,
  // });
  totalSeconds = choice.value * 60;

  countdownDisplay.innerText = `${minutes} : ${seconds}`;
};
