import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    console.log(params);
    const db = await connectDB();
    const bookingCollection = await db.collection('booking');
    try {
        const res = await bookingCollection.find({email: params?.email}).toArray();
        return NextResponse.json({res})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 200})
    }
}