import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Booking from './Booking';
import Users from './Users';
import Travel from './Travel';
import Hotels from './Hotels';
import Review from './Review';

const Dashboard = () => {
  return (
    <div className="w-full h-screen flex ">
      <div>
      <SideBar />
      </div>
      <div>
        <Path />
      </div>
    </div>
  );
};

export default Dashboard;

const Path = () => {
  return (
    <Routes>
      <Route path="users" element={<Users />} />
      <Route path="travels" element={<Travel />} />
      <Route path="hotels" element={<Hotels />} />
      <Route path="bookings" element={<Booking />} />
      <Route path="reviews" element={<Review />} />
    </Routes>
  );
};

const SideBar = () => {
  return (
    <div className="w-[150px] bg-gray-100 h-screen ">
      <ul className="space-y-2">
        <li>
          <Link to="users" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Users</Link>
        </li>
        <li>
          <Link to="travels" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Travel Packages</Link>
        </li>
        <li>
          <Link to="hotels" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Hotels</Link>
        </li>
        <li>
          <Link to="bookings" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Booking</Link>
        </li>
        <li>
          <Link to="reviews" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
