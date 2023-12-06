// Add custom JavaScript here
const typingElement = document.getElementById('typing-text')

console.log('waris')
function runTypingText() {
  const text = 'I am Abdul Waris'

  const typingDelay = 80
  typeText(text, typingElement, typingDelay)
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    console.log(i)
    setTimeout(() => {
      typingElement.textContent += text.charAt(i)
    }, delay * i)
  }
}
document.addEventListener('DOMContentLoaded', runTypingText)
