import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "You", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const res = await fetch("/api/ai/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMsg = { sender: "WellMedix AI", text: data.reply };
    setMessages((prev) => [...prev, botMsg]);
    setInput("");
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-xl max-w-xl mx-auto mt-6">
      <div className="h-64 overflow-y-auto space-y-2 mb-4 border p-2 rounded-md">
        {messages.map((msg, i) => (
          <div key={i} className={`${msg.sender === "You" ? "text-right" : "text-left"}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 border rounded-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask me anything..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
