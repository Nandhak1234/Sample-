import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.querySelector("#top")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);