import React, { useEffect, useState } from 'react';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newHotel, setNewHotel] = useState({
        id: '',
        name: '',
        img: '',
        price: '',
        rating: '',
        freeCancellation: false,
        reserveNow: false,
        desc: ''
    })

    const loadHotelsFromLocalStrg = () => {
        const storedHotels = localStorage.getItem('hotels');
        if (storedHotels){
            setHotels(JSON.parse(storedHotels))
        }
    }

    const saveHotelsToLocalStrg = (hotels) => {
        localStorage.setItem ('hotels', JSON.stringify(hotels));
    };

    useEffect(()=>{
        loadHotelsFromLocalStrg();
    }, [])

    const handleAdd = () =>{
        setShowForm(true);
    }


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewHotel(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSaveHotels = () => {
        const updatedHotels = [...hotels, newHotel];
        setHotels(updatedHotels);
        saveHotelsToLocalStrg(updatedHotels);
        setShowForm(false);
        setNewHotel({
            id: '',
            name: '', 
            img: '',
            price: '',
            rating: '',
            freeCancellation: false,
            reserveNow: false,
            desc:''
        });
    };
    


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
                <button className='bg-blue-700 text-white px-3 py-2 rounded' onClick={handleAdd}>Add Hotel</button>
            </div>

            {showForm&& (
                <div>
                    <form action="">
                        <div>
                            <label htmlFor="">Id</label>
                            <input type="text" name='id' value={newHotel.id} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" name='name' value={newHotel.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="">Image</label>
                            <input type="text" name='img' value={newHotel.img} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="">Price</label>
                            <input type="text" name='price' value={newHotel.price} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="">Ratings</label>
                            <input type="text" name='rating' value={newHotel.rating} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="">Free Cancellation</label>
                            <input type="checkbox" name='freeCancellation' value={newHotel.freeCancellation} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="">Reservation</label>
                            <input type="checkbox" name='reserveNow' value={newHotel.reserveNow} onChange={handleChange} />
                        </div>
                        <div>
                            <button onClick={handleSaveHotels}>Add new hotel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
        

    );

    
}


export default Hotels;
