function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color')
}

elements.btn.addEventListener('click', handlerChangeColor)

function handlerChangeColor(){
  const color = getRandomHexColor();
  elements.span.textContent = color;
  document.body.style.backgroundColor = color;
}