import axios from "axios";

export const getServices = async () => {
    const res = await axios.get('http://localhost:3000/services/api/get-all');
    return res.data;
};
export const getServiceDetail = async (id) => {
    const res = await axios.get(`http://localhost:3000/services/api/${id}`);
    return res.data;
};