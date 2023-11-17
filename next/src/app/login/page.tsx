"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios, {Axios} from "axios";
import toast from "react-hot-toast";



export default function LoginPage()
{
    const router = useRouter();

    const [user,setUser] = React.useState({
        email:"",
        password:"",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [loading, setLoading] =React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login",user);
            console.log("login success", response.data);
            toast.success("login success");
            router.push("/profile");
        } catch (error:any) {
            console.log("login failed", error.message)
            toast.error(error.message);
        }
        finally
        {
            setLoading(false);
        }
        
    }


    useEffect(()=>{
        if(user.email.length >0 && user.password.length >0)
        {
            setButtonDisabled(false);
        }
    else
    {
        setButtonDisabled(true);
    }

    },[user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-2xl" >Login</h1>
            
            <label htmlFor="email">email</label>
            <input className="p-2 border rounded-lg mb-4 focus:outline-one"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email:e.target.value})}
                placeholder="email"
                ></input>


            <label htmlFor="password">password</label>
            <input className="p-2 border rounded-lg mb-4 focus:outline-one"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password:e.target.value})}
                placeholder="password"
                ></input>

            
            <button 
            onClick={onLogin}
            className="p-2 border border-gray-300 mb-4 focus:border-gray-600">
                {buttonDisabled ? "Enter user name & Password" :"Click Login"}
            </button>
            <Link href="/signup"> Back to Signup page</Link>
        </div>
    )
}