import React, { useRef, useState } from "react";
import song from "../assets/song.mp3"; // Ensure this is the correct path

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log("Autoplay blocked:", error));
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
      {/* Hidden Audio Player */}
      <audio ref={audioRef} src={song} loop></audio>

      {/* Custom Play/Pause Button */}
      <button 
        onClick={toggleMusic} 
        style={{
          padding: "10px 15px",
          borderRadius: "50%",
          background: isPlaying ? "#ff4d4d" : "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "16px"
        }}>
        {isPlaying ? "🔇 Stop" : "🔊 Play"}
      </button>
    </div>
  );
};

export default BackgroundMusic;
