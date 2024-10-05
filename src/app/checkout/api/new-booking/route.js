import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async(request) => {
    const booking = await request.json();
    const db = await connectDB();
    const bookingCollection = await db.collection('booking');
    try {
        const res = await bookingCollection.insertOne(booking);
        return NextResponse.json({message: "Booking successfully."}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong."}, {status: 400})
    }
}