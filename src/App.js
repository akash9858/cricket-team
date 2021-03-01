import { useEffect, useState } from "react";
import "./App.css";
import Player from "./components/player/team/Player/Player";
import Team from "./components/player/team/Team/Team";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [player, setPlayer] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("https://api.mocki.io/v1/bb675702")
      .then((res) => res.json())
      .then((data) => setPlayer(data))
      .catch((error) => setPlayer(error));
  }, []);

  const handelTeam = (player) => {
    const newTeam = [...team, player];
    setTeam(newTeam);
  }

  return (
    <div className="App">
      <Team team={team} > </Team>
      <header className="App-header">
        {player.map((players) => (
          <Player player={players} key={player.id} handelTeam={handelTeam}> </Player>
        ))}
      </header>
    </div>
  );
}
export default App;
