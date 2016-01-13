'use strict';
(function () {
  var formSendResume = document.forms.resume;

  formSendResume.onsubmit = function (e) {
    e.preventDefault();
    validForm(this);
  };
  function validForm(f) {
    var isValidName = nameValidation(f);
    var isValidEmail = emailValidation(f);
    var isValidJob = jobValidation(f);
    var isValidCity = cityValidation(f);
    var isValidMessage = messageValidation(f);
    if (isValidName && isValidEmail && isValidJob && isValidCity && isValidMessage) {
      sendFormData(f.name.value, f.email.value, f.job.value, f.city.value, f.message.value);
    }
  }

  function nameValidation(f) {
    if (f.name.value.length < 4) {
      f.querySelector('#name-message').classList.add('message-show');
      return false;
    }
    f.querySelector('#name-message').classList.remove('message-show');
    return true;
  }

  function emailValidation(f) {
    var emailPattern = /^\w+\.*\w+@\w+\-*\w+\.\w{2,4}$/i;
    if (emailPattern.test(f.email.value)) {
      f.querySelector('#email-message').classList.remove('message-show');
      return true;
    }
    f.querySelector('#email-message').classList.add('message-show');
    return false;
  }

  function jobValidation(f) {
    if (f.job.value.length < 4) {
      f.querySelector('#job-message').classList.add('message-show');
      return false;
    }
    f.querySelector('#job-message').classList.remove('message-show');
    return true;
  }

  function cityValidation(f) {
    if (f.city.value.length < 4) {
      f.querySelector('#city-message').classList.add('message-show');
      return false;
    }
    f.querySelector('#city-message').classList.remove('message-show');
    return true;
  }

  function messageValidation(f) {
    if (f.message.value.length < 40) {
      f.querySelector('#text-message').classList.add('message-show');
      return false;
    }
    f.querySelector('#text-message').classList.remove('message-show');
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