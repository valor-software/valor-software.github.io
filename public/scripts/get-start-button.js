var form = document.forms["get-in-touch"];

form.onsubmit = function () {
    validForm(this);
    return false;
};

function validForm(f) {
    var isValidName = nameValidation(f.name.value)
    var isValidEmail = emailValidation(f.email.value)
    var isValidMessage = messageValidation(f.message.value)
    if(!isValidEmail||!isValidName||!isValidMessage){
        console.log('zavernulsya');
        return false;
    }
    console.log('gotov otpravit')
    sendFormData(f.name.value,f.email.value,f.message.value)
}
function nameValidation(valueOfNameField){
    if(valueOfNameField.length<4) {
        alert('enter your full name');
        return false;
    }
    return true;

}

function emailValidation(valueOfEmailField){
    var emailPattern = /^\w+\.*\w+@\w+\-*\w+\.\w{2,4}$/i;  //regExp для проверки e-mail

    if(emailPattern.test(valueOfEmailField)){
        return true;
    }
    return false;
}

function messageValidation(valueOfMassageField){
    if(valueOfMassageField.length<4) {
        alert('enter your message more longer');
        return false;
    }
    return true;
}
function sendFormData(name,email,message){
    /*нужно улучшить код(refactoring)*/
    var xhr = new XMLHttpRequest();
    var body = { name: name,
        email: email,
        message: message }
        //'name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message); // Кодирование значений каждого инпута
    xhr.open("POST", '/form/data'); // настроили запрос
    xhr.setRequestHeader('Content-Type', ' application/json')   //Заголовок Content-Type с кодировкой для серв.
    xhr.onreadystatechange = function() {
        if(xhr.readyState===4 && xhr.status===200) {
            // пишем что будет выполняться при получении ответа с сервера (readyState:4: запрос завершен и ответ готов, status:200: "OK (все хорошо)")
console.log(xhr)
        }
    }
    xhr.send(JSON.stringify(body));
}

