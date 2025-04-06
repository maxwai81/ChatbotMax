const chatbox = document.getElementById('chatbox');
const input = document.getElementById('input');
const sendBtn = document.getElementById('send');
const imageInput = document.getElementById('imageInput');

// Replace with your DeepSeek API key
const DEEPSEEK_API_KEY = 'sk-178e528b388b43d7b524009961cc8e25';
const DEEPSEEK_ENDPOINT = 'https://api.deepseek.com/v1/chat/completions';

sendBtn.addEventListener('click', () => sendRequest());
input.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendRequest(); });
imageInput.addEventListener('change', () => {
  addMessage('Image support not available with DeepSeek yet. Try text instead!', 'bot');
});

async function sendRequest() {
  const message = input.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  input.value = '';

  try {
    const response = await fetchDeepSeekResponse(message);
    addMessage(response, 'bot');
  } catch (error) {
    addMessage(`Error: ${error.message}`, 'bot');
  }
}

async function fetchDeepSeekResponse(text) {
  const payload = {
    model: 'deepseek-chat', // Adjust based on DeepSeek’s available models
    messages: [
      { role: 'user', content: text }
    ],
    max_tokens: 500, // Adjust as needed
    temperature: 0.7
  };

  const response = await fetch(DEEPSEEK_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  console.log('API Response:', data); // For debugging
  if (!data.choices || !data.choices[0]) {
    throw new Error('No response from DeepSeek');
  }
  return data.choices[0].message.content;
}

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.textContent = `${sender === 'user' ? 'You' : 'Bot'}: ${text}`;
  div.className = `message ${sender}`;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Removed fileToBase64 since DeepSeek doesn’t support images natively
