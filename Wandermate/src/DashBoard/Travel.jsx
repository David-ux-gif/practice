import React, { useEffect, useState } from "react";

const Travel = () => {
  const [travels, setTravel] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTravel = async () => {
      try {
        const response = await fetch("http://localhost:3000/travelPackages");
        if (!response.ok) {
          throw new error("Network error");
        }
        const data = await response.json();
        setTravel(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchTravel();
  }, []);

  if (loading) {
    <p>Loading.....</p>;
  }

  if (error) {
    <p>Error: {error.message}</p>;
  }
  return (
    <>
      <div className="mx-8"> 
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Update</th>
              </tr>
            </thead>

            <tbody>
              {travels.map((travel) => (
                <tr key={travel.id}>
                  <td>{travel.id}</td>
                  <td>{travel.name}</td>
                  <td>{travel.img}</td>
                  <td>{travel.price}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>
    </>
  );
};

export default Travel;
