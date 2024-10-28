import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Players from "./component/Players/Players";
import Last from "./Last/Last";

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
  const [addCoins, setCoins] = useState(0);
  const eventHandeler = (add) => {
    setCoins(addCoins + add);
  };

  return (
    <>
      <Header eventHandeler={eventHandeler} addCoins={addCoins}></Header>
      <div className="max-w-7xl mx-auto mt-16">
        <Players
          isActiveHandler={isActiveHandler}
          isActive={isActive}
        ></Players>
      </div>
      <Last></Last>
      <Footer></Footer>
    </>
  );
}

export default App;
