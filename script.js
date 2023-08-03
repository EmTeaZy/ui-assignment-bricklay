const emailInput = document.getElementById("emailInput");
const registerButton = document.getElementById("registerButton");

const storedEmail = localStorage.getItem("userEmail");
if (storedEmail) {
  emailInput.value = storedEmail;
}

registerButton.addEventListener("click", () => {
  const email = emailInput.value.trim();

  if (email) {
    localStorage.setItem("userEmail", email);
    alert("Email registered successfully!");
  } else {
    alert("Please enter a valid email address.");
  }
});
