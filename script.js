function registerUser() {
  const name = document.getElementById("name").value;
  document.getElementById("message").innerText =
    "Thank you, " + name + "! You have registered successfully.";
}