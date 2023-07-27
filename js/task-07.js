const elements = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text')
}

elements.input.addEventListener('input', handlerChange)

function handlerChange(){
    elements.span.style.fontSize = `${Number(elements.input.value)}px`
}

console.dir(elements.input);