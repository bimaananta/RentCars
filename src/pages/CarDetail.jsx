import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import api from '../api'

export default function CarDetail(){
    const params = useParams();
    const [carData, setCarData] = useState({});
    const [isHovered, setIsHovered] = useState({
        btn1: false,
        btn2: false
    });
    const [displaySecondImage, setDisplaySecondImage] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get(`cars/${params.id}`)
                setCarData(response.data.data);
            }catch(error){
                console.log("Error fetching car data: ", error.message);
            }
        }

        fetchData()
    }, [params]);

    console.log(carData);

    return (
        <>
            <Navbar/>
            <div className="container pt-20 lg:pt-11 w-full h-fit lg:h-screen flex justify-center items-center">
                <div className="main w-[80%] lg:w-[800px] h-fit grid grid-cols-1 lg:grid-cols-2 bg-white rounded-md shadow-md overflow-hidden mb-5">
                    <div className="wrapper overflow-hidden relative">
                        <div className="absolute w-full h-full flex items-center justify-between z-40">
                            <i className={`bi bi-chevron-left text-3xl text-white cursor-pointer ${(isHovered.btn1) ? "opacity-100" : "opacity-75"} transition-all block hover:-translate-x-1`} onMouseEnter={() => setIsHovered({...isHovered, btn1: true})} onMouseLeave={() => setIsHovered({...isHovered, btn1: false})} onClick={() => setDisplaySecondImage(!displaySecondImage)}></i>
                            <i className={`bi bi-chevron-right text-3xl text-white cursor-pointer ${(isHovered.btn2) ? "opacity-100" : "opacity-75"} transition-all block hover:translate-x-1`} onMouseEnter={() => setIsHovered({...isHovered, btn2: true})} onMouseLeave={() => setIsHovered({...isHovered, btn2: false})} onClick={() => setDisplaySecondImage(!displaySecondImage)}></i>
                        </div>
                        <img src={(carData.photo2) ? (carData.photo2.includes('https')) ? carData.photo2 : `http://192.168.1.9:8000/storage/${carData.photo2}` : ""} className="w-full h-full object-cover" />
                        <img src={(carData.photo1) ? (carData.photo2.includes('https')) ? carData.photo1 : `http://192.168.1.9:8000/storage/${carData.photo1}` : ""} className={`w-full h-full absolute top-0 left-0 transition-all object-cover ${(displaySecondImage) ? "opacity-100" : "opacity-0"}`} />
                    </div>
                    <div className="detail bg-white p-5 flex flex-col items-center justify-between">
                        <h1 className="text-2xl font-semibold">{carData.title}</h1>
                        <p className="text-sm">{carData.description}</p>
                        <div className="list w-full mt-5 p-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="item flex flex-col items-center justify-center">
                                <i className="bi bi-calendar-week text-2xl"></i>
                                <h3 className="text-base font-medium">Model</h3>
                                <p className="text-base font-normal">{carData.model}</p>
                            </div>
                            <div className="item flex flex-col items-center justify-center">
                                <i className="bi bi-fuel-pump text-2xl"></i>
                                <h3 className="text-base font-medium">Fuel Type</h3>
                                <p className="text-base font-normal">{carData.fuel_type}</p>
                            </div>
                            <div className="item flex flex-col items-center justify-center">
                                <i className="bi bi-gear-fill text-2xl"></i>
                                <h3 className="text-base font-medium">Gearbox</h3>
                                <p className="text-base font-normal">{carData.gearbox}</p>
                            </div>
                        </div>
                        <div className="list-2 w-full p-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                            <div className="item flex flex-col items-center justify-center">
                                <i className="bi bi-currency-dollar text-2xl"></i>
                                <h3 className="text-base font-medium">Price</h3>
                                <p className="text-base font-normal">${carData.price}/day</p>
                            </div>
                            <div className="item flex flex-col items-center justify-center">
                                <i className="bi bi-car-front text-2xl"></i>
                                <h3 className="text-base font-medium">Available</h3>
                                <p className="text-base font-normal">{(carData.available) ? "Yes" : "No"}</p>
                            </div>
                        </div>
                        <Link to={`/cars/rent/${carData.id}`} className="px-2 py-1 w-full flex justify-center text-white rounded-full bg-yellow-500 transition-all hover:-translate-y-1">Rent Now</Link>
                    </div>
                </div>
            </div>
        </>
    );
}