import { dbConnect, collections } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MyBookingsPage() {

  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  let myBookings = [];
  try {
    
    const bookingsCollection = dbConnect("bookings"); 
    
    
    const rawData = await bookingsCollection
      .find({ userEmail: session.user.email })
      .sort({ createdAt: -1 }) 
      .toArray();

    myBookings = rawData.map(doc => ({
      ...doc,
      _id: doc._id.toString(),
      status: doc.status || "Pending" 
    }));

  } catch (error) {
    console.error("Database Load Error:", error);
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center p-10 bg-red-50 rounded-2xl border border-red-200">
          <h2 className="text-red-600 font-bold text-xl">Database Connection Failed!</h2>
          <p className="text-gray-600">Check again.Error.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-screen ">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">My Bookings</h1>
          <p className="text-gray-500">Your all booked service is here.</p>
        </header>

        {myBookings.length === 0 ? (
          <div className="bg-white p-20 rounded-3xl shadow-sm text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg">Sorry.There is no record.</p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <table className="w-full text-left">
              <thead className="bg-orange-600 text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">Service Name</th>
                  <th className="px-6 py-4 font-semibold">Duration</th>
                  <th className="px-6 py-4 font-semibold">Location</th>
                  <th className="px-6 py-4 font-semibold">Total Cost</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Cancel</th>

                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {myBookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-orange-50 transition duration-150">
                    <td className="px-4 py-4 font-bold text-gray-800">
                      {booking.serviceName || "N/A"}
                    </td>
                    <td className="px-4 py-4 text-gray-600">
                      {booking.duration} Hours
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm font-medium text-gray-900">{booking.location?.district}</div>
                      <div className="text-xs text-gray-500">{booking.location?.division}</div>
                    </td>
                    <td className="px-4 py-4 font-bold text-orange-600">
                      ৳{booking.totalPrice}
                    </td>
                    <td className="px-4 py-4">
                      <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex justify-center gap-2">
                        <span className="text-gray-300">|</span>
                        <button 
                        className="text-xs font-bold  hover:underline">Cancel Booking</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}