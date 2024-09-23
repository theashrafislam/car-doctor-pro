import { connectDB } from "@/lib/connectDB"
import { servicesData } from "@/lib/services/servicesData";

export const GET = async () => {
    const db = await connectDB();
    const servicesCollection = await db.collection('services');
    try {
        await servicesCollection.deleteMany();
        const res = await servicesCollection.insertMany(servicesData);
        return Response.json({messages: "First all data is delete DONE. And, insert DONE!"})
    } catch (error) {
        console.log(error);
    }
};