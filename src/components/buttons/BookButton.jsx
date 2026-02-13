'use client';

import { usePathname, useRouter } from "next/navigation";

export default function BookButton({service}) {
    const isLogin=false;
    const router=useRouter();
    const path=usePathname();
    const handleBookService=()=>{
        if(isLogin){
            alert(service._id);
            
        }
        else{
            router.push(`/login?callbackUrl=${path}`);
        }
    }
  return (
    <div>
        <button 
        onClick={handleBookService}
        className='btn btn-primary mt-8 w-full md:w-auto px-10 text-white'>
                    Book This Service
                </button>
    </div>
  )
}
