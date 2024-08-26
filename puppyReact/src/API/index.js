// Fetch all players from API
const API =
  "https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players";

async function AllPlayers() {
  try {
    const response = await fetch(API);
    const json = await response.json();
    players = await json.data.players;

    return players;
  } catch (error) {
    console.error("Uh Oh, trouble fetching players!", err);
  }
}
