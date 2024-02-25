import { useState } from "react";
import { Link } from 'react-router-dom';

export default function CarCard({carData}){
    const [displayLastPhoto, setDisplayLastPhoto] = useState(0);
    const [isHovered, setIsHovered] = useState({
        btn1: false,
        btn2: false
    })

    return(
        <div className="card h-fit flex flex-col shadow-md rounded-md overflow-hidden bg-white transition-all">
            <div className="wrapper h-[60%] overflow-hidden relative">
                <div className="w-full h-full bg-transparent absolute flex flex-row justify-between items-center">
                    <i className={`bi bi-chevron-left cursor-pointer text-3xl text-white z-40 block  transition-all ${(isHovered.btn1) ? "opacity-100 -translate-x-1" : "opacity-60"}`} onClick={() => setDisplayLastPhoto(!displayLastPhoto)} onMouseEnter={() => setIsHovered({...isHovered, btn1: true})} onMouseLeave={() => setIsHovered({...isHovered, btn1: false})}></i>
                    <i className={`bi bi-chevron-right cursor-pointer text-3xl text-white z-40 block  transition-all ${(isHovered.btn2) ? "opacity-100 translate-x-1" : "opacity-60"}`} onClick={() => setDisplayLastPhoto(!displayLastPhoto)} onMouseEnter={() => setIsHovered({...isHovered, btn2: true})} onMouseLeave={() => setIsHovered({...isHovered, btn2: false})}></i>
                </div>
                <img src={(carData.photo2 !== null) ? (carData.photo2.includes('https')) ? carData.photo2 : `http://192.168.1.9:8000/storage/${carData.photo2}` : ""} className={`w-full h-full object-cover transition-all`} />
                <img src={(carData.photo1 !== null) ? (carData.photo1.includes('https')) ? carData.photo1 : `http://192.168.1.9:8000/storage/${carData.photo1}` : ""} className={`w-full h-full object-cover absolute top-0 left-0 transition-all ${(displayLastPhoto) ? "opacity-100" : "opacity-0"}`} />
            </div>
            <div className="text p-5 flex flex-col justify-between flex-1">
                <div className="title">
                    <h1 className="text-2xl font-semibold">{carData.title}</h1>
                    <p className="text-base text-slate-600">{carData.description}</p>
                </div>
                <div className="bottom-part flex flex-wrap flex-row justify-between items-center mt-3 gap-3 md:gap-0">
                    <h1 className="text-xl font-medium">${carData.price}<span className="text-slate-600 font-light">/day</span></h1>
                    <div className="action flex gap-2 min-w-fit">
                        <Link to={`/cars/rent/${carData.id}`} className="px-4 py-2 text-sm text-white rounded-full bg-yellow-500 transition-all block hover:-translate-y-1">Rent Now</Link>
                        <Link to={`/cars/detail/${carData.id}`} className="px-4 py-2 text-sm text-white rounded-full bg-blue-600 transition-all block hover:-translate-y-1">Detail</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}