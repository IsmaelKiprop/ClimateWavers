const { OpenAIApi } = require('openai'); // Use the OpenAI API library for Node.js
const OPENAI_API_KEY = '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'; // Your provided OpenAI API key

// Create an instance of the OpenAI API
const openai = new OpenAIApi({ key: OPENAI_API_KEY });

// Function to interact with the GPT-3 chatbot
async function interactWithGPT3(userMessage) {
  try {
    // Define the prompt for the chatbot
    const prompt = `User: ${userMessage}\nAI:`;

    // Use the OpenAI API to send the prompt and receive a response
    const response = await openai.createCompletion({
      engine: 'text-davinci-002', // Use the text-davinci-002 engine for chatbots
      prompt,
      max_tokens: 50, // Set the maximum response length
    });

    // Extract the chatbot's reply from the API response
    const chatbotResponse = response.choices[0].text;

    return chatbotResponse;
  } catch (error) {
    console.error('Error interacting with the chatbot:', error);
    throw error;
  }
}

module.exports = {
  interactWithGPT3,
};

