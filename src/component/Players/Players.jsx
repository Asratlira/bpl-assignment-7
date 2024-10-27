import { useEffect } from "react";
import { useState } from "react";
import "./Players.css";
import Available from "../Available/Available";
import Selected from "../Selected/Selected";

const Players = ({ isActiveHandler, isActive }) => {
  return (
    <div className=" flex  justify-between gap-3  rounded-lg font-bold">
      <div>
        {isActive.available ? <Available></Available> : <Selected></Selected>}
      </div>
      <div className="flex rounded-lg border-2">
        <div
          className={`${isActive.available ? "btn active" : "btn"}`}
          onClick={() => isActiveHandler("available")}
        >
          available
        </div>
        <div
          className={`${isActive.available ? "btn " : "btn active"}`}
          onClick={() => isActiveHandler("selected")}
        >
          selected
        </div>
      </div>
    </div>
  );
};

export default Players;
