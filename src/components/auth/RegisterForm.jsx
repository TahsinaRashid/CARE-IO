'use client';

import { postUser } from "@/actions/server/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const RegisterForm = () => {
    const router = useRouter();
    const [form, setform] = useState({
        nid_no: "",
        name: "",
        email: "",
        contact: "",
        password: ""
    });
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const password = form.password;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be 6+ characters, include 1 uppercase & 1 lowercase!");
            return;
        }

        try {
            const result = await postUser(form);

            if (result) {
                alert("Registration Successful");
                const userData = {
                    name: form.name,
                    email: form.email,
                };
                
                localStorage.setItem("user", JSON.stringify(userData));
                router.refresh(); 
            }
        } catch (error) {
            console.error("Registration Error:", error);
            alert("Something went wrong!");
        }
    router.push('/booking');

    };

    return (
        <div className="flex justify-center items-center min-h-[90vh] p-3">
            <div className="card w-full max-w-lg shadow-2xl bg-base-100 p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-primary">Join CARE.IO</h2>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label text-gray-700">Name</label>
                        <input name="name" type="text" placeholder="Full Name" className="input input-bordered" value={form.name} onChange={handleChange} required />
                    </div>

                    <div className="form-control">
                        <label className="label text-gray-700">NID No.</label>
                        <input name="nid_no" type="text" placeholder="NID Number" className="input input-bordered" value={form.nid_no} onChange={handleChange} required />
                    </div>

                    <div className="form-control">
                        <label className="label text-gray-700">Email</label>
                        <input name="email" type="email" placeholder="email@example.com" className="input input-bordered" value={form.email} onChange={handleChange} required />
                    </div>

                    <div className="form-control">
                        <label className="label text-gray-700">Contact</label>
                        <input name="contact" type="text" placeholder="017XXXXXXXX" className="input input-bordered" value={form.contact} onChange={handleChange} required />
                    </div>

                    <div className="form-control md:col-span-2">
                        <label className="label text-gray-700">Password</label>
                        <input name="password" type="password" placeholder="******" className="input input-bordered w-full" value={form.password} onChange={handleChange} required />
                    </div>

                    <button type="submit" className="btn btn-primary btn-outline md:col-span-2 mt-4">
                        Register & Book Now
                    </button>

                    <p className="text-center mt-4 w-full md:col-span-2">
                        Go to <Link href={"/login"} className="link link-primary font-semibold"> Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};
