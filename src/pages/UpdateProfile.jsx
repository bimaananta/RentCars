import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AuthContext from "../AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Swal from "sweetalert2";

export default function UpdateProfile(){
    const [userData, setUserData] = useState({});
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        telephone: ""
    });
    const isLoggedIn = useContext(AuthContext);
    const navigate = useNavigate();

    if(!isLoggedIn){
        navigate('/');
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('/profile', {
                    headers:{
                        "Authorization": `Bearer ${localStorage["token"]}`,
                        "Content-Type": "application/json"
                    }
                });
                setUserData(response.data.profile);
            }catch(error){
                console.log("Error while get profile data: ", error.message);
            }
        }

        fetchData();
    }, []);

    async function handeSubmit(e){
        e.preventDefault();

        const formData = new FormData();

        formData.append('firstname', data.firstname);
        formData.append('lastname', data.lastname);
        formData.append('username', data.username);
        formData.append('email', data.email);
        formData.append('telephone', data.telephone);

        await api
            .post('/update-profile', formData,{
                headers:{
                    "Authorization": `Bearer ${localStorage["token"]}`,
                    "Content-type": "application/json"
                },
            })
            .then(() => {
                Swal.fire({
                    title: "Update Profile Success!",
                    text: "Your profile successfully updated!",
                    icon: "success",
                    showCancelButton: false,
                    showConfirmButton: true,
                    confirmButtonColor: "#006FB9",
                }).then((result) => {
                    if(result.isConfirmed){
                        navigate('/');
                    }
                });
            })
            .catch((error) => {
                console.log("Error while updating: ", error.message);
                Swal.fire({
                    title: "Update profile Failed!",
                    text: "You are failed to update accout of rental website",
                    icon: "failed",
                    showCancelButton: false,
                    cancelButtonColor: "#006FB9",
                });
            })
    }



    return (
        <>
            <Navbar isSticky={false} />
            <section id="updateProfile" className="pt-11 mt-11">
                <div className="container w-full h-fit px-5 flex justify-center items-center mb-5">
                    <div className="main w-[100%] md:w-[70%] h-fit bg-white rounded-md shadow-md grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                        <div className="form-update flex flex-col p-5">
                            <h1 className="text-2xl font-semibold">Update Profile</h1>
                            <p className="text-slate-600">Update your profile detail</p>
                            <form className="w-full mt-3 flex flex-col justify-between" onSubmit={(e) => handeSubmit(e)}>
                                <div className="mb-3 w-full">
                                    <label htmlFor="firstname" className="text-slate-600 text-sm">Firstname</label>
                                    <div className="w-full flex flex-row border rounded-md gap-2 p-2 border-gray-300">
                                        <i className=" bi bi-person-circle"></i>
                                        <input type="text" name="" id="" className="outline-none w-full" placeholder="Enter Firstname" onChange={(e) => setData({...data, firstname: e.target.value})} />
                                    </div>
                                </div>
                                <div className="mb-3 w-full">
                                    <label htmlFor="lastname" className="text-slate-600 text-sm">Lastname</label>
                                    <div className="w-full flex flex-row border rounded-md gap-2 p-2 border-gray-300">
                                        <i className=" bi bi-person-circle"></i>
                                        <input type="text" name="" id="" className="outline-none w-full" placeholder="Enter lastname" onChange={(e) => setData({...data, lastname: e.target.value})}/>
                                    </div>
                                </div>
                                <div className="mb-3 w-full">
                                    <label htmlFor="username" className="text-slate-600 text-sm">Username</label>
                                    <div className="w-full flex flex-row border rounded-md gap-2 p-2 border-gray-300">
                                        <i className=" bi bi-person-circle"></i>
                                        <input type="text" name="" id="" className="outline-none w-full" placeholder="Enter username" onChange={(e) => setData({...data, username: e.target.value})}/>
                                    </div>
                                </div>
                                <div className="mb-3 w-full">
                                    <label htmlFor="email" className="text-slate-600 text-sm">Email</label>
                                    <div className="w-full flex flex-row border rounded-md gap-2 p-2 border-gray-300">
                                        <i className=" bi bi-envelope"></i>
                                        <input type="text" name="" id="" className="outline-none w-full" placeholder="Enter email" onChange={(e) => setData({...data, email: e.target.value})}/>
                                    </div>
                                </div>
                                <div className="mb-3 w-full">
                                    <label htmlFor="Telephone" className="text-slate-600 text-sm">Telephone</label>
                                    <div className="w-full flex flex-row border rounded-md gap-2 p-2 border-gray-300">
                                        <i className=" bi bi-telephone"></i>
                                        <input type="text" name="" id="" className="outline-none w-full" placeholder="Enter Telephone" onChange={(e) => setData({...data, telephone: e.target.value})}/>
                                    </div>
                                </div>
                                <div className="action flex flex-row gap-2 mt-2">
                                    <button type="submit" className="px-4 py-2 text-white rounded-full bg-blue-600">Submit</button>
                                    <button type="reset" className="px-4 py-2 text-white rounded-full bg-red-600">Reset</button>
                                </div>
                            </form>
                        </div>
                        <div className="wrapper overflow-hidden relative">
                            <img src="https://cdn1-production-images-kly.akamaized.net/4M3IejAMnDDaMqwE9bca6mAolCw=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3702794/original/024200100_1639484631-0000474844.jpg" className="w-full h-full object-cover" />
                            <div className="absolute w-full h-full opacity-50 top-0 left-0 bg-gradient-to-t from-black z-50"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}