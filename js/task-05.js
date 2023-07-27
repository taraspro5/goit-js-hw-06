const elements = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
}

console.log(elements.input);
console.log(elements.span);

elements.input.addEventListener('input', handlerChange)

function handlerChange(){
    if(elements.input.value === ""){
        elements.span.textContent = "Anonymous"
    }else{
        elements.span.textContent = elements.input.value
    }
}