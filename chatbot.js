function sendMessage() {
    // Get user input
    const userMessage = document.getElementById('user-input').value;
    if (userMessage) {
        // Display user's message in chat window
        displayMessage('You: ' + userMessage);

        // Get the bot's response based on the user's message
        const botResponse = getBotResponse(userMessage);

        // Display bot's response in chat window
        setTimeout(() => {
            displayMessage('Bot: ' + botResponse);
        }, 500); // Small delay for better effect

        // Clear the input box after sending
        document.getElementById('user-input').value = '';
    }
}

// Function to display a message in the chat window
function displayMessage(message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);

    // Auto-scroll to the bottom of the chat window
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to get bot's response based on user input
function getBotResponse(input) {
    // Convert user input to lowercase for easier matching
    const userMessage = input.toLowerCase();

    // Simple logic to match user input with predefined responses
    if (userMessage.includes('hello')) {
        return 'Hello! How can I help you today?';
    } else if (userMessage.includes('how are you')) {
        return 'I am a bot, always ready to help you!';
    } else if (userMessage.includes('price')) {
        return 'Prices vary depending on the product. Can you specify what you are looking for?';
    } else if (userMessage.includes('bye')) {
        return 'Goodbye! Have a great day!';
    } else if (userMessage.includes('thanks')) {
        return 'You are welcome!';
    } else if (userMessage.includes('discount')){
        return 'Yes, up to 40% off';
    } else if (userMessage.includes('color')) {
        return 'We have red,blue,black, and more'; 
    } else {
        // Default response if no keyword matches
        return 'Sorry, I didn\'t understand that. Can you please ask something else?';
    }
}

// Send message when user presses "Enter" key
document.getElementById('user-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
