import { useEffect, useState } from "react";
import api from "../api";
import NewsCard from "./ui/NewsCard";

export default function NewsCollection({serviceRef}){
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('news');
                setNewsData(response.data.data);
            }catch(error){
                console.log("Error fetching cars data: ", error.message);
            }
        }

        fetchData();
    },[]);

    return (
        <>
            <section id="carTypes" className="pt-12" ref={serviceRef}>
                <div className="container w-full h-fit flex flex-col items-center p-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-1">RentCars News</h1>
                    <p className="text-center text-sm md:text-base text-slate-600">The cars that provides by us! Ready to drive and enjoy</p>
                    <div className="card-collection mt-10 w-full h-fit grid grid-cols-1 md:grid-cols-3 px-10 gap-4">
                        {newsData.map((news, index) => (
                            <NewsCard newsData={news} category={news.category.name} key={index}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}