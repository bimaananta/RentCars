import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import CarsList from "../pages/Cars";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CarDetail from "../pages/CarDetail";
import RentPage from "../pages/RentPage";
import { useState } from "react";
import Profile from "../pages/Profile";
import Logout from "../pages/Logout";
import News from "../pages/News";
import RentalPage from "../pages/RentalPage";

export default function RouteIndex(){
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/cars" element={<CarsList/>} />
                <Route path="/cars/detail/:id" element={<CarDetail/>} />

                <Route path="/login" element={<Login/>} />
                <Route path="/log-out" element={<Logout/>} />
                <Route path="/sign-up" element={<Register/>} />
                <Route path="/profile" element={<Profile/>} />

                <Route path="/cars/rent/:id" element={<RentPage/>} />
                <Route path="/news" element={<News/>} />
                <Route path="/rental" element={<RentalPage/>} />
            </Routes>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='fixed bottom-0 w-full -z-20'><path fill="#F3F4F5" fillOpacity="1" d="M0,32L34.3,26.7C68.6,21,137,11,206,32C274.3,53,343,107,411,133.3C480,160,549,160,617,133.3C685.7,107,754,53,823,74.7C891.4,96,960,192,1029,213.3C1097.1,235,1166,181,1234,144C1302.9,107,1371,85,1406,74.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </>
    );
}