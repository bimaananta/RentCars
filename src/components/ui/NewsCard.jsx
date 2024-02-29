import { Link, useNavigate } from "react-router-dom";

export default function NewsCard({newsData, category}){
    return (
        <Link to={`/news/detail/${newsData.id_news}`} className="card bg-white flex-1 h-[200px] flex flex-row items-center shadow-md rounded-md overflow-hidden relative transition-all cursor-pointer">
            <img src={`${(newsData.image !== null) ? (newsData.image.includes("https")) ? newsData.image : `http://localhost:8000/storage/${newsData.image}` : ""}`} className="w-full h-full object-cover" />
            <div className="bg-gradient-to-t from-black opacity-60 w-full h-full absolute top-0 left-0"></div>
            <div className="absolute bottom-0 left-0 p-3 text-white block transition-all hover:-translate-y-2">
                <p>{`News / ${category}`}</p>
                <h1 className="text-xl font-semibold">{newsData.title}</h1>
                <p className="text-sm">{newsData.description}</p>
            </div>
        </Link>
    );
}