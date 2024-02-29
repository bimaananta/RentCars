import { useEffect, useState } from "react";
import CommentCard from "./ui/CommentCard";
import api from "../api";

export default function ClientSays(){
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('/comment');
                setComments(response.data.data);
            }catch(error){
                console.log("Error fetching comments data: ", error.message);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container mt-5 pt-5 w-full h-fit flex flex-col items-center px-5 mb-1">
            <h1 className="text-2xl md:text-3xl font-bold">What Our Client Says</h1>
            <p className="text-sm md:text-base text-slate-600 text-center">We are already working with much clients around the world</p>
            <div className="main p-10 grid grid-cols-1 md:grid-cols-4 gap-5">
                {comments.map((comment, index) => (
                    <CommentCard comment={comment} key={index} />
                ))}
            </div>      
        </div>
    );
}