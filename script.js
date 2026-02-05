document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const result = document.getElementById("result");
  const music = document.getElementById("bgMusic");

  yesBtn.addEventListener("click", () => {
    music.play()
      .then(() => {
        console.log("Music started ✅");
      })
      .catch(err => {
        console.log("Music blocked ❌", err);
      });

    result.innerHTML = "You just made my day 💖 Happy Valentine’s Day 🌹";
  });

  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
});
