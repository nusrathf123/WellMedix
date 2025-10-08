import React from "react";
import QuoteBox from "./components/QuoteBox"; // 📦 Import the motivational quote box
import ChatBot from "./components/ChatBot";   // 💬 Import the chatbot

function App() {
  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🩺 WellMedix: Beat the Burnout</h1>

      {/* Quote Section */}
      <QuoteBox />

      <hr className="my-4" style={{ margin: "2rem 0" }} />

      {/* Chatbot Section */}
      <h2>🧠 Ask Our AI Anything</h2>
      <ChatBot />
    </div>
  );
}

export default App;
