import { useEffect } from "react";
import { useState } from "react";
import "./Players.css";
import Available from "../Available/Available";
import Selected from "../Selected/Selected";

const Players = ({ isActiveHandler, isActive }) => {
  const [seclected, setselected] = useState([]);
  const selectHandeler = (player) => {
    const newSelected = [...seclected, player];
    setselected(newSelected);
  };
  const removeSelect = (remain) => {
    const remaimning = seclected.filter((select) => select.id !== remain);
    setselected(remaimning);
  };
  return (
    <div className=" flex  justify-between gap-3  rounded-lg font-bold">
      <div>
        {isActive.available ? (
          <Available selectHandeler={selectHandeler}></Available>
        ) : (
          <Selected
            removeSelect={removeSelect}
            seclected={seclected}
          ></Selected>
        )}
      </div>
      <div className="flex items-center rounded-lg  h-10 ">
        <div
          className={`${isActive.available ? "btn active" : "btn"} `}
          onClick={() => isActiveHandler("available")}
        >
          available
        </div>
        <div
          className={`${isActive.available ? "btn " : "btn active"} `}
          onClick={() => isActiveHandler("selected")}
        >
          selected
        </div>
      </div>
    </div>
  );
};

export default Players;
