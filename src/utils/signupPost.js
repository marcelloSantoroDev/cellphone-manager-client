import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

const signupPost = async (name, email, password) => {
    try {
        const { data } = await axios.post(`${URL}/user`, {name, email, password});
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}

export default signupPost;