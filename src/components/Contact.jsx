import pic4 from "../components/Assets/4.jpg";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send Us a Message</h2>
      <p className="text-gray-700 py-2 text-center">We are Standing by!</p>
      <div className="grid md:grid-cols-2">
        <img
          className="md:h-full w-full object-cover p-2 max-h-[500px] h-[200px]"
          src={pic4}
          alt=""
        />
        <form>
          <div className="grid grid-cols-2 ">
            <input className="border m-2 p-2" type="text" placeholder="First" />
            <input className="border m-2 p-2" type="text" placeholder="Last" />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="Email"
            />
            <input className="border m-2 p-2" type="tel" placeholder="Phone" />
            <input
              className="col-span-2 p-2 m-2 border"
              type="text"
              placeholder="Address"
            />
            <textarea
              className="col-span-2 p-2 m-2 border"
              cols="30"
              rows="10"
              placeholder="Message"></textarea>
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
