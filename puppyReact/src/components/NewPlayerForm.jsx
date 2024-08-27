import { useState, useEffect } from "react";
import { handleSubmit } from "../API";

export default function NewPlayer({ setPlayerAdded }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      {/* title */}
      <h1 id="title">Puppy Bowl</h1>

      {/* rendered new player form */}
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
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed:{" "}
          <input
            required
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <label>
          Image:{" "}
          <input
            required
            type="text"
            placeholder="URL"
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
