import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <BsChatSquareDots
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center mr-6">
          <AiOutlineClockCircle
            className="text-[var(--primary-dark)] mr-2"
            size={20}
          />
          <p className="text-sm text-gray-700">9AM-5AM</p>
        </div>
        <div className="hidden md:flex items-center mr-6">
          <AiFillPhone className="text-[var(--primary-dark)] mr-2" size={20} />
          <p className="text-sm text-gray-700">1-923-732-9377</p>
        </div>
        <button>Get a Free Quote</button>
      </div>
    </div>
  );
};

export default TopBar;
