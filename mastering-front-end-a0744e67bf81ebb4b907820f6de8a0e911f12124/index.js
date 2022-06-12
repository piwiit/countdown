// Créer la logique de compte à rebours
let totalSeconds;

const showCountdown = () => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  seconds.toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  });

  countdownDisplay;
  console.log(minutes, seconds);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  showCountdown();
});
