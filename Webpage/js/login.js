
function login() {
    const emailAddress = "thomas@gmail.com";
    const password = "secret123";

    fetch("http://127.0.0.1:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailAdress: emailAddress,
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


