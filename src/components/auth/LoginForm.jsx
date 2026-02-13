"use client";
import { signIn } from "next-auth/react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export const LoginForm = () => {
    const router=useRouter();
    const [form,setform]=useState({
        email:"",
        password:""
    });
    const handleChange=(e)=>{
        setform({...form,[e.target.name]:e.target.value});
    };

    const handleSubmit=async (e)=>{
        e.preventDefault();
    const result = await signIn("credentials",{
        email:form.email,
        password:form.password  ,
        redirect:false});
        console.log(result);
        if(!result.ok){
            Swal.fire("Error","Invalid email or password.","error");
        }
        else{
            Swal.fire("Success","Login successful!","success");
            router.push("/");

        }


    }

    return(
        <div className="flex justify-center items-center min-h-screen p-4">
      <div className="card w-full max-w-lg shadow-2xl bg-base-100 p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-secondary">Welcome back!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label flex text-gray-700 ">Email</label>
            <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            className="input input-bordered w-full" 
            onChange={handleChange}
            required />
          </div>
          <div className="form-control">
            <label className="label text-gray-700">Password</label>
            <input 
            type="password" 
            name="password"
            placeholder="******" 
            className="input input-bordered w-full" 
            onChange={handleChange}
            required />
          </div>
          <button type="submit" className="btn btn-primary btn-outline w-full">Login</button>
        </form>
        <p className="text-center mt-4">
          New here? <Link href="/register" className="link link-primary">Create Account</Link>
        </p>
      </div>

    </div>
    )
}