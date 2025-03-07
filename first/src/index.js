import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import
import App from "./App";
import "./styles.css"; // Ensure your styles are imported

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
