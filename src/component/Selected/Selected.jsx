import Selectedone from "../SelectedOne/Selectedone";

const Selected = ({ seclected, removeSelect, addHandeler }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-10">
        Selected Players({seclected.length}/6){" "}
      </h1>

      {seclected.map((select, idx) => (
        <Selectedone
          key={idx}
          select={select}
          removeSelect={removeSelect}
        ></Selectedone>
      ))}
      <button
        onClick={() => addHandeler(available)}
        className="bg-green-500 p-2 rounded-lg"
      >
        Add More Player
      </button>
    </div>
  );
};

export default Selected;
