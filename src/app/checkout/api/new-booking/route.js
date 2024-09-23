import { connectDB } from "@/lib/connectDB";

export const POST = async(request) => {
    const booking = await request.json();
    const db = await connectDB();
    const bookingCollection = await db.collection('booking');
    try {
        const res = await bookingCollection.insertOne(booking);
        return Response.json({message: "Booking successfully."}, {status: 200})
    } catch (error) {
        return Response.json({message: "Something went wrong."}, {status: 400})
    }
}