import navicon from "../../assets/assets/logo.png";
import banner from "../../assets/assets/banner-main.png";
import bannerShadow from "../../assets/assets/bg-shadow.png";
import { useState } from "react";

const Header = () => {
  const [addCoins, setCoins] = useState(0);
  const eventHandeler = (add) => {
    setCoins(addCoins + add);
  };
  return (
    <div>
      <div className="flex justify-between text-center max-w-7xl mx-auto mt-10">
        <img src={navicon} alt="" />
        <div className="flex items-center gap-5 ">
          <h2>Home</h2>
          <h2>Fixture</h2>
          <h2>Schedules</h2>
          <h2>Teams</h2>
          <button className="flex items-center  btn bg-slate-100  px-2 rounded-lg">
            <span> {addCoins} coin</span>
            <img
              className="w-6"
              src="https://img.icons8.com/?size=48&id=OFHwDWASQWmX&format=png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className=" relative mt-14 max-w-7xl mx-auto ">
        <img className="block w-full  rounded-xl " src={bannerShadow} alt="" />
        <img
          className="absolute  top-0 left-1/2 transform -translate-x-1/2"
          src={banner}
          alt=""
        />
        <div className="absolute inset-1 flex flex-col items-center justify-center text-center text-black p-4 space-y-4 mt-10 ">
          <h1 className="text-4xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-lg">Beyond Boundaries Beyond Limits</p>
          <button
            onClick={() => eventHandeler(60000)}
            className="px-6 py-2 bg-green-400 rounded-lg border-2 font-bold "
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
