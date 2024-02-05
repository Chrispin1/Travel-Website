const Booking = () => {
  return (
    <div className="max-w-[1140px] w-full m-auto p-4" id="deals">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label htmlFor="destination">Destination</label>
          <select
            className="lg:w-[300px] md:w-full border rounded-md p-2"
            name="destination"
            id="destiantion">
            <option value="grandeAntigua">Grande Antigua</option>
            <option value="keyWest">Key West</option>
            <option value="maldives">Maldives</option>
            <option value="cozumel">Cozumel</option>
          </select>
        </div>
        <div className="flex w-full items-center">
          <div className="flex flex-col lg:max-w-[250px] my-2 p-2  ">
            <label htmlFor="checkIn">Check-In</label>
            <input
              className="border rounded-md p-2"
              type="date"
              name="checkIn"
              id="checkIn"
            />
          </div>
          <div className="flex flex-col lg:max-w-[250px] my-2 p-2">
            <label htmlFor="checkOut">Check-Out</label>
            <input
              className="border rounded-md p-2"
              type="date"
              name="checkOut"
              id="checkOut"
            />
          </div>
        </div>
        <div className="flex flex-col w-full my-2 p-2">
          <label>Search</label>
          <button>Rates and availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
