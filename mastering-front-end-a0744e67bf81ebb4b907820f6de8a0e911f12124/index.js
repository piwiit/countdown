// Créer la logique de compte à rebours
let totalSeconds;

const showCountdown = () => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  seconds.toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  });

  countdownDisplay.innerText = `${minutes} : ${seconds}`;
  console.log(minutes, seconds);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (isNaN(choice.value)) {
    alert('Entrez un chiffre');
  } else {
    totalSeconds = choice.value * 60;
    choice.value = '';
    setInterval(showCountdown, 1000);
  }
});
