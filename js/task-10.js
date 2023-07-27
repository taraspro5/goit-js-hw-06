function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  box: document.querySelector('#boxes')
}

elements.btnCreate.addEventListener('click', createBoxes)
elements.btnDestroy.addEventListener('click', destroyBoxes)

function createBoxes(amount){
  amount = elements.input.value;
  let arrBoxes = [];
  let boxSize = 30;
  for(let i = 0; i < amount; i++){
    const randomColor = getRandomHexColor();
    const box = `<div style="width:${boxSize}px; height:${boxSize}px; background-color:${randomColor}"></div>`;
    boxSize+=10;
    arrBoxes.push(box);
  }
  // arrBox.join('')
  const boxes = arrBoxes.join('');
  elements.box.innerHTML = boxes;
}

function destroyBoxes(){
  elements.box.innerHTML = '';
  elements.input.value = 0;
}