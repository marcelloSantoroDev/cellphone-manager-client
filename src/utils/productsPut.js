import axios from 'axios';

const productsPut = async (id, name, brand, model) => {
    try {
        const { data } = await axios.put(`http://localhost:3001/products/${id}`, { name, brand, model });
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export default productsPut;