import "./App.css";
import Header from "./component/Header/Header";
import Players from "./component/Players/Players";
import Selected from "./component/Selected/Selected";
import Available from "./component/Available/Available";
import { useState } from "react";

function App() {
  const [isActive, setActive] = useState({
    available: true,
    status: "active",
  });
  const isActiveHandler = (status) => {
    if (status == "available") {
      setActive({ available: true, status: "active" });
    } else {
      setActive({
        available: false,
        status: "active",
      });
    }
  };

  return (
    <>
      <Header></Header>
      <div className="max-w-7xl mx-auto mt-16">
        <Players
          isActiveHandler={isActiveHandler}
          isActive={isActive}
        ></Players>
      </div>
    </>
  );
}

export default App;
