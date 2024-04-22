const colorDisplay = document.getElementById('colorDisplay');
const colorBtn = document.getElementById('colorBtn');

const colors = ["#FF5733", "#E6E6E6", "#FCB900", "#90BE6D", "#12CBC4", "#A3CB38", "#ED4C67", "#5758BB", "#FFC312", "#833471"];

colorBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  colorDisplay.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});