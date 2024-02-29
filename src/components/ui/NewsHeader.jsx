import { Link } from "react-router-dom"

export default function NewsHeader({newsData, category}){
    return (
        <Link to={`/news/detail/${newsData.id_news}`} className="card lg:col-span-3 h-[200px] relative overflow-hidden rounded-md">
            <img src={(newsData.image.includes('https') ? newsData.image : `http://localhost:8000/storage/${newsData.image}`)} className="w-full h-full object-cover" />
            <div className="w-full h-full absolute bg-gradient-to-t from-black opacity-70 top-0 left-0"></div>
            <div className="main-text absolute bottom-0 flex flex-col text-white p-3 transition-all hover:-translate-y-2">
                <p className="text-white text-sm">{`News / ${category}`}</p>
                <h1 className="text-2xl font-semibold">{newsData.title}</h1>
                <p>{newsData.description}</p>
            </div>
        </Link>
    )
}