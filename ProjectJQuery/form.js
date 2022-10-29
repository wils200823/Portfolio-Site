let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let subjectError = document.getElementById('subject-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName(){
    let name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Enter full name';
        return false;
    }else{
        nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
}

function validateEmail(){
    let email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email is invalid';
        return false;
    }else{
        emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    }
} 