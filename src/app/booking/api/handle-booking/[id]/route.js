import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
    const db = await connectDB();
    const bookingCollection = await db.collection('booking');
    try {
        const res = await bookingCollection.deleteOne({ _id: new ObjectId(params.id) });
        return NextResponse.json({ res })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 200 })
    }
}

export const PATCH = async (request, { params }) => {
    const db = await connectDB();
    const bookingCollection = await db.collection('booking');
    const updateDoc = await request.json();
    try {
        const res = await bookingCollection.updateOne(
            { _id: new ObjectId(params.id) },
            {
                $set: {
                    ...updateDoc
                }
            },
            {
                upsert: true
            }
        );
        return NextResponse.json({ message: "Update the booking", response: res })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 200 })
    }
}

export const GET = async ( request, { params }) => {
    const db = await connectDB();
    const bookingCollection = await db.collection('booking');
    try {
        const res = await bookingCollection.findOne({ _id: new ObjectId(params.id) });
        return NextResponse.json({ message: "Hey, I am OK.", data: res })
    } catch (error) {
        return NextResponse.json({ message: "Something went worng" })
    }
}