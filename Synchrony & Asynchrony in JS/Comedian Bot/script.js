const joke = ["What did 0 say to 8?", "Nice belt."];
const chatContent = document.querySelector(".chat-content");

function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  chatContent.appendChild(messageDiv);
  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";
  messageDiv.appendChild(avatar);
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
  messageDiv.appendChild(contentDiv);
}
appendBotMessage(
  "Hello! I am Comedian Bot, her to make you laugh. Let me think of a joke.");
setTimeout(function() {
  appendBotMessage("Ok, got one.");
}, 1000);
setTimeout(function() {
  appendBotMessage(joke[0]);
}, 1500);
setTimeout(function() {
  appendBotMessage(joke[1]);
}, 2000);