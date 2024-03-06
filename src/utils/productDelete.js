import axios from 'axios';

const productDelete = async (id) => {
    const { data } = await axios.delete(`http://localhost:3001/products/${id}`);
    return data;
};

export default productDelete;