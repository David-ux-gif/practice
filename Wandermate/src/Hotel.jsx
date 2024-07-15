import React, { useEffect, useState } from "react";
import Card from "./Card";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:3000/hotels");
        if (!response.ok) {
          throw new Error("Error 404! Not found");
        }
        const data = await response.json();
        setHotels(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);

  if (loading) {
    return <p className="text-center text-2xl mt-20">Loading...</p>;
  }
  if (error) {
    return (
      <p className="text-center text-2xl text-red-500 mt-20">
        Error: {error.message}
      </p>
    );
  }

  return (
    <div className="max-w-6xl m-auto rounded-lg">
      <h1 className="font-bold text-2xl pt-2 h-14 ">Hotels</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {hotels.map((hotel) => (
          <li key={hotel.id} className="bg-green-100 ">
            <Card props={hotel} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
