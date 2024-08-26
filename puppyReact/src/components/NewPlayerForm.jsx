import { useState, useEffect } from "react";
import { handleSubmit } from "../API";

export default function NewPlayer({ setPlayerAdded }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      <h1>New Player</h1>

      <form
        onSubmit={(e) => {
          handleSubmit(e, name, breed, imageUrl);
          setName("");
          setBreed("");
          setImageUrl("");
          setPlayerAdded(true);
        }}
      >
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed:{" "}
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <label>
          Image URL:{" "}
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
