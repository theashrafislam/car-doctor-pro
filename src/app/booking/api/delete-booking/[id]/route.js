import { ObjectId } from "mongodb";
const { connectDB } = require("@/lib/connectDB");

export const DELETE = async (request, { params }) => {
    // console.log(params);
    const db = await connectDB();
    const bookingCollectio = await db.collection('booking');
    try {
        const res = await bookingCollectio.deleteOne({ _id: new ObjectId(params.id) });
        return Response.json({ message: 'Delete successfully', response: res, status: 200 })
    } catch (error) {
        return Response.json({ message: 'Something went wrong' }, error);
    }
};