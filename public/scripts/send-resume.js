'use strict';
(function () {
  var formSendResume = document.forms.resume;

  formSendResume.onsubmit = function () {
    validForm(this);
    return false;
  };
  function validForm(f) {
    var isValidName = nameValidation(f.name.value);
    var isValidEmail = emailValidation(f.email.value);
    var isValidJob = jobValidation(f.job.value);
    var isValidCity = cityValidation(f.city.value);
    var isValidMessage = messageValidation(f.message.value);
    if (isValidName && isValidEmail && isValidJob && isValidCity && isValidMessage) {
      sendFormData(f.name.value, f.email.value, f.job.value, f.city.value, f.message.value);
    }
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

  function jobValidation(valueOfJobField) {
    if (valueOfJobField.length < 4) {
      /*todo add popup message:'enter your Job Objective'*/
      return false;
    }
    return true;
  }

  function cityValidation(valueOfCityField) {
    if (valueOfCityField.length < 4) {
      /*todo add popup message:'enter your City*/
      return false;
    }
    return true;
  }

  function messageValidation(valueOfMassageField) {
    if (valueOfMassageField.length < 4) {
      /*todo add popup message:'enter your message more longer'*/
      return false;
    }
    return true;
  }

  function sendFormData(name, email, job, city, message) {
    var xhr = new XMLHttpRequest();
    var body = {
      name: name,
      email: email,
      job: job,
      city: city,
      message: message
    };
    xhr.open('POST', '/formSendResume/data');
    xhr.setRequestHeader('Content-Type', ' application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        /*todo add popup message*/
      }
    };
    xhr.send(JSON.stringify(body));
  }
})();