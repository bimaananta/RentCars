import { Link } from 'react-router-dom';
import img from '../assets/img/car-pict.png';
import { useEffect, useRef, useState } from 'react';
import api from '../api';
import NewsHeader from './ui/NewsHeader';
import NewsCard from './ui/NewsCard';

export default function Hero(){
    const [newsData, setNewsData] = useState([]);
    const sliderRef = useRef(0);
    const [scrollX, setScrollX] = useState(0);

    useEffect(() => {
        const element = sliderRef.current;

        const handleScroll = () => {
            const scrollX = element.scrollLeft;
            setScrollX(scrollX);
        }

        if(element){
            element.addEventListener('scroll', handleScroll);
        }
    }, []);

    const goToNewsPage = () => {
        const element = sliderRef.current;

        element.scrollTo({
            left: element.clientWidth,
            behavior: "smooth",
        });
    };

    console.log(scrollX);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('headline');
                setNewsData(response.data.news);
            }catch(error){
                console.log("Error fetching news headline data: ", error.message);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <section id="home">
                <div className="container w-full h-fit flex flex-row">
                    <div className="slider max-w-full h-fit px-14 pt-11 flex gap-20 overflow-x-auto" ref={sliderRef}>
                        <div className="slide-1 min-w-full h-fit pt-14 grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                            <div className="main-text" style={{animation: "showText .7s ease-in-out forwards"}}>
                                <p className='text-sm md:text-lg -mb-0 font-semibold text-slate-600'>Welcome To Rent Cars</p>
                                <h1 className="text-3xl md:text-[40px] text-slate-900 font-bold leading-tight">Rent Everything you need, <span className='text-yellow-400'>Fast</span> and <span className='text-yellow-400'>Simple</span></h1>
                                <p className="text-sm md:text-lg">We provides many tons of branded cars, like Super car, Sport Car, and any other stylized cars from around the world!</p>
                                <div className="flex gap-3 mt-3">
                                    <Link to={'/cars'} className='px-3 py-2 text-base bg-yellow-500 text-white mt-3 transition-all block hover:-translate-y-1'>Book a Car</Link>
                                    <a href='#carTypes' className='btn px-3 py-2 relative text-base bg-transparent text-slate-900 border-2 border-slate-900 mt-3'>Learn More</a>
                                </div>
                                <p className='mt-8 text-lg floating-x cursor-pointer' onClick={() => goToNewsPage()}>Scroll to see the news page <span>{`>>`}</span></p>
                            </div>
                            <img src={img} className='flex-1 block' style={{animation: "showPict .7s ease-in-out forwards"}} />
                        </div>
                        <div className="slide-2 min-w-full h-full items-center justify-center">
                            <div className="main pt-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
                                {newsData.map((news, index) => (
                                    (index === 0) ? (<NewsHeader newsData={news} category={news.category.name} key={index}/>)
                                    : (<NewsCard key={index} newsData={news} category={news.category.name}/>)
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}