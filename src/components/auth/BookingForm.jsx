// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Swal from "sweetalert2";
// import { saveBooking } from "@/actions/server/bookingAction";
// import Link from "next/link";

// // ৭টি ডিভিশন এবং তাদের ডিস্ট্রিক্ট লিস্ট
// const locations = {
//   Dhaka: ["Dhaka City", "Gazipur", "Narayanganj", "Tangail", "Manikganj", "Munshiganj", "Narsingdi"],
//   Chattogram: ["Chattogram City", "Cox's Bazar", "Cumilla", "Feni", "Noakhali", "Brahmanbaria", "Chandpur"],
//   Rajshahi: ["Rajshahi City", "Bogra", "Pabna", "Naogaon", "Natore", "Chapai Nawabganj", "Joypurhat"],
//   Sylhet: ["Sylhet City", "Moulvibazar", "Habiganj", "Sunamganj", "Beani Bazar", "Golapganj", "Zakiganj"],
//   Khulna: ["Khulna City", "Jashore", "Satkhira", "Bagerhat", "Kushtia", "Magura", "Chuadanga"],
//   Barishal: ["Barishal City", "Bhola", "Patuakhali", "Pirojpur", "Jhalokathi", "Barguna", "Amtali"],
//   Rangpur: ["Rangpur City", "Dinajpur", "Gaibandha", "Kurigram", "Nilphamari", "Panchagarh", "Thakurgaon"],
// };

// export default function BookingForm({ service }) {
//   const router = useRouter();
//   const [duration, setDuration] = useState(1);
//   const [selectedDivision, setSelectedDivision] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ডিসকাউন্ট ক্যালকুলেশন
//   const unitPrice = service?.price_hour || 0; 
//   const rawTotalPrice = duration * unitPrice;
//   const discountAmount = rawTotalPrice * 0.15; // ১৫% ডিসকাউন্ট
//   const finalDiscountedPrice = rawTotalPrice - discountAmount;

//   const handleBooking = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);
//     const bookingInfo = {
//       serviceId: service._id,
//       serviceName: service?.title,
//       duration,
//       location: {
//         division: selectedDivision,
//         district: formData.get("district"),
//         address: formData.get("address"),
//       },
//       totalPrice: finalDiscountedPrice, // ডিসকাউন্টেড প্রাইস ডাটাবেজে যাবে
//     };

//     const res = await saveBooking(bookingInfo);

//     if (res.success) {
//       Swal.fire({
//         title: "Success!",
//         text: "Booking successful with 15% discount!",
//         icon: "success",
//         confirmButtonColor: "#f97316",
//       }).then(() => router.push("/"));
//     } else {
//       Swal.fire("Error!", "Something went wrong.", "error");
//     }
//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleBooking} className="bg-white p-6 rounded-lg shadow-lg border border-orange-100 max-w-xl mx-auto">
//       <div className="mb-6 text-center border-b pb-4">
//         <h2 className="text-2xl font-bold text-gray-800">{service?.name}</h2>
//         <p className="text-gray-500 line-through">Regular Price: ৳{unitPrice}/hr</p>
//         <p className="text-orange-600 font-bold text-xl">Offer Price: ৳{unitPrice * 0.85}/hr (15% Off)</p>
//       </div>

//       <div className="space-y-4">
//         {/* Duration */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">Duration (Hours)</label>
//           <input
//             type="number" min="1" value={duration}
//             onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
//             className="w-full border p-2 rounded focus:outline-orange-400"
//             required
//           />
//         </div>

//         {/* Division Selection */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-semibold mb-1">Division</label>
//             <select 
//               className="w-full border p-2 rounded focus:outline-orange-400" 
//               onChange={(e) => setSelectedDivision(e.target.value)} 
//               required
//             >
//               <option value="">Select</option>
//               {Object.keys(locations).map(div => <option key={div} value={div}>{div}</option>)}
//             </select>
//           </div>

//           {/* District Selection based on Division */}
//           <div>
//             <label className="block text-sm font-semibold mb-1">District</label>
//             <select name="district" className="w-full border p-2 rounded focus:outline-orange-400" required disabled={!selectedDivision}>
//               <option value="">Select</option>
//               {selectedDivision && locations[selectedDivision].map(dis => (
//                 <option key={dis} value={dis}>{dis}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Address */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">Detailed Address</label>
//           <textarea name="address" placeholder="House, Road, Area..." className="w-full border p-2 rounded focus:outline-orange-400" required />
//         </div>

//         {/* Price Summary with Discount */}
//         <div className="p-4 bg-orange-50 rounded-md border-l-4 border-orange-500">
//           <div className="flex justify-between text-gray-500 line-through text-sm">
//             <span>Total Regular Price:</span>
//             <span>৳{rawTotalPrice}</span>
//           </div>
//           <div className="flex justify-between text-green-600 text-sm font-medium">
//             <span>Discount (15%):</span>
//             <span>- ৳{discountAmount}</span>
//           </div>
//           <div className="flex justify-between font-bold text-2xl text-orange-700 mt-2">
//             <span>Payable Amount:</span>
//             <span>৳{finalDiscountedPrice}</span>
//           </div>
//         </div>

//         <button 
//   type="submit" 
//   disabled={loading} 
//   className={`w-full py-3 rounded-md font-bold btn btn-primary btn-outline hover:scale-105 transition-all ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
// >
//   {loading ? (
//     <span className="flex items-center justify-center gap-2">
//       <span className="loading loading-spinner loading-sm"></span>
//       Processing...
//     </span>
//   ) : (
//     "Confirm Booking"
//   )}
// </button>
//       </div>
//     </form>
//   );
// }

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"; // সেশন ডাটা পাওয়ার জন্য
import Swal from "sweetalert2";
import { saveBooking } from "@/actions/server/bookingAction";

