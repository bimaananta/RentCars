import { useContext, useEffect, useState } from "react"
import api from "../api";
import Navbar from "../components/Navbar";
import AuthContext from "../AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Profile(){    
    const [userData, setUserData] = useState({});
    const isLoggedIn = useContext(AuthContext);
    const navigate = useNavigate();

    console.log(isLoggedIn);

    useEffect(() => {
        if(!isLoggedIn){
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('profile', {
                    headers:{
                        "Authorization": `Bearer ${localStorage["token"]}`,
                        "Content-type": "application/json"
                    }
                });
                setUserData(response.data);
            }catch(error){
                console.log("Error while fetching profile: ", error.messsage);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <Navbar active={"profile"} isSticky={true}/>
            <div className="container pt-20 md:pt-11 w-full h-fit md:h-screen flex justify-center items-center px-5">
                <div className="main w-[90%] md:w-[600px] h-fit bg-white rounded-md shadow-md p-10 flex flex-col">
                    <div className="header grid grid-cols-3">
                        <div className="text col-span-2">
                            <h1 className="text-2xl font-semibold">Profile</h1>
                            <p className="text-xs md:text-sm text-slate-600">View and customize your profile</p>
                        </div>
                        <i className="bi bi-gear ms-auto text-2xl"></i>
                    </div>
                    <div className="profile-detail mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="mb-3 flex gap-2 items-center">
                            <i className="bi bi-person-circle text-2xl"></i>
                            <div className="detail flex flex-col">
                                <h3 className="text-xs">First Name</h3>
                                <p className="text-sm font-medium">{userData.firstname}</p>
                            </div>
                        </div>
                        <div className="mb-3 flex gap-2 items-center">
                            <i className="bi bi-person-circle text-2xl"></i>
                            <div className="detail flex flex-col">
                                <h3 className="text-xs">Last Name</h3>
                                <p className="text-sm font-medium">{userData.lastname}</p>
                            </div>
                        </div>
                        <div className="mb-3 flex gap-2 items-center">
                            <i className="bi bi-person-circle text-2xl"></i>
                            <div className="detail flex flex-col">
                                <h3 className="text-xs">Username</h3>
                                <p className="text-sm font-medium">@{userData.username}</p>
                            </div>
                        </div>
                        <div className="mb-3 flex gap-2 items-center">
                            <i className="bi bi-envelope text-2xl"></i>
                            <div className="detail flex flex-col">
                                <h3 className="text-xs">Email</h3>
                                <p className="text-sm font-medium">{userData.email}</p>
                            </div>
                        </div>
                        <div className="mb-3 flex gap-2 items-center">
                            <i className="bi bi-telephone text-2xl"></i>
                            <div className="detail flex flex-col">
                                <h3 className="text-xs">Telephone</h3>
                                <p className="text-sm font-medium">{userData.telephone}</p>
                            </div>
                        </div>
                        <div className="action grid grid-cols-1 md:grid-cols-2 gap-2 md:col-span-2">
                            <Link to={'/update-profile'} className="px-2 py-2 text-white rounded-md bg-yellow-500 flex gap-2 items-center transition-all hover:opacity-90 ">
                                <i className="bi bi-pencil-square"></i>
                                Edit Profile
                            </Link>
                            <button className="px-3 py-2 text-white rounded-md bg-red-600 flex gap-2 items-center transition-all hover:opacity-90">
                                <i className="bi bi-trash"></i>
                                Delete Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}