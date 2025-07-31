var chatList = document.getElementById("chat-list");
var userInput = document.getElementById("user-input");
var deleteBtn = document.getElementById("delete-btn");

function sendMessage() {
  var message = userInput.value.trim();
  if (!message) return;

  addMessage("user", message);
  userInput.value = "";

  setTimeout(() => {
    var botReply = getBotReply(message);
    addMessage("bot", botReply);
  }, 500);
}

function addMessage(sender, text) {
  var messageItem = document.createElement("li");
  messageItem.classList.add(sender === "user" ? "user-message" : "bot-message");
  messageItem.textContent = text;
  chatList.appendChild(messageItem);
  chatList.scrollTop = chatList.scrollHeight;
}

function getBotReply(userMessage) {
  var msg = userMessage.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello there! 👋";
  } else if (msg.includes("how are you")) {
    return "I'm just a bot, but I'm doing great!";
  } else if (msg.includes("bye")) {
    return "Goodbye! 👋 Have a nice day!";
  } else {
    return "I didn't quite get that. Can you try again?";
  }
}

deleteBtn.addEventListener("click", () => {
  chatList.innerHTML = "";
});
