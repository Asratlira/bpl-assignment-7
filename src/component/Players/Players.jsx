import { useEffect } from "react";
import { useState } from "react";
import "./Players.css";
import Available from "../Available/Available";
import Selected from "../Selected/Selected";

const Players = ({ isActiveHandler, isActive }) => {
  const [seclected, setselected] = useState([]);
  const selectHandeler = (player, price) => {
    const newSelected = [...seclected, player];
    setselected(newSelected);

    if (price <= 60000) {
      alert("Congratulations! This player is your team");
    } else {
      alert("Opps! You do not have money");
    }
  };
  const removeSelect = (remain) => {
    const remaimning = seclected.filter((select) => select.id !== remain);
    setselected(remaimning);
  };

  const addHandeler = (addmore) => {};

  return (
    <div className=" justify-between gap-3  rounded-lg font-bold  ">
      <div className="flex justify-end rounded-lg  h-10 ">
        <div
          className={`${isActive.available ? "btn active" : "btn"} `}
          onClick={() => isActiveHandler("available")}
        >
          available
        </div>
        <div
          className={`${isActive.available ? "btn " : "btn active"}  `}
          onClick={() => isActiveHandler("selected")}
        >
          selected({seclected.length})
        </div>
      </div>
      <div>
        {isActive.available ? (
          <Available selectHandeler={selectHandeler}></Available>
        ) : (
          <Selected
            removeSelect={removeSelect}
            seclected={seclected}
            addHandeler={addHandeler}
          ></Selected>
        )}
      </div>
    </div>
  );
};

export default Players;
