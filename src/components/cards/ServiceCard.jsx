// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function ServiceCard({ service }) {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push(`/services/${service._id || service.name}`);
//   };
//   return (
//     <div
//       onClick={handleClick}
//       className="cursor-pointer border rounded-xl p-4 shadow hover:scale-105 transition-all duration-300"
//     >
//       <Image
//       width={200}
//       height={100}
//         src={service.image}
//         alt={service.name}
//         className="w-full h-40 object-cover rounded-lg mb-3"
//       />

//       <h3 className="text-xl font-bold">{service.name}</h3>

//       <p className="text-sm my-2 line-clamp-2">
//         {service.description}
//       </p>

//       <p className="font-semibold text-secondary">
//         ৳ {service.price_hour} / hour
//       </p>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ServiceCard({ service }) {
  const router = useRouter();

  const discount = 15;
  const originalPrice = service.price_hour; 
  const discountedPrice = originalPrice - (originalPrice * discount) / 100;

  const handleClick = () => {
    router.push(`/services/${service._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border rounded-xl p-4 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white"
    >
      <div className="relative">
        <Image
          width={400}
          height={250}
          src={service.image}
          alt={service.name}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
          {discount}% OFF
        </span>
      </div>

      <h3 className="text-xl font-bold text-neutral">{service.name}</h3>

      <p className="text-sm text-gray-700 my-2 line-clamp-2">
        {service.description}
      </p>

      <div className="flex items-center gap-2 mt-3">
        <p className="font-bold text-primary text-lg">
          ৳ {discountedPrice}/Hour
        </p>
        <p className="text-sm text-gray-500 line-through font-bold">
          ৳ {originalPrice}
        </p>
        
        <span className="text-[10px] text-gray-500 font-bold ">/ Hour</span>
      </div>
    </div>
  );
}