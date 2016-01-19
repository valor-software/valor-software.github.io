'use strict';
(function () {
  var formGetStart = document.forms['get-in-touch'];
  formGetStart.onsubmit = function (e) {
    e.preventDefault();
    validForm(this);
  };

  function validForm(form) {
    var isValidName = nameValidation(form);
    var isValidEmail = emailValidation(form);
    var isValidMessage = messageValidation(form);
    if (!isValidEmail || !isValidName || !isValidMessage) {
      return false;
    }
    sendFormData(form.name.value, form.email.value, form.message.value);
  }

  function nameValidation(form) {
    if (form.name.value.length < 4) {
      form.querySelector('#error-name-contact').classList.add('message-show');
      return false;
    }
    form.querySelector('#error-name-contact').classList.remove('message-show');
    return true;
  }

  function emailValidation(form) {
    var emailPattern = /^\w+\.*\w+@\w+\-*\w+\.\w{2,4}$/i;
    if (emailPattern.test(form.email.value)) {
      form.querySelector('#error-email-contact').classList.remove('message-show');
      return true;
    }
    form.querySelector('#error-email-contact').classList.add('message-show');
    return false;
  }

  function messageValidation(form) {
    if (form.message.value.length < 40) {
      form.querySelector('#error-message-contact').classList.add('message-show');
      return false;
    }
    form.querySelector('#error-message-contact').classList.remove('message-show');
    return true;
  }

  function sendFormData(name, email, message) {
    var xhr = new XMLHttpRequest();
    var body = {
      name: name,
      email: email,
      message: message
    };
    xhr.open('POST', '/form/data');
    xhr.setRequestHeader('Content-Type', ' application/json');
    xhr.onreadystatechange = function (data) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var res = data.currentTarget.response;
        res = JSON.parse(res);
        var mess = 'Your resume success sent';
        if (!res.success) {
          mess = 'Server error try again later';
        }

        console.log(document.querySelector('.confirm-message-container'));

        document.querySelector('.confirm-message-container').innerHTML = mess;

        openPopUpRes();
      }
    };
    xhr.send(JSON.stringify(body));
  }
})();