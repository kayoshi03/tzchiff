import axios from "axios";
const api = "http://46.8.210.113:5000/api"
const API = axios.create({
        baseURL: api,
        headers: {

        }
})

export default API