import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;


const productDelete = async (id) => {
    const { data } = await axios.delete(`${URL}/products/${id}`);
    return data;
};

export default productDelete;