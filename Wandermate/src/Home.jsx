import React from "react";

const Home = () => {
  return (
    <>
      <div className=" bg-[url('N:\Project-react\Wandermate\src\assets\headerImg9.jpg')] h-[80vh] bg-cover">
        <div>
          <input
            type="text"
            placeholder="Search Your Places, Destination...."
            className=" p-3 rounded-md w-80 mt-56"
          />
        </div>
      </div>

      <div className="flex items-center p-3">
        <img src="src/assets/bg.jpg" alt="" className="rounded-full w-9 h-9" />
        <h1 className="font-bold text-lg p-2">Top Destination</h1>
      </div>

      <div className="flex gap-5 ">
        <img
          src="src/assets/solukhumbuXmt1.jpg"
          className="w-72 h-80 rounded-lg"
        />
        <img src="src/assets/bg2.jpg" className="w-72 h-80 rounded-lg" />
        <img src="src/assets/img8.jpg" className="w-72 h-80 rounded-lg" />
        <img src="src/assets/img9.jpg" className="w-72 h-80 rounded-lg" />
      </div>

      <div className="flex items-center p-3">
        <img src="src/assets/bg2.jpg" alt="" className="rounded-full w-9 h-9" />
        <h1 className="font-bold text-lg p-2">Top Hotels</h1>
      </div>
      <div className="flex items-center p-3">
        <img src="src/assets/bg5.jpg" alt="" className="rounded-full w-9 h-9" />
        <h1 className="font-bold text-lg p-2">Top Travel Packages</h1>
      </div>
      <footer className="shadow-xl py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h1 className="font-bold text-lg">About Wandermate</h1>
              <p>About us</p>
              <p>Home</p>
              <p>Destinations</p>
              <p>Tours</p>
              <p>Hotels</p>
            </div>

            <div className="text-center">
              <h1 className="font-bold text-lg">Explore</h1>
              <p>Fight us</p>
              <p>Car Rentals</p>
              <p>Activities</p>
              <p>Deals</p>
            </div>

            <div className="text-center">
              <h1 className="font-bold text-lg">Trip-Advisor Sites</h1>
              <p>Contact us</p>
              <p>Terms of service</p>
              <p>Privacy Policy</p>
              <p>Terms and Condition</p>
            </div>
          </div>
          <div className="font-semibold lex justify-center w-full p-3">
                <p>&copy; 2024 Wandermate LLC All rights reserved</p>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
