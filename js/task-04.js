const elements = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    span: document.querySelector('#value')
}

elements.btnDecrement.addEventListener('click', handlerClickDecrement)
elements.btnIncrement.addEventListener('click', handlerClickIncrement)
console.dir(elements.span);

function handlerClickDecrement(){
    elements.span.textContent = Number(elements.span.textContent) - 1
}

function handlerClickIncrement(){
    elements.span.textContent = Number(elements.span.textContent) + 1
}