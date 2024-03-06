import axios from 'axios'; 

const productsGet = async () => {
    const { data } = await axios.get('http://localhost:3001/products');
    return data || [];
}

export default productsGet;