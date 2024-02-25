import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { useEffect } from "react";

export default function Logout(){
    const navigate = useNavigate();

    useEffect(() => {
        Swal.fire({
            title: "Are you sure want to Log Out ?",
            text: "You are logged out from rental website",
            icon: "warning",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#ff0000",
            cancelButtonColor: "#006FB9"
        }).then((result) => {
            if(result.isConfirmed){
                handleLogout();
            }
        });
    }, []);


    async function handleLogout(){
        try{
            const response = await api.get('logout', {
                headers:{
                    "Authorization": `Bearer ${localStorage["token"]}`,
                    "Content-type": "application/json",
                }
            });
            
            if(response.data.status === "success"){
                localStorage.removeItem("token");
                Swal.fire({
                    title: "Log Out Success!",
                    text: "You are logged out from rental website",
                    icon: "success",
                    showCancelButton: false,
                    showConfirmButton: true,
                    confirmButtonColor: "#006FB9",
                }).then((result) => {
                    if(result.isConfirmed){
                        navigate('/');
                    }
                });
            }
        }catch(error){
            console.log("Error while log out: ", error.message);
            Swal.fire({
                title: "Log Out Failed!",
                text: "You are failed to logged out from rental website",
                icon: "failed",
                showCancelButton: false,
                showConfirmButton: true,
                confirmButtonColor: "#006FB9",
            }).then((result) => {
                if(result.isConfirmed){
                    navigate('/');
                    window.location.reload();
                }
            });
        }
    }

    return (
        <Navbar isSticky={true}/>
    )
}