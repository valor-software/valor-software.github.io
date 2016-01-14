'use strict';
(function () {
  var form = document.forms['get-in-touch'];
  form.onsubmit = function (e) {
    e.preventDefault();
    validForm(this);
  };

  function validForm(form) {
    var isValidName = nameValidation(form.name.value);
    var isValidEmail = emailValidation(form.email.value);
    var isValidMessage = messageValidation(form.message.value);
    if (!isValidEmail || !isValidName || !isValidMessage) {
      return false;
    }
    sendFormData(form.name.value, form.email.value, form.message.value);
  }

  function nameValidation(valueOfNameField) {
    if (valueOfNameField.length < 4) {
      /*todo add popup message:'enter your full name'*/
      return false;
    }
    return true;
  }

  function emailValidation(valueOfEmailField) {
    var emailPattern = /^\w+\.*\w+@\w+\-*\w+\.\w{2,4}$/i;
    if (emailPattern.test(valueOfEmailField)) {
      return true;
    }
    /*todo add popup message:'enter your correct e-mail'*/
    return false;
  }

  function messageValidation(valueOfMassageField) {
    if (valueOfMassageField.length < 4) {
      /*todo add popup message:'enter your message more longer'*/
      return false;
    }
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
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        /*todo add popup message*/
      }
    };
    xhr.send(JSON.stringify(body));
  }
})();