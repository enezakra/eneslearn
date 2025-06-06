// api/chat.js
import fetch from 'node-fetch';

export default async function handler(request, response) {
  // 1) Preflight (OPTIONS) isteğini hemen döndür (CORS başlıklarıyla birlikte)
  if (request.method === 'OPTIONS') {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.status(200).end();
    return;
  }

  // 2) POST haricindeki diğer methodlar için 405 dön
  if (request.method !== 'POST') {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  // 3) POST isteği için CORS başlığını mutlaka ekle
  response.setHeader('Access-Control-Allow-Origin', '*');

  const { message } = request.body;
  if (!message || typeof message !== 'string') {
    response.status(400).json({ error: 'Bad Request: message missing or invalid.' });
    return;
  }

  const HF_API_URL = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill';
  const HF_API_KEY = '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'; // Token’ınızı zaten buraya gömdük

  try {
    const hfResponse = await fetch(HF_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${HF_API_KEY}`
      },
      body: JSON.stringify({ inputs: { text: message } })
    });

    if (!hfResponse.ok) {
      const text = await hfResponse.text();
      console.error('Hugging Face error:', text);
      response.status(502).json({ error: 'Bad Gateway: Hugging Face API error.' });
      return;
    }

    const data = await hfResponse.json();
    const aiText = data.generated_text || 'Üzgünüm, yanıt alınamadı.';
    response.status(200).json({ response: aiText });
  } catch (err) {
    console.error('Server error:', err);
    response.status(500).json({ error: 'Internal Server Error' });
  }
};
