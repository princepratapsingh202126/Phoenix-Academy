// Handle the "Reveal Your Fate" button click
document.getElementById("revealBtn").addEventListener("click", function() {
    document.getElementById("chatSection").classList.remove("hidden");
    this.classList.add("hidden");  // Hide the button after it's clicked
    addBotMessage("Welcome... You have entered a world where your choices matter. What will you do next?");
});

// Chatbot logic
document.getElementById("sendBtn").addEventListener("click", function() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        addUserMessage(userInput);
        getBotResponse(userInput);
        document.getElementById("userInput").value = ""; // Clear input field
    }
});

function addUserMessage(message) {
    let chatOutput = document.getElementById("chatOutput");
    let newMessage = document.createElement("div");
    newMessage.classList.add("user-message");
    newMessage.innerHTML = `<strong>You:</strong> ${message}`;
    chatOutput.appendChild(newMessage);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Auto scroll
}

function addBotMessage(message) {
    let chatOutput = document.getElementById("chatOutput");
    let newMessage = document.createElement("div");
    newMessage.classList.add("bot-message");
    newMessage.innerHTML = `<strong>Red Rose:</strong> ${message}`;
    chatOutput.appendChild(newMessage);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Auto scroll
}

// Basic responses
function getBotResponse(userInput) {
    if (userInput.toLowerCase().includes("who are you")) {
        addBotMessage("I am Red Rose, and I know more than you think.");
    } else if (userInput.toLowerCase().includes("help")) {
        addBotMessage("Help? There is no escape, only fate.");
    } else {
        addBotMessage("Your path is set. No matter what you choose.");
    }
}
