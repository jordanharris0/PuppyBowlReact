import { Route, Routes } from "react-router-dom";
import SinglePlayer from "./SinglePLayer";
import AllPlayers from "./AllPlayers";
import { useState } from "react";

export default function Main({ playerAdded, setPlayerAdded }) {
  const [singlePlayer, setSinglePlayer] = useState(null);
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <AllPlayers
              setSinglePlayer={setSinglePlayer}
              playerAdded={playerAdded}
              setPlayerAdded={setPlayerAdded}
            />
          }
        />
        <Route
          path="players/:id"
          element={<SinglePlayer singlePlayer={singlePlayer} />}
        />
      </Routes>
    </main>
  );
}
