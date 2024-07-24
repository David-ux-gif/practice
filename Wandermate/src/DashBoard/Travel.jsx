import React, { useEffect, useState } from "react";

const Travel = () => {
  const [travels, setTravel] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newTravel, setNewTravel] = useState({
    id: "",
    name: "",
    price: "",
    img: "",
    desc: "",
  });

  const LoadTravelsFromStrg = () => {
    const storeTravels = localStorage.getItem("travels");
    if (storeTravels) {
      setTravel(JSON.parse(storeTravels));
    }
  };

  const SaveTravelsFromStrg = (travel) => {
    localStorage.setItem("travels", JSON.stringify(travel));
  };

  useEffect(() => {
    LoadTravelsFromStrg();
  }, []);

  const handleAdd = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTravel((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveHotels = () => {
    const updatedTravel = [...travels, newTravel];
    setTravel(updatedTravel);
    SaveTravelsFromStrg(updatedTravel);
    showForm(false);
    setNewTravel({
      id: "",
      name: "",
      price: "",
      img: "",
      desc: "",
    });
  };

  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchTravel = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/travelPackages");
  //       if (!response.ok) {
  //         throw new error("Network error");
  //       }
  //       const data = await response.json();
  //       setTravel(data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchTravel();
  // }, []);

  // if (loading) {
  //   <p>Loading.....</p>;
  // }

  // if (error) {
  //   <p>Error: {error.message}</p>;
  // }
  return (
    <>
      <div className="flex flex-col space-y-5 mx-8">
        <div>
          <table>
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">Id</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Image</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Update</th>
              </tr>
            </thead>

            <tbody>
              {travels.map((travel) => (
                <tr key={travel.id} className="hover:bg-gray-100 text-sm">
                  <td className="px-4 py-2 border">{travel.id}</td>
                  <td className="px-4 py-2 border">{travel.name}</td>
                  <td className="px-4 py-2 border">{travel.img}</td>
                  <td className="px-4 py-2 border">{travel.price}</td>
                  <td className="px-4 py-2 border">{travel.desc}</td>
                  <td className="py-7 px-4 border flex">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex items-center justify-center">
          <button
            className="bg-blue-700 text-white px-3 py-2 rounded"
            onClick={handleAdd}
          >
            Add Travel
          </button>
        </div>
        {showForm && (
          <div>
            <form action="">
              <div>
                <label htmlFor="">Id</label>
                <input
                  type="text"
                  name="id"
                  value={newTravel.id}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newTravel.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="">Image</label>
                <input
                  type="text"
                  name="img"
                  value={newTravel.img}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="">Price</label>
                <input
                  type="text"
                  name="price"
                  value={newTravel.price}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="">Description</label>
                <input
                  type="text"
                  name="desc"
                  value={newTravel.desc}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button onClick={handleSaveHotels}>Add Travel Packages</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Travel;
