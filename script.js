const correctPassword = "1234"; // Set your password here

function unlock() {
  const inputPassword = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (inputPassword === correctPassword) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("messageBox").style.display = "block";
    error.textContent = "";
  } else {
    error.textContent = "Incorrect password.";
  }
}

function sendMessage() {
  const msg = document.getElementById("messageInput").value;
  if (msg.trim() !== "") {
    document.getElementById("confirmation").textContent = "Message sent!";
    document.getElementById("messageInput").value = "";
  }
}