const locations = {
  Dhaka: ["Dhaka City", "Gazipur", "Narayanganj", "Tangail", "Manikganj", "Munshiganj", "Narsingdi"],
  Chattogram: ["Chattogram City", "Cox's Bazar", "Cumilla", "Feni", "Noakhali", "Brahmanbaria", "Chandpur"],
  Rajshahi: ["Rajshahi City", "Bogra", "Pabna", "Naogaon", "Natore", "Chapai Nawabganj", "Joypurhat"],
  Sylhet: ["Sylhet City", "Moulvibazar", "Habiganj", "Sunamganj", "Beani Bazar", "Golapganj", "Zakiganj"],
  Khulna: ["Khulna City", "Jashore", "Satkhira", "Bagerhat", "Kushtia", "Magura", "Chuadanga"],
  Barishal: ["Barishal City", "Bhola", "Patuakhali", "Pirojpur", "Jhalokathi", "Barguna", "Amtali"],
  Rangpur: ["Rangpur City", "Dinajpur", "Gaibandha", "Kurigram", "Nilphamari", "Panchagarh", "Thakurgaon"],
};

export default function BookingForm({ service }) {
  const router = useRouter();
  const { data: session } = useSession(); // লগইন করা ইউজারকে চেনার জন্য
  const [duration, setDuration] = useState(1);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [loading, setLoading] = useState(false);

  // ক্যালকুলেশন
  const unitPrice = service?.price_hour || 0; 
  const rawTotalPrice = duration * unitPrice;
  const discountAmount = rawTotalPrice * 0.15;
  const finalDiscountedPrice = rawTotalPrice - discountAmount;

  const handleBooking = async (e) => {
    e.preventDefault();
    
    // ১. চেক করা ইউজার লগইন আছে কি না
    if (!session?.user?.email) {
      Swal.fire("Error", "Please login to book a service!", "error");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.target);
    const bookingInfo = {
      serviceId: service._id,
      serviceName: service?.title, // database field title হলে এখানে title হবে
      userEmail: session.user.email, // এটি খুবই জরুরি
      duration,
      location: {
        division: selectedDivision,
        district: formData.get("district"),
        address: formData.get("address"),
      },
      totalPrice: finalDiscountedPrice,
      status: "Pending", // ডিফল্ট স্ট্যাটাস
      createdAt: new Date(),
    };

    try {
      const res = await saveBooking(bookingInfo);

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Booking successful with 15% discount!",
          icon: "success",
          confirmButtonColor: "#f97316",
        }).then(() => {
          router.push("/my-bookings"); // সাকসেস হলে ডাইরেক্ট মাই বুকিং পেজে যাবে
        });
      } else {
        Swal.fire("Error!", "Database could not save the booking.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Something went wrong during submission.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleBooking} className="bg-white p-6 rounded-lg shadow-lg border border-orange-100 max-w-xl mx-auto">
      <div className="mb-6 text-center border-b pb-4">
        {/* service?.name বদলে service?.title */}
        <h2 className="text-2xl font-bold text-gray-800">{service?.name}</h2>
        <p className="text-gray-500 line-through">Regular Price: ৳{unitPrice}/hr</p>
        <p className="text-orange-600 font-bold text-xl">Offer Price: ৳{unitPrice * 0.85}/hr (15% Off)</p>
      </div>

      <div className="space-y-4">
        {/* Duration */}
        <div>
          <label className="block text-sm font-semibold mb-1">Duration (Hours)</label>
          <input
            type="number" min="1" value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
            className="w-full border p-2 rounded focus:outline-orange-400"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Division</label>
            <select 
              className="w-full border p-2 rounded focus:outline-orange-400" 
              onChange={(e) => setSelectedDivision(e.target.value)} 
              required
            >
              <option value="">Select</option>
              {Object.keys(locations).map(div => <option key={div} value={div}>{div}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">District</label>
            <select name="district" className="w-full border p-2 rounded focus:outline-orange-400" required disabled={!selectedDivision}>
              <option value="">Select</option>
              {selectedDivision && locations[selectedDivision].map(dis => (
                <option key={dis} value={dis}>{dis}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Detailed Address</label>
          <textarea name="address" placeholder="House, Road, Area..." className="w-full border p-2 rounded focus:outline-orange-400" required />
        </div>

        <div className="p-4 bg-orange-50 rounded-md border-l-4 border-orange-500">
          <div className="flex justify-between text-gray-500 line-through text-sm">
            <span>Total Regular Price:</span>
            <span>৳{rawTotalPrice}</span>
          </div>
          <div className="flex justify-between text-green-600 text-sm font-medium">
            <span>Discount (15%):</span>
            <span>- ৳{discountAmount}</span>
          </div>
          <div className="flex justify-between font-bold text-2xl text-orange-700 mt-2">
            <span>Payable Amount:</span>
            <span>৳{finalDiscountedPrice}</span>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading} 
          className={`w-full py-3 rounded-md font-bold btn btn-primary btn-outline hover:scale-105 transition-all ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="loading loading-spinner loading-sm"></span>
              Processing...
            </span>
          ) : (
            "Confirm Booking"
          )}
        </button>
      </div>
    </form>
  );
}