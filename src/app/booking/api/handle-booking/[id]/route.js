import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
    const db = await connectDB();
    const bookingCollection = await db.collection('booking');
    try {
        const res = await bookingCollection.deleteOne({ _id: new ObjectId(params.id) });
        return Response.json({ res })
    } catch (error) {
        return Response.json({ message: "Something went wrong" }, { status: 200 })
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
        return Response.json({ message: "Update the booking", response: res })
    } catch (error) {
        return Response.json({ message: "Something went wrong" }, { status: 200 })
    }
}

export const GET = async ( request, { params }) => {
    const db = await connectDB();
    const bookingCollection = await db.collection('booking');
    try {
        const res = await bookingCollection.findOne({ _id: new ObjectId(params.id) });
        return Response.json({ message: "Hey, I am OK.", data: res })
    } catch (error) {
        return Response.json({ message: "Something went worng" })
    }
}