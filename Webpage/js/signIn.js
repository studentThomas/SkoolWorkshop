function signIn() {
    const emailAddress = emailInput.value;
    const password = document.getElementById('password').value;

    fetch("http://workable-push-production.up.railway.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailAddress: emailAddress,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            console.log("Success");
            console.log("Data:", data);

            const token = data.data.token;

            console.log("Token:", token);

            localStorage.setItem("token", token);

            window.location.href = '/menu.html';
          });
        } else {
          console.log("Error");
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("Error");
        console.log(error);
      });
  }

  // Add event listener to the form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    signIn();
  });