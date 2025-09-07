import React from "react";
import "./FloatingTelegram.css";

const FloatingTelegram: React.FC = () => {
  return (
    <a
      href="https://t.me/trlworld" // replace with your actual Telegram link
      target="_blank"
      rel="noopener noreferrer"
      className="tg-float"
      aria-label="Chat with us on Telegram"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240 240"
        width="26"
        height="26"
        fill="white"
      >
        <path d="M120 0C53.7 0 0 53.7 0 120c0 66.3 53.7 120 120 120s120-53.7 120-120C240 53.7 186.3 0 120 0zm58 80l-23.3 110.1c-1.8 7.8-6.4 9.7-13 6l-36-26.5-17.4 16.8c-1.9 1.9-3.4 3.4-7 3.4l2.5-36.2 65.9-59.5c2.9-2.5-.6-3.9-4.5-1.4l-81.5 51-35.2-11c-7.6-2.4-7.8-7.6 1.6-11.3l137.5-53.1c6.2-2.3 11.6 1.5 9.6 10.7z" />
      </svg>
    </a>
  );
};

export default FloatingTelegram;
