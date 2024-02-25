export default function NewsCard({newsData}){
    return (
        <div className="card bg-white w-full h-fit flex flex-col shadow-md rounded-md">
            <div className="wrapper h-[60%] overflow-hidden rounded-md">
                <img src={`${(newsData.image !== null) ? (newsData.image.includes("https")) ? newsData.image : `http://localhost:8000/storage/${newsData.image}` : ""}`} className="" />
            </div>
            <div className="main-text p-5">
                <h1 className="text-2xl font-semibold mb-2">{newsData.title}</h1>
                <p className="text-slate-600">{newsData.description}</p>
                <div className="action w-full flex mt-3">
                    <button className="w-full p-2 text-sm bg-yellow-500 text-white rounded-full">See More</button>
                </div>
            </div>
        </div>
    );
}