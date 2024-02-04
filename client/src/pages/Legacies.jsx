import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiKey = import.meta.env.VITE_SOME_KEY;
const apiUrl = "https://api.openai.com/v1/chat/completions"
function Legacies() {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [input, setInput] = useState(''); // State to store user input
  const [loading, setLoading] = useState(false); // State to track loading state

  useEffect(() => {
    // Initial message when the component mounts
    addMessage('ChatGPT', 'Hello! I am Dr. Martin Luther King Jr. How can I assist you today?');
  }, []);

  const addMessage = (role, content) => {
    setMessages([...messages, { role, content }]);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return; // Don't send empty messages

    // Add user message to the chat
    addMessage('User', input);
    console.log(input)
    // Set loading state while waiting for a response
    setLoading(true);

    // Make an API call to a ChatGPT service to get a response
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: input,
          max_tokens: 50, // Adjust the number of tokens as needed
        }),
      });

      // Add the ChatGPT response to the chat
      addMessage('ChatGPT', response.choices[0].data.response);

      // Clear the input field and reset loading state
      setInput('');
      setLoading(false);
    } catch (error) {
      console.error('Error sending message:', error);
      setLoading(false);
    }
  };
  const centerContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Adjust the height as needed
  };
  return (
    <div style={centerContentStyle}>
      <div>
        {messages.map((message, index) => (
          <div key={index} className={message.role}>
            {message.content}
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleSendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Legacies;