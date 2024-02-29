import { useEffect, useState } from "react";
import ReasonCard from "./ui/ReasonCard";
import api from "../api";

export default function WhyChooseUs(){
    const [reasons, setReasons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('reason');
                setReasons(response.data.data);
            }catch(error){
                console.log("Error fetching data: ", error.message);
            }
        }

        fetchData();
    }, []);

    console.log(reasons);

    let id = 1;

    return (
        <div className="container mt-5 pt-5 w-full h-fit flex flex-col items-center px-5">
            <h1 className="font-bold text-2xl md:text-3xl mb-1">Why Choose Us</h1>
            <p className="text-center text-sm md:text-base text-slate-600">The reason why you need to choose us</p>
            <div className="main p-10 grid grid-cols-1 md:grid-cols-2">
                {reasons.map((reason, index) => (
                    <ReasonCard index={id++} reasonData={reason} key={index}/>
                ))}
            </div>
        </div>
    );
}