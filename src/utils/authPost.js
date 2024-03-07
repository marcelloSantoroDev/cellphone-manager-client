import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

const authPost = async (token) => {
    try {
        const { data } = await axios.post(
            `${URL}/auth`,
            {},
            {
                headers: {
                    Authorization: token
                },
            }
        );
        return data;
    } catch (error) {
        throw error;
    }
};

export default authPost;
