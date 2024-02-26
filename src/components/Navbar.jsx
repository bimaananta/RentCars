import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";

export default function Navbar({isSticky, active}){
    const [isNavbar, setIsNavbar] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLogIn = useContext(AuthContext);

    useEffect(() => {
        if(isLogIn){
            setIsLoggedIn(true);
        }
    }, [isLogIn]);

    return (
        <header className={`w-full flex flex-row justify-between items-center px-14 py-4 transition-all duration-300 ease-out ${(isSticky) ? "bg-slate-900 shadow-md" : "bg-white"} w-full fixed top-0 z-50`}>
            <div className="logo flex flex-row gap-2 items-center">
                <i className={`bi bi-car-front-fill block text-xl md:text-2xl transition-all ${(isSticky) ? "text-white" : "text-slate-900"}`}></i>
                <h1 className={`text-xl md:text-2xl font-bold transition-all ${(isSticky) ? "text-white" : "text-slate-900"} font-['Poppins']`}>Rent<span className="text-yellow-400">Cars</span></h1>
            </div>
            <i className={`${(isNavbar) ? "bi bi-x" : "bi bi-list-nested"} transition-all cursor-pointer text-3xl ${(isSticky) ? "text-white" : ""} lg:hidden `} onClick={() => setIsNavbar(!isNavbar)}></i>
            <ul className={`absolute lg:flex lg:bg-transparent lg:static top-16 -z-50 ${(isNavbar) ? "opacity-100 flex translate-y-0" : "hidden lg:opacity-100"} left-0 gap-5 lg:gap-0 p-5 lg:p-0 ${(isSticky) ? "bg-slate-900" : "bg-white"} w-full lg:w-[80%] flex-col lg:flex-row justify-around items-center transition-all ${(isSticky) ? "text-white" : "text-slate-900"}`}>
                <li className="nav-item">
                    <Link to={'/'} className={`opacity-60 transition-all hover:opacity-90 ${(active === "home") ? "active" : ""}`}>Home</Link>
                </li>
                <li className="nav-item">
                    <a href="/#carTypes" className={`opacity-60 transition-all hover:opacity-90 ${(active === "services") ? "active" : ""}`}>Services</a>
                </li>
                <li className="nav-item">
                    <Link to={'/cars'} className={`opacity-60 transition-all hover:opacity-90 ${(active === "cars") ? "active" : ""}`}>Cars</Link>
                </li>
                {(isLoggedIn) ? (
                    <li className="nav-item">
                        <Link to={'/rental'} className={`opacity-60 transition-all hover:opacity-90 ${(active === "rental") ? "active" : ""}`}>Rental</Link>
                    </li>
                ) : (<></>)}
                <li className="nav-item">
                    <Link to={'/news'} className={`opacity-60 transition-all hover:opacity-90 ${(active === "news") ? "active" : ""}`}>News</Link>
                </li>
                {(isLoggedIn) ? (
                    <>
                        <li className="nav-item">
                            <Link to={'/profile'} className={`opacity-60 transition-all hover:opacity-90 ${(active === "profile") ? "active" : ""}`}>Profile</Link>
                        </li>
                        <li className="nav-item flex items-center gap-2 opacity-60 transition-all hover:opacity-90">
                            <i className="bi bi-box-arrow-left text-xl"></i>
                            <Link to={'/log-out'}>Log Out</Link>
                        </li>
                    </>
                ) : (<></>)}
                <div className={`auth flex flex-row gap-2 ${(isLoggedIn) ? "hidden" : ""}`}>
                    <Link to={'/login'}>
                        <p className={`opacity-100 px-4 py-2 bg-yellow-500 text-white text-sm rounded-full`}>Login</p>
                    </Link>
                    <Link to={'/sign-up'}>
                        <p className={`opacity-100 px-4 py-2 bg-blue-600 text-white text-sm rounded-full`}>Sign up</p>
                    </Link>
                </div>
            </ul>
        </header>
    );
}