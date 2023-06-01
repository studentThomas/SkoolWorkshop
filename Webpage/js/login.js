document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the stored state of the "Remember me" checkbox and email from local storage
  var rememberMe = localStorage.getItem('rememberMe');
  var storedEmail = localStorage.getItem('email');
  var rememberMeCheckbox = document.getElementById('rememberMe');
  var emailInput = document.getElementById('email');

  // Check if the "Remember me" checkbox was previously checked
  if (rememberMe === 'true') {
    rememberMeCheckbox.checked = true;
    emailInput.value = storedEmail; // Populate the email field with the stored email
  }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve the entered email and password
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Perform validation or authentication logic
  // Example: Check if email and password are valid

  if (email === 'admin@gmail.com' && password === 'secret') {
    alert('Login successful');
    // Store the state of the "Remember me" checkbox and email in local storage
    var rememberMeCheckbox = document.getElementById('rememberMe');
    localStorage.setItem('rememberMe', rememberMeCheckbox.checked);
    localStorage.setItem('email', rememberMeCheckbox.checked ? email : '');

    window.location.href = '/menu.html'; // Redirect to menu.html
  } else {
    alert('Invalid email or password');
  }
});
