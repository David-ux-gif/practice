import { Link } from "react-router-dom";
import React from "react";

function Navigation() {
  return (
    <>
      <nav className="shadow-lg p-4">
        <ul className="flex space-x-10 font-bold justify-evenly">
           <h1 className="text-2xl font-bold text-blue-700">Wandermate</h1>
            <li>
              <Link to="/" className="text-slate-950 text-lg hover:underline ">Home</Link>
            </li>
            <li>
              <Link to="/destination" className="text-slate-950 text-lg hover:underline ">Destination</Link>
            </li>
            <li>
              <Link to="/travelpackage" className="text-slate-950 text-lg hover:underline ">Travel Packages</Link>
            </li>
            <li>
              <Link to="/hotel" className="text-slate-950 text-lg hover:underline ">Hotel</Link>
            </li>
        </ul>
      </nav>
    </>
  );
}
export default Navigation;
