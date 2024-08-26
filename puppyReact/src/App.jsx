import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/MainSection";
import NewPlayer from "./components/NewPlayerForm";
import { useState } from "react";

function App() {
  const [playerAdded, setPlayerAdded] = useState(false);

  return (
    <>
      <div>
        <NavBar />
        <NewPlayer setPlayerAdded={setPlayerAdded} />
        <Main playerAdded={playerAdded} setPlayerAdded={setPlayerAdded} />
      </div>
    </>
  );
}

export default App;
