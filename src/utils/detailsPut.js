import axios from "axios";

const detailsPut = async (index, id, price, color) => {
    try {
        const { data } = await axios.put(`http://localhost:3001/products/details/${id}`, { index, price, color })
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export default detailsPut;