import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

const detailsDelete = async (index, id) => {
    try {
        const { data } = await axios.delete(`${URL}/products/details/${id}`, { data: { index } });
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export default detailsDelete;