import axios from "axios";

const signupPost = async (name, email, password) => {
    try {
        const { data } = await axios.post('http://localhost:3001/user', {name, email, password});
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export default signupPost;