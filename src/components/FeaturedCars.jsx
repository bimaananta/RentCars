import FeaturedCar from "./ui/FeaturedCarCard";

export default function FeaturedCars(){
    const featuredCars = [
        {
            image: "https://img.autotrader.co.za/17873025",
            title: "Renault Clio",
            year: "2019"
        },
        {
            image: "https://www.topgear.com/sites/default/files/2022/12/Dacia-Duster-on-road-058.jpg",
            title: "Dacia Duster",
            year: "2021"
        },
        {
            image: "https://img.gocar.be/v7/_cloud_wordpress_/2019/06/mercedes-maybach_s_650_24.jpg",
            title: "Mercedes Benz Maybach",
            year: "2019"
        },
    ]


    return (
        <div className="container mt-5 pt-5 w-full h-fit px-5 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-1">Featured Cars</h1>
            <p className="text-slate-600">Select our best and popular cars in here</p>
            <div className="main w-full p-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {featuredCars.map((car, index) => (
                    <FeaturedCar key={index} carData={car} />
                ))}
            </div>
        </div>
    );
}