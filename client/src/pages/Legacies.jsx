import React, { useState } from 'react';
import axios from 'axios';

const Legacies = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  // Function to handle sending the query to the ChatGPT API
  const askQuestion = async (question) => {
    try {
      const data = {
        model: "text-davinci-003", // You can choose a model suited for your needs
        prompt: `You are Martin Luther King Jr. ${question}`, // Adjust the prompt as needed
        temperature: 0.5,
        max_tokens: 100,
      };

      const options = {
        headers: {
          'Authorization': `Bearer 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`, // Replace with your actual API key
        },
      };

      const response = await axios.post('https://api.openai.com/v1/completions', data, options);
      setResponse(response.data.choices[0].text.trim());
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      setResponse('Sorry, there was an error processing your request.');
    }
  };

  return (
    <div>
      <h2>Ask Martin Luther King Jr. a Question</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a question"
      />
      <button onClick={() => askQuestion(input)}>Ask</button>
      <div>
        <p>Response:</p>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Legacies;
