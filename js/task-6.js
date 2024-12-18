function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(".numbers");
const createbtn = document.querySelector(".create");
const destroybtn = document.querySelector(".destroy");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let size = 30;
  let box = [];
  for (let i = 0; i <= amount; i++) {
    const addDiv = document.createElement("div");
    addDiv.style.width = `${size}px`;
    addDiv.style.height = `${size}px`;
    addDiv.style.backgroundColor = getRandomHexColor();
    box.push(addDiv);
    size += 10;
  }
  boxes.append(...box);
  input.value = "";
}
function destroy() {
  boxes.innerHTML = "";
  
}
createbtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("You can only enter a number between 1 and 100.")
  }
}
);
destroybtn.addEventListener("click", () => {
  destroy();
}
)


