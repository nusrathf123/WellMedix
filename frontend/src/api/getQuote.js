export const getMotivationalQuote = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/ai/motivation");
      const data = await response.json();
      return data.quote;
    } catch (err) {
      return "You're doing great. Take a deep breath and keep going!";
    }
  };
  