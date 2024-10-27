import { useEffect, useState } from "react";

const Available = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold">Available Players</h1>
    </div>
  );
};

export default Available;
