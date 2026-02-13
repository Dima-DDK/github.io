const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  // Случайная позиция, чтобы кнопка «убегала»
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * (window.innerWidth - 150) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1>Ура! ❤️ Ты сказала Да!</h1>
    <p>Спасибо — ты самый лучший человек!</p>
  `;
});
