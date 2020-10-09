window.addEventListener("DOMContentLoaded", function() {


  const form = document.querySelector("#my-form"),
        userName = document.querySelector("#name"),
        email = document.querySelector("#email"),
        button = document.querySelector("#my-form-button"),
        errorName= document.querySelector('.errorName'),
        errorEmail= document.querySelector('.errorEmail'),
        status = document.querySelector("#my-form-status");


  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Merci de votre message !";
    status.style.color = "green";
  }

  function error() {
    status.innerHTML = "Oops! Il y a un problème.";
    status.style.color = "red";
    
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });

});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}


