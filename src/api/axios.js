import axios from "axios";

const apiInstance = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {
        "Content-Type": "aplication/json"
    },
    timeout: 10000
})

export default apiInstance