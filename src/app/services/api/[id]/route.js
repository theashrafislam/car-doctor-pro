import { connectDB } from "@/lib/connectDB"

export const GET = async (request, {params}) => {
    const db = await connectDB();
    const servicesCollection = await db.collection('services');
    try {
        const res = await servicesCollection.findOne({_id: params.id})
        return Response.json({res})
    } catch (error) {
        console.log(error);
    }
};