import { useEffect, useState } from "react";
import CarCard from "./ui/Car-Card";
import api from "../api";

export default function SectionCars(){
    const [carsData, setCarsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('cars-section');
                setCarsData(response.data.data);
            }catch(error){
                console.log("Error fetching cars data: ", error.message);
            }
        }

        fetchData();
    }, []);
    
    return (
        <div className="container mt-5 pt-5 w-full h-fit px-5 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-1">Featured Cars</h1>
            <p className="text-slate-600">Select our best and popular cars in here</p>
            <div className="main w-full p-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {carsData.map((car, index) => (
                    <CarCard key={index} carData={car} />
                ))}
            </div>
        </div>
    );
}