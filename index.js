document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  const users = {
    dzxgamer: { password: "1234", balance: 0 },
    moumouSTOP: { password: "youcef.hdr.", balance: 110000 },
    shadow: { password: "tizkane", balance: 60000 },
    liljay: { password: "jadhanine", balance: 0 },
    kamal: { password: "kamal221199", balance: 30000 },
    Eclairy: { password: "halamadrid", balance: 76400 },
    Alpha: { password: "AlphaX091", balance: 100000 },
  };
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const messageElement = document.createElement("p");
    messageElement.style.color = "red";

    if (users[username] && users[username].password === password) {
      console.log(`Logging in as ${username}. Redirecting to account.html`);
      sessionStorage.setItem("username", username);
      window.location.href = "account.html";
    } else {
      console.log("Incorrect username or password");
      messageElement.textContent = "Incorrect username or password";
      loginForm.appendChild(messageElement);
    }
  });
});
