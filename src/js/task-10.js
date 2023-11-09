function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const container = document.querySelector("div#boxes");
  for (let i = 0; i < amount; i++) {
    const elem = document.createElement("div");
    elem.style.width = ``;
  }
}
