const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Функция для плавного перемещения кнопки "No"
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.transition = "all 0.3s ease";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Сообщение при нажатии на "Yes"
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1>Ура! ❤️ Ты сказала Да!</h1>
    <p>Ура💕!</p>
  `;
});

// Функция для падающих сердечек
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 24 + 12 + "px";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000); // удаляем после падения
}

// Создаём сердца каждые 200мс
setInterval(createHeart, 200);
