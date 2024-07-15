import React, { useEffect, useState } from "react";

const Destination = () => {
    const [title, setTitles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDestination = async () => {
            try{
                const response = await fetch('http://localhost:3000/destination');
                if(!response.ok) {
                    throw new Error('Error 404! not found')
                }
                const data = await response.json();
                setTitles(data);
                setLoading(false);

            } catch(error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchDestination();
    }, []);

    if (loading) {
        return <p>Loading......</p>
    }
    if (error) {
        return <p>Error: {error.message}</p>
    }

    return(
        <>
            <div className=" bg-[url('N:\Project-react\Wandermate\src\assets\solukhumbuXmt.jpg')] h-[90vh] bg-cover">
                <div className="grid justify-end p-10 text-3xl font-bold ">
                <p  className="bg-white p-2 rounded"> Explore <span className="text-orange-600">Solukhumbu</span></p>
                </div>
            </div>

            <div className="flex items-center p-3">
                <img src="src/assets/bg.jpg" alt="" className="rounded-full w-9 h-9"/>
                <h1 className="font-bold text-lg p-2">Top Destination</h1>
            </div>

            
            <div className="flex items-center p-3">
                <img src="src/assets/bg2.jpg"alt="" className="rounded-full w-9 h-9"/>
                <h1 className="font-bold text-lg p-2">Top Hotels</h1>
            </div>
            <div className="flex items-center p-3">
                <img src="src/assets/bg5.jpg" alt="" className="rounded-full w-9 h-9"/>
                <h1 className="font-bold text-lg p-2">Top Travel Packages</h1>
            </div>

            <div className="flex gap-5 ">
                <img src="src/assets/Swimming5.jpg" className="w-72 h-80 rounded-lg"/>
                <img src="src/assets/Gym.jpg" className="w-72 h-80 rounded-lg"/>
                <img src="src/assets/Spa2.jpg" className="w-72 h-80 rounded-lg"/>
                <img src="src/assets/Tennis3.jpg" className="w-72 h-80 rounded-lg"/>
            </div>

            <footer className="shadow-xl py-14">
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
                    <div className="font-semibold flex justify-center p-3">
                        <p>&copy; 2024 Wandermate LLC All rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Destination

