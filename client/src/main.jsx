import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { SelectionsProvider } from "./context/SelectionsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelectionsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SelectionsProvider>
  </React.StrictMode>
);
