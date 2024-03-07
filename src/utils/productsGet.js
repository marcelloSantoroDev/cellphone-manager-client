import axios from 'axios'; 

const URL = process.env.REACT_APP_API_URL;

const productsGet = async () => {
    const { data } = await axios.get(`${URL}/products`);
    return data || [];
}

export default productsGet;