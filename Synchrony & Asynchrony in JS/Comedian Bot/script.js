let jokeIndex = 0;
const jokes = [
  ["What did 0 say to 8?", "Nice belt."],
  ["If the internet is a boat, where would they park it?", "Google doc."]
];
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

function requestJoke() {
  appendUserMessage();
  if (jokeIndex >= jokes.length) {
    appendBotMessage("Sorry, I'm out of jokes for now!");
    return;
  }
  /*Dont understand why i was instructed to hide joke button after all 
  the work of making the bot capable of saying multiple jokes. 
  */
  hideButton.style.display = "none";
  setTimeout(function() {
    appendBotMessage("Ok, got one.");
  }, 1000);
  setTimeout(function() {
    appendBotMessage(jokes[jokeIndex][0]);
  }, 1500);
  setTimeout(function() {
    appendBotMessage(jokes[jokeIndex][1]);
    jokeIndex++;
    hideButton.style.display = inline - block;
  }, 2000);
}

function appendUserMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  chatContent.appendChild(messageDiv);
  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  messageDiv.appendChild(avatar);
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  messageText = "Tell me a joke";
  contentDiv.textContent = messageText;
  messageDiv.appendChild(contentDiv);
}
const hideButton = document.getElementById("joke-button");