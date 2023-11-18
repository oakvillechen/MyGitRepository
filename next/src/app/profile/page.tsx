"use client";
import Link from "next/link";
import axios, {Axios} from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function ProfilePage(){
    const router = useRouter();
    const [data, setData] = useState("nothing");
    const logout = async() =>{

        try {
            const response = await axios.get("/api/users/logout");
            console.log("logout success", response.data);
            toast.success("logout success");
            router.push("/login");
            
        } catch (error:any) {
            console.log("logout failed", error.message)
            toast.error(error.message);
        }
  
    }

    const getUserDetails = async() =>{
        try {
            const res = await axios.get("/api/users/userdetail");
            console.log(res.data);
            setData(res.data.data._id)
        }
        catch(error:any) {
                console.log("get user detail error: ", error.message)
               // toast.error(error.message);
        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-2xl">Profile</h1>
            <hr/>
            <p>Profile page</p>
            <h2 className="p-1 rounded bg-green-500">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}
            </Link>}</h2>
            <hr/>

            <button 
            onClick={logout}
            className="bg-blue-500 mt-4 hover:bg-blue-700 font-bold py-2 px-4 rounded">
                logout
            </button>

            <button 
            onClick={getUserDetails}
            className="bg-green-800 mt-4 hover:bg-blue-700 font-bold py-2 px-4 rounded">
                GetUserDetails
            </button>
        </div>
    )
}