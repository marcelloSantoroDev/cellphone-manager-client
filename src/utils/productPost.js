import axios from "axios";

const URL = process.env.REACT_APP_API_URL;


const productPost = async (name, brand, model, price, color) => {
    try {
        const { data } = await axios.post(`${URL}/products`, { name, brand, model, price, color });
        return data;
    } catch (error) {
        return error.response.data
    }
}

export default productPost;