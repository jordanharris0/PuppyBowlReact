import { fetchAllPlayers } from "../API/index.js";
import { useEffect, useState } from "react";

export default function AllPlayers() {
  //useState
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

  //useEffect getPlayers from API
  useEffect(() => {
    async function getAllPlayers() {
      const APIresponse = await fetchAllPlayers();

      console.log(APIresponse);

      setPlayers(APIresponse);
    }
    getAllPlayers();
  }, []);

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
        {players.map((player) => {
          return (
            <>
              <div className="playerCard">
                <h3 key={player.id}>{player.name}</h3>
                <img src={player.imageUrl} alt={player.name} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
