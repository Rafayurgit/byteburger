import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Access the root div
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
);
