import { useState } from "react";

export default function GridItem({ item }) {
  const [showMessage, setShowMessage] = useState(false);

  // Unique messages for each button
  const messages = {
    2: "Cheers to our special day 🎉💖!",
    4: "I wish we are always together 😊❤️, sharing our laughs 😂 and cries 😢.",
    6: "I hope we always have the blessings of everyone 🙏✨",
    8: "I love you, Baby ❤️🥰💖 You are my happiness 😊✨💫"
  };

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 10000); // Button reappears after 10 seconds
  };

  return (
    <div className="grid-item">
      {item.type === "image" ? (
        <img src={item.content} alt="Grid item" className="grid-image" />
      ) : showMessage ? (
        <p className="message">{messages[item.id]}</p>
      ) : (
        <button onClick={handleClick} className="click-button">
          Click Me
        </button>
      )}
    </div>
  );
}
