import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

const signupPost = async (name, email, password) => {
    try {
        const { data } = await axios.post(`${URL}/user`, {name, email, password});
        return data;
    } catch (error) {
        return error.response.data;
    }
}

export default signupPost;