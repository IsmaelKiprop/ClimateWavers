const axios = require('axios');

// Your OpenAI API key
const apiKey = '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';

// Define a function to interact with GPT-3
async function interactWithGPT3(prompt) {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: prompt,
      max_tokens: 50, // Adjust the number of tokens as needed
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error interacting with GPT-3:', error);
    throw error;
  }
}

module.exports = {
  interactWithGPT3,
};

