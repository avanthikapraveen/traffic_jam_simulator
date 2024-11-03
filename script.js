let seconds = 0;
let level = 1;
const timerElement = document.getElementById("timer");
const levelDisplay = document.getElementById("level-display");

function updateLevel() {
  levelDisplay.textContent = `Level ${level}`;
}

function resetTimer() {
  seconds = 0;
  timerElement.textContent = "00:00";
}

function startTimer() {
  const interval = setInterval(() => {
    seconds++;
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    timerElement.textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

    if (seconds === 50) {
      clearInterval(interval);
      showLevelCompletePopup();
    }
  }, 1000);
}

function showLevelCompletePopup() {
  const popup = document.createElement("div");
  popup.id = "level-complete-popup";
  popup.innerHTML = `
    <div class="popup-content">
      <h2>Level ${level} Complete!</h2>
      <button id="next-level-button">Next Level</button>
    </div>
  `;
  document.body.appendChild(popup);

  document.getElementById("next-level-button").addEventListener("click", () => {
    document.body.removeChild(popup);
    level++;
    updateLevel();
    resetTimer();
    startTimer();
  });
}

updateLevel();
startTimer();

const hornButton = document.getElementById("horn-button");
const hornSound = document.getElementById("horn-sound");

hornButton.addEventListener("click", () => {
  hornSound.currentTime = 0;
  hornSound.play();
});
