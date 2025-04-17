import React from "react";
import QuoteBox from "./components/QuoteBox";
import "./App.css"; // Optional: For global styling if needed

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#333", marginBottom: "1.5rem" }}>
        🩺 WellMedix: Beat the Burnout
      </h1>
      <QuoteBox />
    </div>
  );
}

export default App;
