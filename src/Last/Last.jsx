import bannerShadow from "../assets/assets/bg-shadow.png";

const Last = () => {
  return (
    <div>
      <div className=" relative mt-14 max-w-7xl mx-auto  ">
        <img
          className="block w-full border-2 p-4 border-transparen rounded-xl "
          src={bannerShadow}
          alt=""
        />

        <div className="absolute inset-1 flex flex-col items-center justify-center text-center text-black p-4 space-y-4 mt-10 ">
          <h1 className="text-4xl font-bold">Subscribe to our Newsletter</h1>
          <p className="text-lg">
            Get the latest updates and news right in your inbox!
          </p>
          <div>
            <div className="flex items-center gap-3 p-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md  flex-grow"
              />
              <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
