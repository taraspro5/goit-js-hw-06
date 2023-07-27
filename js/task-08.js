const elements = {
    form: document.querySelector('.login-form')
}

elements.form.addEventListener('submit', handlerForm)

function handlerForm(evt){
    evt.preventDefault();
    const {email, password} = evt.currentTarget.elements;
    if(email.value === '' || password.value === ''){
        return alert("All fields must be filled!")
    }
    console.log(`Email: ${email.value}, password: ${password.value}`);
    evt.currentTarget.reset();
}