import { fetchAllPlayers } from "../API/index.js";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function AllPlayers({
  setSinglePlayer,
  playerAdded,
  setPlayerAdded,
}) {
  //useState
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  //useEffect getPlayers from API
  useEffect(() => {
    async function getAllPlayers() {
      const APIresponse = await fetchAllPlayers();

      console.log(APIresponse);

      setPlayers(APIresponse);
    }
    getAllPlayers();
    setPlayerAdded(false);
  }, [playerAdded]);

  console.log(players);

  //search Function
  const playersToDisplay = searchParam
    ? players.filter((players) =>
        players.name.toLowerCase().includes(searchParam)
      )
    : players;

  return (
    <>
      <div className="search">
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
      </div>

      <div id="mainSection">
        {playersToDisplay.map((player) => {
          return (
            <>
              <div className="playerCard">
                <h2 key={player}>{player.name}</h2>
                <h3 key={player.breed}>Breed: {player.breed}</h3>
                <h4 key={player.id}>ID: {player.id}</h4>
                <img
                  key={player.imageUrl}
                  src={player.imageUrl}
                  alt={player.name}
                />
                <button
                  onClick={() => {
                    setSinglePlayer(player);
                    navigate(`/players/${player.id}`);
                  }}
                >
                  More Details
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
