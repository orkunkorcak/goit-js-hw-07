function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyBc = document.querySelector("body")
const button = document.querySelector(".change-color")
button.addEventListener("click", () => {
  const code = getRandomHexColor();
  document.querySelector(".color").textContent = code;
  bodyBc.style.backgroundColor = code;
} )