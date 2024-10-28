import Selectedone from "../SelectedOne/Selectedone";

const Selected = ({ seclected, removeSelect }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-10">
        Selected Players({seclected.length}/6){" "}
      </h1>
      {seclected.map((select) => (
        <Selectedone
          key={select.id}
          select={select}
          removeSelect={removeSelect}
        ></Selectedone>
      ))}
    </div>
  );
};

export default Selected;
