import axios from "axios";

const authPost = async (token) => {
    try {
        const { data } = await axios.post(
            "http://localhost:3001/auth",
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
