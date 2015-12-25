var form = document.forms["get-in-touch"];
function validForm(f) {
    var isValidName = nameValidation(f.name.value)
    var isValidEmail = emailValidation(f.email.value)
    var isValidMessage = messageValidation(f.message.value)
    if(!isValidEmail||!isValidName||!isValidMessage){
        console.log('zavernulsya');
        return false;
    }
    console.log('gotov otpravit')

}
function nameValidation(valueOfNameField){
    if(valueOfNameField.length<4) {
        console.log('enter your full name');
        return false;
    }
    return true;

}

function emailValidation(valueOfEmailField){
    var emailPattern = /^\w+@\w+\.\w{2,4}$/i;  //regExp для проверки e-mail

    if(emailPattern.test(valueOfEmailField)){
        return true;
    }
    return false;
}

function messageValidation(valueOfMassageField){
    if(valueOfMassageField.length<40) {
        console.log('enter your message more longer');
        return false;
    }
    return true;
}
