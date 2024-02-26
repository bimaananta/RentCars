import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

export default function Login(){
    const [isSticky, setIsSticky] = useState(true);
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const isLoggedIn = useContext(AuthContext);

    useEffect(() => {
        if(isLoggedIn){
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    const handleReset = (e) => {
        setData({
            username: "",
            password: "",
        })
    }

    console.log(data);

    async function handleSubmit(e){
        e.preventDefault();

        const formData = {
            username: data.username,
            password: data.password,
        }

        console.log(formData);

        await api
            .post('login', formData)
            .then((response) => {
                localStorage["token"] = response.data.token;
                Swal.fire({
                    title: "Log In Success!",
                    text: "You are logged in into rental website",
                    icon: "success",
                    showCancelButton: false,
                    showConfirmButton: true,
                    confirmButtonColor: "#006FB9",
                }).then((result) => {
                    if(result.isConfirmed){
                        window.location.reload();
                        navigate('/');
                    }
                });
            })
            .catch((error) => {
                console.log("Error while login: ", error.message);
            })

    }



    return (
        <>
            <Navbar isSticky={isSticky}/>
            <div className="container pt-28 md:pt-11 w-full h-fit md:h-screen flex flex-row justify-center items-center mb-5">
                <div className="login-card bg-white w-[80%] md:w-[700px] h-fit grid grid-cols-1 md:grid-cols-2 rounded-md shadow-md overflow-hidden">
                    <form className="p-5 flex flex-col justify-between" onSubmit={(e) => handleSubmit(e)} >
                        <div className="header">
                            <h1 className="text-lg font-semibold mb-0">Login</h1>
                            <p className=" text-sm text-slate-600 mb-3">Log In to continue</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="text-sm font-medium text-slate-600 block mb-1">Username</label>
                            <div className="input-column px-3 py-2 border border-slate-300 rounded-md flex flex-row gap-2">
                                <i className="bi bi-person-circle"></i>
                                <input type="text" name="username" id="username" className="w-full flex-1 outline-none text-sm" placeholder="Enter Username" onChange={(e) => setData({...data, username: e.target.value})} />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="text-sm font-medium text-slate-600 block mb-1">Password</label>
                            <div className="input-column px-3 py-2 border border-slate-300 rounded-md flex flex-row gap-2">
                                <i className="bi bi-lock-fill"></i>
                                <input type="password" name="password" id="password" className="w-full flex-1 outline-none text-sm" placeholder="Enter password" onChange={(e) => setData({...data, password: e.target.value})}/>
                            </div>
                        </div>
                        <div className="action flex flex-row gap-2">
                            <button type="submit" className="px-4 py-2 text-sm bg-blue-600 text-white rounded-full block transition-all hover:-translate-y-1 active:opacity-75">Submit</button>
                            <button type="reset" onClick={() => handleReset()} className="px-4 py-2 text-sm bg-red-600 text-white rounded-full block transition-all hover:-translate-y-1 active:opacity-75">Reset</button>
                        </div>
                        <p className="text-xs mt-2">Dont have an account ? <a href="/sign-up" className="text-blue-600">Register</a></p>
                    </form>
                    <div className="wrapper relative">
                        <div className="absolute w-full h-full bg-gradient-to-t from-black opacity-55 z-40"></div>
                        <img src="https://cdn1-production-images-kly.akamaized.net/4M3IejAMnDDaMqwE9bca6mAolCw=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3702794/original/024200100_1639484631-0000474844.jpg" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </>
    );
}