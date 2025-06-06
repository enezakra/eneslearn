// scripts/hf-chat.js
let HF_API_KEY = ""; // Not used here, Vercel proxy handles API key

const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

// Replace <YOUR_VERCEL_DOMAIN> with your actual Vercel deployment domain:
const HF_API_URL = 'https://<YOUR_VERCEL_DOMAIN>.vercel.app/api/chat';

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.classList.add('chat-message', sender);
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;
  addMessage(message, 'user');
  userInput.value = '';
  addMessage('Yazılıyor...', 'ai');
  try {
    const response = await fetch(HF_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });
    if (!response.ok) throw new Error('API yanıtı hatalı.');
    const data = await response.json();
    const aiText = data.response || 'Üzgünüm, yanıt alınamadı.';
    const lastAiMsg = chatBox.querySelector('.chat-message.ai:last-child');
    if (lastAiMsg) {
      lastAiMsg.textContent = aiText;
    } else {
      addMessage(aiText, 'ai');
    }
  } catch (err) {
    console.error(err);
    const lastAiMsg = chatBox.querySelector('.chat-message.ai:last-child');
    if (lastAiMsg) {
      lastAiMsg.textContent = 'Üzgünüm, şu anda bir hata oluştu. Lütfen tekrar deneyin.';
    }
  }
});