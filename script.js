const thankYouReply = () => {
      const responses = [
        "You're most welcome!",
        "Happy to help!",
        "Anytime! Let me know if you need anything else.",
        "Glad I could assist you!",
        "It's my pleasure!"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    };

    const speakMessage = (message) => {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.voice = synth.getVoices()[0];
      synth.speak(utterance);
    };

    const sendMessage = () => {
      const input = document.getElementById("userInput");
      const message = input.value.trim();
      if (message === "") return;

      displayMessage(message, "user");

      let botResponse;
      if (message.toLowerCase().includes("thank")) {
        botResponse = thankYouReply();
      } else {
        botResponse = "I'm Astra, your AI assistant. How can I help you today?";
      }

      setTimeout(() => {
        displayMessage(botResponse, "bot");
        speakMessage(botResponse);
      }, 600);

      input.value = "";
    };

    const displayMessage = (text, sender) => {
      const chatbox = document.getElementById("chatbox");
      const msg = document.createElement("div");
      msg.className = `message ${sender}`;
      msg.innerText = text;
      chatbox.appendChild(msg);
      chatbox.scrollTop = chatbox.scrollHeight;
    };
