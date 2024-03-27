import React, { useState } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="absolute bg-black opacity-80 inset-0 z-0">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <span
              className={`inline-block p-2 rounded-md ${
                message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 flex items-center">
        <input
          type="text"
          className="flex-1 border rounded-l py-2 px-3 focus:outline-none"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded-r py-2 px-4 ml-2 hover:bg-blue-700 focus:outline-none"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
