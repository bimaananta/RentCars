import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api";
import NewsCard from "../components/ui/NewsCard";
import { useParams } from "react-router-dom";

export default function NewsDetail(){
    const [newsDatas, setNewsDatas] = useState([]);
    const [category, setCategory] = useState("");
    const [news, setNews] = useState({});
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get(`news/${params.id}`);
                setNews(response.data.data);
            }catch(error){
                console.log("Error fetching data: ", error.message);
            }
        }

        fetchData();
    }, [params.id]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('news');
                setNewsDatas(response.data.data);
            }catch(error){
                console.log("Error fetching data: ", error.message);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        setCategory(news.category);
    }, [news]);

    console.log(news);

    return (
        <>  
            <Navbar active={"news"} isSticky={true} />
            <section id="newsDetail" className="pt-10 md:mt-10">
                <div className="container w-full h-fit mt-10 lg:mt-0 px-14 flex flex-col items-center justify-center mb-5">
                    <div className="w-full main grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <img src={(news.image && news.image.includes('https')) ? news.image : `http://localhost:8000/storage/${news.image}`} className="mt-2 rounded-md" />
                        <div className="main-text col-span-2 flex flex-col pt-0 md:pt-5">
                            <p className="text-sm lg:text-lg text-slate-600">{`News / ${(category) ? category.name : ""}`}</p>
                            <h1 className="text-2xl lg:text-3xl font-bold">{news.title}</h1>
                            <p className="text-sm lg:text-base text-slate-600 mb-2">{news.description}</p>
                            <p className="text-sm mb-3">By : {`${(news.user) ? news.user.firstname + " " + news.user.lastname : ""}`}</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod, animi omnis distinctio laboriosam eaque obcaecati culpa! Hic nobis fugit suscipit tempore assumenda quos dolore voluptatem, minus sed perspiciatis quas.</p>
                        </div>
                    </div>
                    <div className="other-news mt-10 w-full">
                        <h1 className="text-3xl font-semibold">Other News</h1>
                        <p className="text-slate-600">See another news from RentCars!</p>
                        <div className="main-content mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {newsDatas.map((news, index) => (
                                <NewsCard newsData={news} key={index} category={news.category.name} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}