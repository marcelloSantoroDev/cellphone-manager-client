import axios from "axios";

const loginPost = async (email, password) => {
    try {
        const { data } = await axios.post('http://localhost:3001/login', { email, password });
        return data;
    } catch (error) {
        return error.response.data;
    }
        
    }

export default loginPost;