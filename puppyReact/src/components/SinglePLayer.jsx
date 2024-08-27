import { Navigate, useNavigate } from "react-router-dom";

export default function SinglePlayer({ singlePlayer }) {
  const navigate = useNavigate();

  // delete player function
  async function DeletePlayer(singlePlayer) {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players/${singlePlayer}`,
        {
          method: "DELETE",
        }
      );
      console.log(response.status);
      navigate("/");
    } catch (error) {
      console.error(
        `Whoops, trouble removing player #${singlePlayer.id} from the roster!`,
        err
      );
    }
  }

  return (
    <>
      {/* rendered single player card */}
      <div className="singleCard">
        <h1>{singlePlayer.name}</h1>
        <h3>ID:{singlePlayer.id}</h3>
        <h3>Breed: {singlePlayer.breed}</h3>
        <h3>Status: {singlePlayer.status}</h3>
        <img src={singlePlayer.imageUrl} alt={singlePlayer.name} />
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            DeletePlayer(singlePlayer.id);
          }}
        >
          Delete Player
        </button>
      </div>
    </>
  );
}
