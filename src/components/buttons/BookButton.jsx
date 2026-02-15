
'use client';

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Services from "../home/Services";

export default function BookButton({ service }) {
    const { data: session } = useSession();
    const router = useRouter();
    const path = usePathname();

    const handleBookService = () => {
        if (session) {
            router.push(`/booking/${service._id}`);
        } 
        else {
            router.push(`/login?redirect=${path}`);
        }
    }

    return (
        <div>
            <button 
                onClick={handleBookService}
                className='btn btn-primary mt-8 w-full md:w-auto px-10 text-white'
            >
                Book This Service
            </button>
        </div>
    )
}