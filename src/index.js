import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PuzzleContextProvider from "./contexts/puzzleContext/PuzzleContextProvider";

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
