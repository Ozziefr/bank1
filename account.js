document.addEventListener("DOMContentLoaded", () => {
  const users = {
    dzxgamer: { password: "1234", balance: 0 },
    moumouSTOP: { password: "youcef.hdr.", balance: 110000 },
    shadow: { password: "tizkane", balance: 60000 },
    liljay: { password: "jadhanine", balance: 0 },
    kamal: { password: "kamal221199", balance: 30000 },
    player3: { password: "securepassword", balance: 0 },
  };

  const username = sessionStorage.getItem("username");
  const messageElement = document.createElement("p");

  if (username && users[username]) {
    console.log(
      `Welcome ${username}. Your balance is $${users[username].balance}`
    );
    const welcomeMessage = document.getElementById("welcomeMessage");
    const balanceElement = document.getElementById("balance");

    welcomeMessage.textContent = `Welcome, ${username}!`;
    balanceElement.textContent = `$${users[username].balance}`;
  } else {
    console.log("User not authenticated. Redirecting to index.html");
    messageElement.textContent =
      "User not authenticated. Redirecting to home page.";
    document.body.appendChild(messageElement);
    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);
  }
});
