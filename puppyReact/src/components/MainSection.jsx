import { Route, Routes } from "react-router-dom";
import SinglePlayer from "./SinglePLayer";
import AllPlayers from "./AllPlayers";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="players/:id" element={<SinglePlayer />} />
      </Routes>
    </main>
  );
}
