var formSendResume = document.forms["resume"];

formSendResume.onsubmit = function () {
    var self = this;
    validForm(self);
    return false;
};
function validForm(f) {
    var isValidName = nameValidation(f.name.value);
    var isValidEmail = emailValidation(f.email.value);
    var isValidJob = jobValidation(f.job.value);
    var isValidCity = cityValidation(f.city.value);
    var isValidMessage = messageValidation(f.message.value);
    if (isValidName && isValidEmail && isValidJob && isValidCity && isValidMessage) {
        console.log('OK');
        sendFormData(f.name.value,f.email.value,f.job.value,f.city.value,f.message.value);
    } else {
        console.log('stopped');
        return false;
    }
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

function jobValidation(valueOfJobField){
    if(valueOfJobField.length<4) {
        alert('enter your Job Objective');
        return false;
    }
    return true;

}

function cityValidation(valueOfCityField){
    if(valueOfCityField.length<4) {
        alert('enter your city');
        return false;
    }
    return true;

}

function messageValidation(valueOfMassageField){
    if(valueOfMassageField.length<4) {
        alert('enter your message more longer');
        return false;
    }
    return true;
}
function sendFormData(name,email,job,city,message) {

        var xhr = new XMLHttpRequest();
        var body = {
            name: name,
            email: email,
            job: job,
            city: city,
            message: message
        };
        xhr.open("POST", '/formSendResume/data'); // настроили запрос
        xhr.setRequestHeader('Content-Type', ' application/json')   //Заголовок Content-Type с кодировкой для серв.
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // пишем что будет выполняться при получении ответа с сервера (readyState:4: запрос завершен и ответ готов, status:200: "OK (все хорошо)")
                console.log(xhr);
            }
        };
        xhr.send(JSON.stringify(body));
    }
