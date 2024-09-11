import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:1337/api",
});

export const createlogin = async (loginData) => {
    return await api.post("http://localhost:1337/api, login.data");

}

export default {
    createlogin
};