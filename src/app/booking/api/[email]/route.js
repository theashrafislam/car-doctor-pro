import { connectDB } from "@/lib/connectDB"

export const GET = async (request, {params}) => {
    console.log(params);
    const db = await connectDB();
    const bookingCollection = await db.collection('booking');
    try {
        const res = await bookingCollection.find({email: params?.email}).toArray();
        return Response.json({res})
    } catch (error) {
        return Response.json({message: "Something went wrong"}, {status: 200})
    }
}