import {useNavigate, useParams} from 'react-router-dom';
import Navbar from '../components/Navbar'
import { useContext, useEffect, useState } from 'react';
import api from '../api';
import AuthContext from '../AuthContext';
import Swal from 'sweetalert2';

export default function RentPage(){
    const params = useParams();
    const [carData, setCarData] = useState({});
    const [isHovered, setIsHovered] = useState({
        btn1: false,
        btn2: false
    });
    const [displaySecondImage, setDisplaySecondImage] = useState(false);
    const [data, setData] = useState({
        rental_date: null,
        return_date: null,
        user_id: 0,
        car_id: params.id,
        price: 0,
    });
    const [price, setPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const isLoggedIn = useContext(AuthContext);
    const navigate = useNavigate();

    setTimeout(() => {
        setIsLoading(false);
    }, 500)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get(`cars/${params.id}`)
                setCarData(response.data.data);
            }catch(error){
                console.log("Error fetching car data: ", error.message);
            }
        }

        fetchData()
    }, [params]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('profile', {
                    headers:{
                        "Authorization": `Bearer ${localStorage["token"]}`
                    }
                });
                setData({...data, user_id: response.data.id});
            }catch(error){
                console.log("Error fetching user data: ", error.message)
            }
        }

        fetchData();
    }, []);

    function calculatePrice(e){
        e.preventDefault();

        if(!isLoggedIn){
            navigate('/login');
            return false;
        }

        if(data.rental_date === "" || data.return_date === ""){
            alert("Please fill all the date data!");
            return false;
        }

        let differ = new Date(data.return_date) - new Date(data.rental_date);
        let price = (differ / 1000 / 60 / 60 / 24) * carData.price;
        setPrice(price);
    }

    console.log(data);
    
    async function createRental(e){
        e.preventDefault();

        const formData = new FormData();

        formData.append('rental_date', data.rental_date);
        formData.append('return_date', data.return_date);
        formData.append('price', price);
        formData.append('user_id', data.user_id);
        formData.append('car_id', data.car_id);

        console.log(formData);

        await api
            .post('rental', formData)
            .then(() => {
                Swal.fire({
                    title: "Create Rental Success!",
                    text: "Your rental is now processed by admin!",
                    icon: "success",
                    showCancelButton: false,
                    showConfirmButton: true,
                    confirmButtonColor: "#006FB9",
                }).then((result) => {
                    if(result.isConfirmed){
                        navigate('/cars');
                    }
                });
            })
            .catch((error) => {
                console.log("create rental failed: ", error.message);
                Swal.fire({
                    title: "Create rental failed!",
                    text: `An error occured: ${error.message}`,
                    icon: "error",
                    showCancelButton: true,
                    showConfirmButton: false,
                    cancelButtonColor: "#006FB9",
                });
            });
    }

    return (
        <>
            <Navbar/>
            <div className="container pt-20 md:pt-11 w-full h-fit md:h-screen flex justify-center items-center mb-5 lg:mb-0">
                <div className="main w-[90%] md:w-[800px] h-fit grid grid-cols-1 md:grid-cols-2 bg-white rounded-md shadow-md overflow-hidden">
                    <div className="wrapper overflow-hidden relative">
                        <div className="absolute w-full h-full flex items-center justify-between z-40">
                            <i className={`bi bi-chevron-left text-3xl text-white cursor-pointer ${(isHovered.btn1) ? "opacity-100" : "opacity-75"} transition-all block hover:-translate-x-1`} onMouseEnter={() => setIsHovered({...isHovered, btn1: true})} onMouseLeave={() => setIsHovered({...isHovered, btn1: false})} onClick={() => setDisplaySecondImage(!displaySecondImage)}></i>
                            <i className={`bi bi-chevron-right text-3xl text-white cursor-pointer ${(isHovered.btn2) ? "opacity-100" : "opacity-75"} transition-all block hover:translate-x-1`} onMouseEnter={() => setIsHovered({...isHovered, btn2: true})} onMouseLeave={() => setIsHovered({...isHovered, btn2: false})} onClick={() => setDisplaySecondImage(!displaySecondImage)}></i>
                        </div>
                        <img src={(carData.photo2) ? (carData.photo2.includes('https')) ? carData.photo2 : `http://192.168.1.9:8000/storage/${carData.photo2}` : ""} className="w-full h-full object-cover" />
                        <img src={(carData.photo1) ? (carData.photo2.includes('https')) ? carData.photo1 : `http://192.168.1.9:8000/storage/${carData.photo1}` : ""} className={`w-full h-full absolute top-0 left-0 transition-all object-cover ${(displaySecondImage) ? "opacity-100" : "opacity-0"}`} />
                    </div>
                    <div className="detail w-full bg-white p-5 flex flex-col items-center justify-between">
                        <h1 className="text-2xl font-semibold">{carData.title}</h1>
                        <p className="text-sm">{carData.description}</p>
                        <form className="w-full mt-3">
                            <div className="mb-3 w-full flex flex-col">
                                <label htmlFor="rental_date" className='font-semibold text-sm mb-1'>Rental Date</label>
                                <input type="date" name="rental_date" id="rental_date" className='outline-none border border-slate-400 px-2 py-2 rounded-md w-full bg-white' onChange={(e) => setData({...data, rental_date: e.target.value})} />
                            </div>
                            <div className="mb-5 w-full flex flex-col">
                                <label htmlFor="return_date" className='font-semibold text-sm mb-1'>Return Date</label>
                                <input type="date" name="return_date" id="return_date" className='outline-none border border-slate-400 px-2 py-2 rounded-md w-full bg-white' onChange={(e) => setData({...data, return_date: e.target.value})} />
                            </div>
                            <div className="mb-3 w-full flex flex-row gap-3 items-center">
                                <p className='text-base font-normal'>Total :</p>
                                <h1 className='text-3xl font-semibold'>${price}</h1>
                            </div>
                            <div className="action flex flex-row gap-2">
                                <button onClick={(e) => calculatePrice(e)} className='px-2 py-2 text-white text-center bg-blue-600 rounded-full w-full'>Calculate Price</button>
                                <button onClick={(e) => createRental(e)} className="px-2 py-2 w-full text-white rounded-full bg-yellow-500 transition-all block hover:-translate-y-1">Rent Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {(isLoading) ? (<div className="w-full h-full bg-black bg-opacity-75 absolute top-0 z-[60] flex items-center justify-center">
                <span className='loader'></span>
            </div>) : (<></>)}
        </>
    );
}