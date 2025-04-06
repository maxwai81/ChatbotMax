const chatbox = document.getElementById('chatbox');
const input = document.getElementById('input');
const sendBtn = document.getElementById('send');
const imageInput = document.getElementById('imageInput');

// Replace with your Gemini API key from Google AI Studio
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY';
const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent';

// Send text or image on button click
sendBtn.addEventListener('click', () => sendRequest());
input.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendRequest(); });
imageInput.addEventListener('change', () => sendRequest(true));

async function sendRequest(isImage = false) {
  let message = input.value.trim();
  let imageData = null;

  if (isImage && imageInput.files[0]) {
    const file = imageInput.files[0];
    imageData = await fileToBase64(file);
    message = 'Identify the food in this image and estimate its calories.';
    addMessage('Image uploaded', 'user');
  } else if (!message) {
    return;
  } else {
    addMessage(message, 'user');
  }

  input.value = '';
  imageInput.value = '';

  try {
    const response = await fetchGeminiResponse(message, imageData);
    addMessage(response, 'bot');
  } catch (error) {
    addMessage(`Error: ${error.message}`, 'bot');
  }
}

async function fetchGeminiResponse(text, imageData) {
  const payload = {
    contents: [{
      parts: [
        { text: text }
      ]
    }]
  };
  if (imageData) {
    payload.contents[0].parts.push({
      inline_data: { mime_type: 'image/jpeg', data: imageData.split(',')[1] }
    });
  }

  const response = await fetch(`${GEMINI_ENDPOINT}?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.textContent = `${sender === 'user' ? 'You' : 'Bot'}: ${text}`;
  div.className = `message ${sender}`;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
