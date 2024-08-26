// Fetch all players from API
const API =
  "https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players";

export async function fetchAllPlayers() {
  try {
    const response = await fetch(API);
    const json = await response.json();
    const players = await json.data.players;

    console.log(players);

    return players;
  } catch (error) {
    console.error("Uh Oh, trouble fetching players!", error);
  }
}
