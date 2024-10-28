import footer from "../../assets/assets/logo-footer.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black h-full">
        <div className="flex justify-center ">
          <img src={footer} alt="" />
        </div>
        <footer className="footer text-white p-10 flex flex-col py-10 lg:flex-row justify-between w-11/12 mx-auto">
          <div>
            <h1>About Us</h1>
            <p className="text-sm font-extralight">
              We are a passionate team dedicated <br /> to providing the best
              services to our customers.
            </p>
          </div>
          <nav className=" flex flex-col ">
            <h6 className="text-xl">Quick links</h6>

            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Services</a>
          </nav>

          <form className="flex flex-col">
            <a>Subscribe</a>
            <p className="text-sm font-light">
              Subscribe to our newsletter for the latest updates.
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
          </form>
        </footer>
        <div className=" border-t p-4 ">
          <p className="text-white text-center">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
