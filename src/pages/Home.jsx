import { useContext, useEffect, useRef, useState } from "react";
import ClientSays from "../components/ClientSays";
import FeaturedCars from "../components/FeaturedCars";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TypeCollection from "../components/TypeCollection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import AuthContext from "../AuthContext";

export default function Home(){
    const [scrollY, setScrollY] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const [active, setActive] = useState("home");
    const serviceRef = useRef(null);

    useEffect(() => {
        const element = serviceRef.current;
        if(scrollY >= element.offsetTop - 20){
            setActive("services")
        }else{
            setActive("home");
        }
    }, [serviceRef, scrollY]);

    const handleScroll = () => {
        const scroll = window.scrollY || document.documentElement.scrollTop;
        setScrollY(Math.floor(scroll));
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    useEffect(() => {
        if(scrollY > 1){
            setIsSticky(true)
        }else{
            setIsSticky(false)
        }
    }, [scrollY]);

    return (
        <>
            <Navbar isSticky={isSticky} active={active}/>
            <Hero/>
            <TypeCollection serviceRef={serviceRef}/>
            <FeaturedCars/>
            <WhyChooseUs/>
            <ClientSays/>
            <Footer/>
        </>
    );
}