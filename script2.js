document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim().toLowerCase();

    // Check if the message contains any gratitude keywords
    const gratitudeKeywords = ['thanks', 'tq', 'tankoo', 'thank', 'same to you raa'];
    const containsGratitudeKeyword = gratitudeKeywords.some(keyword => message.includes(keyword));
    const containsdobbai = ['dobbai','dobbaii','dobai'].some(keyword => message.includes(keyword));

    // Display the sender's message
    if (message === 'bintu') {
        displayMessage('bintu', 'sender');
        input.placeholder = 'Type dobbai...';

        setTimeout(() => {
            displayMessages(['ha mai', 'vunna vunna', 'enti u dongiii','ninnu chaala saarlu visigichutaa kadhaa','okasari aithe na overthinking valla yedchesaav monna','parledhle bestie kadha yeduvu yeduvu 😂😂','em kaadhle thattuko','mmm by the way inkoti cheppali', 'Advanced Happy Friendship Day mai!!!','🥳🥳🥳','repu clg vundadhu gaa andhuke eroju cheppa', 'aagu niku okati choopinchali','aithe naku oka help cheyyali','okasari dobbai anochugaa appude choopisthaa'], 'bintu');
        }, 3500);
    } else if (containsGratitudeKeyword) {
        displayMessage(message, 'sender');
        setTimeout(() => {
            displayMessage('paguluddhi 😂', 'bintu');
        }, 2000);
    } else if (containsdobbai)  {
        displayMessage(message, 'sender');
        setTimeout(() => {
            displayMessages(['dobbesthunna', 'dobbesthunna', 'dobbesaaaaaaaaaaaaa','👻👻👻👻👻','sare sare choopisthale aagu','e link click chey'], 'bintu');
            setTimeout(() => {
                displayLink();
            }, 5000); // Adjust the delay if needed
        }, 2000);
    } else {
        displayMessage(message, 'sender');
    }

    input.value = '';
    input.contentEditable = false;
}

function displayMessages(messages, type) {
    messages.forEach((message, index) => {
        setTimeout(() => displayMessage(message, type), index * 1000);
    });
}

function displayMessage(message, type) {
    const chatWindow = document.getElementById('chat-window');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function displayLink() {
    const chatWindow = document.getElementById('chat-window');
    const linkDiv = document.createElement('div');
    linkDiv.className = 'message bintu'; // Use 'bintu' or any class for styling

    const linkElement = document.createElement('a');
    linkElement.href = 'sajni.mp4'; // Replace with the actual video URL
    linkElement.textContent = 'secret';
    linkElement.target = '_blank'; // Opens the link in a new tab

    linkDiv.appendChild(linkElement);
    chatWindow.appendChild(linkDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
