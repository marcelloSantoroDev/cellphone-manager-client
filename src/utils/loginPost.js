import axios from "axios";

const URL = process.env.REACT_APP_API_URL;


const loginPost = async (email, password) => {
    try {
        const { data } = await axios.post(`${URL}/login`, { email, password });
        return data;
    } catch (error) {
        return error.response.data;
    }
        
    }

export default loginPost;