import axios from "axios";

const productPost = async (name, brand, model, price, color) => {
    try {
        const { data } = await axios.post("http://localhost:3001/products", { name, brand, model, price, color });
        return data;
    } catch (error) {
        return error.response.data
    }
}

export default productPost;