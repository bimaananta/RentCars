import { Link } from 'react-router-dom';
import img from '../assets/img/car-pict.png';

export default function Hero(){
    return (
        <>
            <section id="home">
                <div className="container w-full h-fit pt-11 md:pt-0 md:h-screen flex flex-row items-center px-5">
                    <div className="main w-full h-fit px-10 py-14 grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                        <div className="main-text">
                            <p className='text-sm md:text-lg -mb-0 font-semibold text-slate-600'>Welcome To Rent Cars</p>
                            <h1 className="text-3xl md:text-[40px] text-slate-900 font-bold leading-tight">Rent Everything you need, <span className='text-yellow-400'>Fast</span> and <span className='text-yellow-400'>Simple</span></h1>
                            <p className="text-sm md:text-lg">We provides many tons of branded cars, like Super car, Sport Car, and any other stylized cars from around the world!</p>
                            <div className="flex gap-3 mt-3">
                                <Link to={'/cars'} className='px-3 py-2 text-base bg-yellow-500 text-white mt-3 transition-all block hover:-translate-y-1'>Book a Car</Link>
                                <a href='#carTypes' className='btn px-3 py-2 relative text-base bg-transparent text-slate-900 border-2 border-slate-900 mt-3'>Learn More</a>
                            </div>
                        </div>
                        <img src={img} className='flex-1 block rotate-3' />
                    </div>
                </div>
            </section>
        </>
    )
}