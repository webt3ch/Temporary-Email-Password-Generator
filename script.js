function generateCredentials() {
    var email = "user" + Math.floor(Math.random() * 1000) + "@example.com";
    var password = generatePassword();
    document.getElementById("credentials").innerHTML = "<p>Email: " + email + "</p><p>Password: " + password + "</p>";
}

function generatePassword() {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var password = "";
    for (var i = 0; i < 8; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

function sendMessage(event) {
    event.preventDefault();
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value.trim();
    if (message !== "") {
        var messagesDiv = document.getElementById("messages");
        var newMessage = document.createElement("div");
        newMessage.textContent = message;
        messagesDiv.appendChild(newMessage);
        messageInput.value = "";
    }
}
