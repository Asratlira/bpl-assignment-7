import React from "react";

const Selectedone = ({ select, removeSelect }) => {
  const { player_img, player_name, id } = select;
  return (
    <div className=" max-w-7xl mx-auto border  rounded-lg mb-4 p-3">
      <div className="flex   gap-5 items-center">
        <img className="w-32" src={player_img} alt="" />
        <div className="p-2">
          <h1>{player_name}</h1>
          <h2 className="text-gray-500">left-hand-bat</h2>
        </div>
        <div onClick={() => removeSelect(id)}>
          <img
            className="h-6"
            src="https://img.icons8.com/?size=24&id=nerFBdXcYDve&format=png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Selectedone;
