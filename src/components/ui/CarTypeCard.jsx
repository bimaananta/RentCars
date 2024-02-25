import { useState } from "react"

export default function CarType({carData}){
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="card flex-1 h-[300px] flex flex-row relative bg-white rounded-md overflow-hidden shadow-md" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={carData.image} className={`w-full h-full object-cover block transition-all ease-in-out ${(isHovered) ? "scale-125" : ""}`} alt="" />
            <div className={`w-full h-full absolute z-20 transition-all ease bg-gradient-to-t from-black`}></div>
            <div className="card-text z-40 p-3 absolute bottom-0 text-white">
                <h1 className="text-xl font-semibold">{carData.title}</h1>
                <p className="text-xs">{carData.description}</p>
            </div>
        </div>
    )
}