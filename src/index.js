import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PuzzleContextProvider from "./contexts/puzzleContext/PuzzleContextProvider";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PuzzleContextProvider>
        <App />
      </PuzzleContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
