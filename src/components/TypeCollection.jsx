import { useState } from "react";
import CarType from "./ui/CarTypeCard";

export default function TypeCollection({serviceRef}){
    const [carTypes, setCarTypes] = useState([
        {
            image: "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1697101761/autoexpress/2023/10/Lamborghini%20Revuelto%202023-2.jpg",
            title: "Sports Cars",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio totam in!" 
        },
        {
            image: "https://cdn1-production-images-kly.akamaized.net/4M3IejAMnDDaMqwE9bca6mAolCw=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3702794/original/024200100_1639484631-0000474844.jpg",
            title: "Hatchback",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio totam in!" 
        },
        {
            image: "https://momobil.id/news/wp-content/uploads/2023/09/Mercedes-Benz-C-Class-W205.jpg",
            title: "Sedan",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio totam in!" 
        },
        {
            image: "https://images.unsplash.com/photo-1584345604325-f5091269a0d1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzY2xlJTIwY2FyfGVufDB8fDB8fHww",
            title: "Muscle Car",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio totam in!" 
        }
    ]);

    return (
        <>
            <section id="carTypes" className="pt-12" ref={serviceRef}>
                <div className="container w-full h-fit flex flex-col items-center p-5">
                    <h1 className="text-2xl md:text-3xl font-bold mb-1">What we bring for you</h1>
                    <p className="text-center text-sm md:text-base text-slate-600">The cars that provides by us! Ready to drive and enjoy</p>
                    <div className="card-collection mt-10 w-full h-fit grid grid-cols-1 md:grid-cols-3 px-10 gap-4">
                        {carTypes.map((carData, index) => (
                            <CarType carData={carData} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}