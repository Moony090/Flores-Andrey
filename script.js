window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    function createShootingStar() {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.top = Math.random() * 60 + '%';
      star.style.animationDuration = (Math.random() * 1.5 + 2) + 's';

      document.querySelector('.shooting-stars').appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 4000);
    }

    setInterval(() => {
      if (Math.random() > 0.3) createShootingStar();
    }, Math.random() * 5000 + 3000);

    clearTimeout(c);
  }, 1000);
};

// 🎵 Control música
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");

document.addEventListener("click", () => {
  if (music.muted) {
    music.muted = false;
    music.play();
    toggleBtn.textContent = "🎵";
  }
}, { once: true });

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🎵";
  } else {
    music.pause();
    toggleBtn.textContent = "🔇";
  }
});

