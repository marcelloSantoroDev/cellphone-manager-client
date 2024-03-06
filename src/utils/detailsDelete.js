import axios from "axios";

const detailsDelete = async (index, id) => {
    try {
        const { data } = await axios.delete(`http://localhost:3001/products/details/${id}`, { data: { index } });
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export default detailsDelete;