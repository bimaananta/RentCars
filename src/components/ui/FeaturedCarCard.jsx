export default function FeaturedCar({carData}){
    return (
        <div className="card bg-white flex-1 h-fit flex flex-col rounded-lg overflow-hidden transition-all shadow-md hover:shadow-lg">
            <div className="wrapper w-full h-[60%] overflow-hidden">
                <img src={carData.image} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="text p-5 flex flex-col items-center">
                <h1 className="font-semibold text-xl text-center mb-1">{carData.title}</h1>
                <p className="text-base text-slate-600">{carData.year}</p>
            </div>
        </div>  
    );
}