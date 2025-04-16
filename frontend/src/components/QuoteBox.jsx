import React, { useEffect, useState } from "react";
import { getMotivationalQuote } from "../api/getQuote";

const QuoteBox = () => {
  const [quote, setQuote] = useState("Loading...");

  useEffect(() => {
    getMotivationalQuote().then(setQuote);
  }, []);

  return (
    <div className="p-4 bg-white shadow-xl rounded-2xl text-center text-lg font-medium">
      💬 {quote}
    </div>
  );
};

export default QuoteBox;
