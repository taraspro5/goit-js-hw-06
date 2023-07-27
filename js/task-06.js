const input = document.querySelector('#validation-input')
const inputLength = Number(input.getAttribute('data-length'))
input.addEventListener('blur', handlerResult)

function handlerResult(e){
    if(inputLength === e.currentTarget.value.trim().length){
        input.classList.add('valid')
        input.classList.remove('invalid')
    }else{
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}