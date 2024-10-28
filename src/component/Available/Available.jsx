import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Available = ({ selectHandeler, removeSelect }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold">Available Players</h1>
      <div className="grid grid-cols-3 mt-10 gap-6 max-w-7xl mx-auto  ">
        {players.map((player) => (
          <Player
            key={player.id}
            selectHandeler={selectHandeler}
            player={player}
            removeSelect={removeSelect}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default Available;
