import axios from "axios";

var BackendUrl = "http://localhost:8000/api/v2"
if (process.env.MODE === "PRODUCTION") {
    BackendUrl = "https://awdiz-backend-4.onrender.com/api/v2"
}

const api = axios.create({ baseURL: BackendUrl })

export default api;