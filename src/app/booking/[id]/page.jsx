import BookingForm from "@/components/auth/BookingForm";
import { dbConnect, collections } from "@/lib/dbConnect"; // collections ইমপোর্ট করা হয়েছে
import { ObjectId } from "mongodb"; 
import { notFound } from "next/navigation";

export default async function BookingPage({ params }) {
  const { id } = await params;

  let service = null;

  try {
    
    const servicesCollection = dbConnect(collections.SERVICES);
    
    const rawService = await servicesCollection.findOne({ 
      _id: new ObjectId(id) 
    });

    if (!rawService) {
      return notFound();
    }

    service = {
      ...rawService,
      _id: rawService._id.toString(),
    };

  } catch (error) {
    console.error("Database error:", error);
    return <div className="text-center py-20 text-red-500">ডাটাবেজ কানেকশনে সমস্যা হচ্ছে।</div>;
  }

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Book your service here..
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Please fill out the form below to book this service.
        </p>

        <BookingForm service={service} />
      </div>
    </div>
  );
}