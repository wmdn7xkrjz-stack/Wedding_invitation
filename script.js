// Countdown to July 31, 2026
const weddingDate = new Date("July 31, 2026 12:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Եթե ամսաթիվն արդեն անցել է
  if (distance < 0) {
    countdownEl.innerHTML = "The Big Day has arrived!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Music toggle
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
let isPlaying = false;
let isFirstPlay = true; // Ստուգում է՝ արդյոք երգը առաջին անգամ է միանում

toggleBtn.addEventListener("click", function() {
  if (isPlaying) {
    music.pause();
    musicIcon.src = "https://img.icons8.com/ios-filled/50/000000/mute.png";
  } else {
    
    // Եթե առաջին անգամ է միանում, տեղափոխում ենք կրկներգի վայրկյանին
    if (isFirstPlay) {
      // ⬇️ ՓՈԽԻՐ ԱՅՍ ԹԻՎԸ. Գրիր այն վայրկյանը, որտեղից սկսվում է կրկներգը:
      // Օրինակ՝ եթե սկսվում է 1 րոպե 15 վայրկյանից, գրիր 75 (60 + 15):
      music.currentTime = 45; 
      isFirstPlay = false; // Որպեսզի հաջորդ անգամ pause/play անելիս երգը հետ չգնա
    }

    music.play().then(() => {
      musicIcon.src = "https://img.icons8.com/ios-filled/50/000000/speaker.png";
    }).catch(error => {
      console.log("Նվագարկման սխալ:", error);
    });
  }
  isPlaying = !isPlaying;
});