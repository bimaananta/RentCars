import { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import api from "../api";
import {useNavigate} from 'react-router-dom'
import AuthContext from '../AuthContext';

export default function RentalPage(){
    const [rentalData, setRentalData] = useState([]);
    const isLoggedIn = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
        if(!isLoggedIn){
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('rental');
                setRentalData(response.data.data);
            }catch(error){
                console.log("Error fetching data: ", error.message);
            }
        }

        fetchData();
    }, []);

    function capitalize(word){
        let capital = word[0].toUpperCase();
        for(let i = 1; i < word.length; i++){
            capital += word[i];
        }
        return capital;
    }

    function isReturned(returnDate){
        let differ = new Date() - new Date(returnDate);
        if(differ > 0){
            return "Returned";
        }else{
            return "Still beginning";
        }
    }


    return (
        <>
            <Navbar active={"rental"} isSticky={true}/>
            <section id="rental" className="pt-11 mt-11">
                <div className="container mt-5 w-full h-screen px-5 flex flex-col">
                    <div className="w-full header flex flex-row justify-between flex-wrap items-center px-10 gap-3 md-gap-0">
                        <div className="title flex-1 min-w-fit">
                            <h1 className="text-3xl font-bold mb-1">Rental List</h1>
                            <p className="text-slate-600">The list of history rental you did</p>
                        </div>
                        <div className="search flex-1 flex flex-row gap-2">
                            <div className="search-bar flex flex-row gap-3 flex-1 border border-gray-300 rounded-md px-3 py-2">
                                <i className="bi bi-search"></i>
                                <input type="text" name="search" id="search" placeholder="Enter Search" className="outline-none border-none" onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            <button className="w-[40px] h-[40px] rounded-md bg-blue-600 text-white transition-all hover:opacity-90"><i className="bi bi-search" onClick={(e) => handleSearch(e)}></i></button>
                        </div>
                    </div>
                    <div className="main w-full h-fit p-10">
                        <table>
                            <thead>
                                <th>ID</th>
                                <th>Rental Date</th>
                                <th>Return Date</th>
                                <th>Price Total</th>
                                <th>User</th>
                                <th>Car</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                {rentalData.map((rental, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{rental.rental_date}</td>
                                        <td>{rental.return_date}</td>
                                        <td>${rental.price}</td>
                                        <td>{`${capitalize(rental.user.firstname)} ${capitalize(rental.user.lastname)}`}</td>
                                        <td>{rental.cars.title}</td>
                                        <td><div className={`${(isReturned(rental.return_date) === "Returned") ? "p-2 bg-green-500 text-white text-sm text-center rounded-full" : "p-2 bg-blue-500 text-white text-sm text-center rounded-full"}`}>{isReturned(rental.return_date)}</div></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}