import house from "../components/Assets/house.jpg";
import cruise from "../components/Assets/cruise.jpg";
import excursions from "../components/Assets/excursions.jpg";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-55px]">
      <div className="relative p-4 flex-1">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={house}
          alt="/"
        />
      </div>
      <div className="relative p-4 flex-1">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={cruise}
          alt="/"
        />
      </div>
      <div className="relative p-4 flex-1">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={excursions}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Activities;
