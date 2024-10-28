const Player = ({ player, selectHandeler }) => {
  const { player_img, player_name, player_country, price } = player;

  return (
    <div className=" border p-4 rounded-lg ">
      <img src={player_img} alt={`${player_name}`} />
      <div className="flex gap-2 ">
        <img src="https://img.icons8.com/?size=24&id=83190&format=png" alt="" />
        <h1>{player_name}</h1>
      </div>
      <div className=" flex justify-between mt-5 border-b">
        <div className="flex gap-2 text-slate-400  ">
          <img
            className=" h-6 text-slate-300"
            src="https://img.icons8.com/?size=30&id=LiJPyxptoDDO&format=png"
            alt=""
          />
          <h1>{player_country}</h1>
        </div>
        <button className=" bg-slate-100 rounded-lg p-2 text-sm ">
          All-Rounder
        </button>
      </div>
      <div className="mt-5 space-y-3">
        <h1>Rating</h1>
        <div className="flex justify-between">
          <h1>Left-Hand-bat</h1>
          <h1 className="text-gray-400">Left-Hand-bat</h1>
        </div>

        <div className="flex justify-between">
          <h1>Price:${price}</h1>
          <button
            onClick={() => selectHandeler(player, price)}
            className=" bg-white border p-2 rounded-lg "
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
