function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const name = document.getElementById("name").value;
  const discord = document.getElementById("discord").value;
  const reason = document.getElementById("reason").value;

  // Create a card to display the submitted information
  const cardContainer = document.getElementById("cardContainer");
  const card = document.createElement("div");
  card.style.border = "1px solid #ddd";
  card.style.borderRadius = "8px";
  card.style.padding = "20px";
  card.style.marginTop = "20px";
  card.style.backgroundColor = "#f9f9f9";

  card.innerHTML = `
      <h2>Please take a screenshot of this and send it to the application on
          Discord.</h2>
      <h3>Submitted Information</h3>
      <p><strong>Full Name:</strong> ${name}</p>
      <p><strong>Discord Username:</strong> ${discord}</p>
      <p><strong>Reason for Immigration:</strong></p>
      <p>${reason}</p>
    `;

  cardContainer.appendChild(card);

  // Show the overlay with the card and message
  const overlay = document.getElementById("overlay");
  const cardElement = document.getElementById("card");
  cardElement.innerHTML = card.innerHTML;
  overlay.style.display = "flex";

  // Disable refresh by alerting
  window.onbeforeunload = function () {
    return "Please take a screenshot of the card and send it to the application on Discord.";
  };

  return false;
}
