
function startTypingEffect(){
    const text = 'I am Maryana Katzarova.';
    const typingElement = document.getElementById('typing-text'); // Get the element where the text will be typed
    const typingDelay = 100; // Delay in milliseconds between each character

    typeText(text, typingElement, typingDelay) //passing the typeText function with the const parameters. Start typing effect
}

function typeText(text, typingElement, typingDelay){
    for (let i = 0; i < text.length; i++) { // Loop through each character in the text
        setTimeout(() => {
            typingElement.textContent += text.charAt(i); // Append the current character to the element's text content
        }, typingDelay * i); //arrow function that et a timeout for each character to create the typing effect
    }
}

document.addEventListener('DOMContentLoaded', startTypingEffect); // Event listener to start the typing effect when the DOM is fully loaded