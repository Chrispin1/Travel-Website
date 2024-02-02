import background from "../components/Assets/background.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img className="w-full h-full object-cover" src={background} alt="" />
      <div className="mx-w-[1150px] m-auto">
        <div className="absolute top-[40%] text-white flex flex-col max-w-[600px] h-full">
          <h1 className="text-4xl font-bold ">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            eum eveniet rerum tempora facere incidunt at numquam quod neque est,
            hic qui sed asperiores id placeat molestiae laudantium nam enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
