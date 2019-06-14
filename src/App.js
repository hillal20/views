import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hh from "./hh.js";
function App() {
  return (
    <div className="App">
      <h2>hello </h2>
      <Hh bill={5} />
      <Hh fill={6} />
    </div>
  );
}

export default App;
