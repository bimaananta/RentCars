import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api";
import NewsCard from "../components/ui/NewsCard";

export default function News(){
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('/news');
                setNewsData(response.data.data);
            }catch(error){
                console.log("Error fetching data: ", error.message);
            }
        }

        fetchData();
    }, []);

    console.log(newsData);

    return (
        <>  
            <Navbar active={"news"} isSticky={true}/>
            <section id="news" className="pt-11 mt-11">
                <div className="container mt-5 w-full h-screen px-5">
                    <div className="w-full header flex flex-row justify-between flex-wrap items-center px-10 gap-3 md-gap-0">
                        <div className="title flex-1 min-w-fit">
                            <h1 className="text-3xl font-bold mb-1">News List</h1>
                            <p className="text-slate-600">Read all the news about the car and technology</p>
                        </div>
                        <div className="search flex-1 flex flex-row gap-2">
                            <div className="search-bar flex flex-row gap-3 flex-1 border border-gray-300 rounded-md px-3 py-2">
                                <i className="bi bi-search"></i>
                                <input type="text" name="search" id="search" placeholder="Enter Search" className="w-full outline-none border-none" onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            <button className="w-[40px] h-[40px] rounded-md bg-blue-600 text-white transition-all hover:opacity-90"><i className="bi bi-search" onClick={(e) => handleSearch(e)}></i></button>
                        </div>
                    </div>
                    <div className="main w-full h-fit p-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {newsData.map((news, index) => (
                            <NewsCard newsData={news} key={index} category={news.category.name} />
                        ))}
                    </div>  
                </div>
            </section>
        </>
    );
}