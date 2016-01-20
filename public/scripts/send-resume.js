'use strict';
(function () {
  var formSendResume = document.forms.resume;

  formSendResume.onsubmit = function (e) {
    e.preventDefault();
    validForm(this);
  };
  function validForm(form) {
    var isValidName = nameValidation(form);
    var isValidEmail = emailValidation(form);
    var isValidJob = jobValidation(form);
    var isValidCity = cityValidation(form);
    var isValidMessage = messageValidation(form);
    if (isValidName && isValidEmail && isValidJob && isValidCity && isValidMessage) {
      sendFormData(form.name.value, form.email.value, form.job.value, form.city.value, form.message.value);
    }
  }

  function nameValidation(form) {
    if (form.name.value.length < 4) {
      form.querySelector('#name-message').classList.add('message-show');
      return false;
    }
    form.querySelector('#name-message').classList.remove('message-show');
    return true;
  }

  function emailValidation(form) {
    var emailPattern = /^\w+\.*\w+@\w+\-*\w+\.\w{2,4}$/i;
    if (emailPattern.test(form.email.value)) {
      form.querySelector('#email-message').classList.remove('message-show');
      return true;
    }
    form.querySelector('#email-message').classList.add('message-show');
    return false;
  }

  function jobValidation(form) {
    if (form.job.value.length < 4) {
      form.querySelector('#job-message').classList.add('message-show');
      return false;
    }
    form.querySelector('#job-message').classList.remove('message-show');
    return true;
  }

  function cityValidation(form) {
    if (form.city.value.length < 4) {
      form.querySelector('#city-message').classList.add('message-show');
      return false;
    }
    form.querySelector('#city-message').classList.remove('message-show');
    return true;
  }

  function messageValidation(form) {
    if (form.message.value.length < 40) {
      form.querySelector('#text-message').classList.add('message-show');
      return false;
    }
    form.querySelector('#text-message').classList.remove('message-show');
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
    xhr.onreadystatechange = function (data) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var res = data.currentTarget.response;
        res = JSON.parse(res);
        var mess = 'Your resume success sent';
        if (!res.success) {
          mess = 'Server error try again later';
        }

        document.querySelector('.confirm-message-container').innerHTML = mess;

        openPopUpRes();
        closePopUp();
      }
    };
    xhr.send(JSON.stringify(body));
  }
})();