import { useState, useEffect } from 'react';

function Legacies() {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [input, setInput] = useState(''); // State to store user input
  const [loading, setLoading] = useState(false); // State to track loading state

  useEffect(() => {
    // Initial message when the component mounts
    addMessage('MLK', 'Hello! I am Dr. Martin Luther King Jr. We black people have a long and complicated history.');
  }, []);

  const addMessage = (role, content) => {
    setMessages((currentMessages) => [...currentMessages, { role, content }]);
  };
  

  const handleResponseMessage = async (input) => {
    addMessage('MLK', 'I just want to confirm you said "' + input + '".');
  }
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return; // Don't send empty messages

    // Add user message to the chat
    console.log("adding user message:")
    addMessage('User', input);
    // Set loading state while waiting for a response
    setLoading(true);
    console.log("adding response:")
    handleResponseMessage(input)

    setLoading(false);
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
            {message.role}: 
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