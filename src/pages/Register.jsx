import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export default function Register(){
    const [isSticky, setIsSticky] = useState(true);
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        telephone: "",
        password: "",
        password_confirmation: "",
    });
    const navigate = useNavigate();

    const handleReset = (e) => {
        e.preventDefault();
        setData({
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            telephone: "",
            password: "",
            password_confirmation: "",
        })
    }

    async function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();
        formData.append('firstname', data.firstname);
        formData.append('lastname', data.lastname);
        formData.append('username', data.username);
        formData.append('email', data.email);
        formData.append('telephone', data.telephone);
        formData.append('password', data.password);
        formData.append('password_confirmation', data.password_confirmation);

        await api
            .post('register', formData)
            .then(() => {
                Swal.fire({
                    title: "Sign Up Success!",
                    text: "You are signed up into rental website",
                    icon: "success",
                    showCancelButton: false,
                    showConfirmButton: true,
                    confirmButtonColor: "#006FB9",
                }).then((result) => {
                    if(result.isConfirmed){
                        navigate('/login');
                    }
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Sign Up failed!",
                    text: `An error occured: ${error.message}`,
                    icon: "error",
                    showCancelButton: false,
                    showConfirmButton: true,
                    confirmButtonColor: "#006FB9",
                });
                console.log("Error while register: ", error.message);
            })

    }

    return (
        <>
            <Navbar isSticky={isSticky} />
            <div className="container pt-24 md:pt-24 w-full h-fit flex flex-row justify-center items-center mb-5">
                <div className="login-card bg-white w-[90%] md:w-[600px] h-fit rounded-md shadow-md overflow-hidden">
                    <form className="p-5 flex flex-col justify-between" method="post" onSubmit={(e) => handleSubmit(e)}>
                        <div className="header">
                            <h1 className="text-lg font-semibold mb-0">Sign Up</h1>
                            <p className=" text-sm text-slate-600 mb-3">Create your rental account</p>
                        </div>
                        <div className="row grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="text-sm font-medium text-slate-600 block mb-1">Firstname</label>
                                    <div className="input-column px-3 py-2 border border-slate-300 rounded-md flex flex-row gap-2">
                                        <i className="bi bi-person-circle"></i>
                                        <input type="text" name="firstname" id="firstname" className="flex-1 outline-none text-sm" placeholder="Enter Firstname" onChange={(e) => setData({...data, firstname: e.target.value})} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="text-sm font-medium text-slate-600 block mb-1">Lastname</label>
                                    <div className="input-column px-3 py-2 border border-slate-300 rounded-md flex flex-row gap-2">
                                        <i className="bi bi-person-circle"></i>
                                        <input type="text" name="lastname" id="lastname" className="flex-1 outline-none text-sm" placeholder="Enter lastname" onChange={(e) => setData({...data, lastname: e.target.value})} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="text-sm font-medium text-slate-600 block mb-1">Username</label>
                                    <div className="input-column px-3 py-2 border border-slate-300 rounded-md flex flex-row gap-2">
                                        <i className="bi bi-person-circle"></i>
                                        <input type="text" name="username" id="username" className="flex-1 outline-none text-sm" placeholder="Enter Username" onChange={(e) => setData({...data, username: e.target.value})} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-600 block mb-1">Email</label>
                                    <div className="input-column px-3 py-2 border border-slate-300 rounded-md flex flex-row gap-2">
                                        <i className="bi bi-envelope"></i>
                                        <input type="text" name="email" id="email" className="flex-1 outline-none text-sm" placeholder="Enter Email" onChange={(e) => setData({...data, email: e.target.value})} />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="telephone" className="text-sm font-medium text-slate-600 block mb-1">Telephone</label>
                                    <div className="input-column px-3 py-2 border border-slate-300 rounded-md flex flex-row gap-2">
                                        <i className="bi bi-telephone"></i>
                                        <input type="text" name="telephone" id="telephone" className="flex-1 outline-none text-sm" placeholder="Enter Telephone" onChange={(e) => setData({...data, telephone: e.target.value})} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="text-sm font-medium text-slate-600 block mb-1">Password</label>
                                    <div className="input-column px-3 py-2 border border-slate-300 rounded-md flex flex-row gap-2">
                                        <i className="bi bi-lock-fill"></i>
                                        <input type="password" name="password" id="password" className="flex-1 outline-none text-sm" placeholder="Enter password" onChange={(e) => setData({...data, password: e.target.value})} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmpassword" className="text-sm font-medium text-slate-600 block mb-1">Confirm Password</label>
                                    <div className="input-column px-3 py-2 border border-slate-300 rounded-md flex flex-row gap-2">
                                        <i className="bi bi-shield-lock"></i>
                                        <input type="password" name="confirmpassword" id="confirmpassword" className="flex-1 outline-none text-sm" placeholder="Enter Confirm Password" onChange={(e) => setData({...data, password_confirmation: e.target.value})} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="action flex flex-row gap-2">
                            <button type="submit" className="px-4 py-2 text-sm bg-blue-600 text-white rounded-full">Submit</button>
                            <button onClick={(e) => handleReset(e)} className="px-4 py-2 text-sm bg-red-600 text-white rounded-full">Reset</button>
                        </div>
                        <p className="text-xs mt-2">Dont have an account ? <a href="/sign-up" className="text-blue-600">Register</a></p>
                    </form>
                </div>
            </div>
        </>
    );
}