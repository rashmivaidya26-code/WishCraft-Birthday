// Music Button
const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async function () {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.innerHTML = "⏸ Pause Music";
    } catch (error) {
      alert("Music play होत नाही. MP3 file तपास.");
    }
  } else {
    music.pause();
    musicBtn.innerHTML = "▶ Play Music";
  }
});

// Surprise Button
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseBtn.addEventListener("click", function () {
  surpriseMessage.classList.remove("hidden");
  surpriseBtn.innerHTML = "Surprise Opened 💗";
  surpriseBtn.disabled = true;
});