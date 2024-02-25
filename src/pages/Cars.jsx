import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api";
import CarCard from "../components/ui/Car-Card";

export default function CarsList(){
    const [isSticky, setIsSticky] = useState(true);
    const [carsData, setCarsData] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        try{
            const response = await api.get(`cars/search/${search}`);
            setCarsData(response.data.data);
        }catch(error){
            console.log("Error fetching search data: ", error.message);
        }
    }

    console.log(search);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('cars');
                setCarsData(response.data.data);
            }catch(error){
                console.log("Error fetching data: ", error.message);
            }
        }

        fetchData();
    }, []);
 

    return(
        <>
            <Navbar isSticky={isSticky} active={"cars"}/>
            <section id="cars" className="w-full pt-11 mt-11">
                <div className="container mt-5 w-full h-fit px-5 flex flex-col items-center">
                    <div className="w-full header grid grid-cols-1 md:grid-cols-2 px-10 gap-3 md-gap-0">
                        <div className="title flex-1 min-w-fit">
                            <h1 className="text-3xl font-bold mb-1">Rental Car List</h1>
                            <p className="text-slate-600">All the cars that we provide for you</p>
                        </div>
                        <div className="search flex flex-row gap-2">
                            <div className="search-bar h-fit flex flex-row gap-3 flex-1 border border-gray-300 rounded-md px-3 py-2">
                                <i className="bi bi-search"></i>
                                <input type="text" name="search" id="search" placeholder="Enter Search" className="outline-none w-full h-fit" onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            <button className="w-[40px] h-[40px] rounded-md bg-blue-600 text-white transition-all hover:opacity-90"><i className="bi bi-search" onClick={(e) => handleSearch(e)}></i></button>
                        </div>
                    </div>
                    <div className={`w-full main p-10 grid ${(carsData.length === 0) ? "grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-4`}>
                        {(carsData.length !== 0) ? carsData.map((car, index) => (
                            <CarCard carData={car} key={index} />
                        )) : (
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border">
                                <div className="flex-1 h-[200px] rounded-md bg-slate-300 animate-pulse"></div>
                                <div className="flex-1 h-[200px] rounded-md bg-slate-300 animate-pulse"></div>
                                <div className="flex-1 h-[200px] rounded-md bg-slate-300 animate-pulse"></div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}