import { Navigate, useNavigate } from "react-router-dom";

export default function SinglePlayer({ singlePlayer }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="singleCard">
        <h1>{singlePlayer.name}</h1>
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
      </div>
    </>
  );
}
