import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:1337/api",
});

export const createlogin = async (loginData) => {
    return await api.post("/logindata", loginData);

}

export default {
    login
};