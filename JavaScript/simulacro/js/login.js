//selectores
const formLogin = document.getElementById("form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");

const URLBase = "http://localhost:3000/users";

//Eventos
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});

async function login() {
  const response = await fetch(`${URLBase}?email=${email.value}`);
  const data = await response.json();
  const user = JSON.stringify(data);
  console.log(data);

  if (!data.length) {
    console.log("Email no resgistrado");
    return;
  }
  if (data[0].password === password.value) {
    window.location.href = "administrator.html"; //en el caso del proyecto debe enviar al home
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", user);
  } else {
    console.log("Credenciales incorrectas");
  }
}
