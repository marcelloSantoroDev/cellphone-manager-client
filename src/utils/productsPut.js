import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

const productsPut = async (id, name, brand, model) => {
    try {
        const { data } = await axios.put(`${URL}/products/${id}`, { name, brand, model });
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export default productsPut;