import ship from "../components/Assets/ship.jpg";
import beach_house from "../components/Assets/beach_house.jpg";
import pic1 from "../components/Assets/1.jpg";
import pic2 from "../components/Assets/2.jpg";
import pic3 from "../components/Assets/3.jpg";

const Gallery = () => {
  return (
    <div className="max-w-[1140px] w-full m-auto p-4 my-10" id="galery">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src={beach_house}
            alt=""
          />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={pic1} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={pic2} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={pic3} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={ship} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
