import React, { useEffect, useState } from 'react';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    const [form, showForm] = useState(null);
    const [newHotel, setNewHotel] = useState({
        id: '',
        name: '',
        img: '',
        price: '',
        rating: '',
        freeCancellation: false,
        reserveNow: false
    })

    const handleChange = () => {
        
    }

    return (
        <div className="flex flex-col space-y-5 mx-8"> 
            <div>
                <table >
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border">Id</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Image</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Ratings</th>
                            <th className="px-4 py-2 border">Free Cancellation</th>
                            <th className="px-4 py-2 border">Reservation</th>
                            <th className="px-4 py-2 border">Update</th>
                        </tr>
                    </thead>

                    <tbody>
                        {hotels.map((hotel) => (
                            <tr key={hotel.id} className="hover:bg-gray-100 text-sm">
                                <td className="px-4 py-2 border">{hotel.id}</td>
                                <td className="px-4 py-2 border">{hotel.name}</td>
                                <td className="px-4 py-2 border">{hotel.img}</td>
                                <td className="px-4 py-2 border">{hotel.price}</td>
                                <td className="px-4 py-2 border">{hotel.rating}</td>
                                <td className="px-4 py-2 border">{hotel.freeCancellation ? "Yes" : "No"}</td>
                                <td className="px-4 py-2 border">{hotel.reserveNow ? "Available" : "Not Available"}</td>
                                <td className="py-7 px-4 border flex">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='w-full flex items-center justify-center'>
                <button className='bg-blue-500 text-white px-3 py-2 rounded'>Add</button>
            </div>
        </div>
    );
}

export default Hotels;
