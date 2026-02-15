// "use server";
// import { dbConnect } from "@/lib/dbConnect";

// export const saveBooking = async (bookingData) => {
//   try {
//     const db = await dbConnect();
//     const bookingsCollection = db.collections(collections.BOOKINGS);
    
//     // বুকিং ডাটা সেভ করা
//     const result = await bookingsCollection.insertOne({
//       ...bookingData,
//       status: "Pending", // ডিফল্ট স্ট্যাটাস
//       createdAt: new Date(),
//     });

//     return { success: true, message: "Booking saved successfully!", id: result.insertedId };
//   } catch (error) {
//     console.error("Booking Error:", error);
//     return { success: false, message: "Failed to save booking." };
//   }
// };

"use server";
import { dbConnect } from "@/lib/dbConnect";

export const saveBooking = async (bookingData) => {
  try {
    // তোমার dbConnect সরাসরি কালেকশন রিটার্ন করে
    const bookingsCollection = await dbConnect("bookings");

    // ডাটাবেজে ইনসার্ট করার আগে নিশ্চিত করি সব ডাটা ঠিক আছে
    const result = await bookingsCollection.insertOne({
      ...bookingData,
      status: bookingData.status || "Pending",
      createdAt: new Date(),
    });

    if (result.insertedId) {
      return { success: true, message: "Booking saved successfully!" };
    } else {
      return { success: false, message: "Could not insert booking." };
    }
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, message: "Database connection error." };
  }
};