import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

const detailsPut = async (index, id, price, color) => {
    try {
        const { data } = await axios.put(`${URL}/products/details/${id}`, { index, price, color })
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export default detailsPut;