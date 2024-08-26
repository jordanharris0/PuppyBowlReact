import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/MainSection";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Main />
      </div>
    </>
  );
}

export default App;
