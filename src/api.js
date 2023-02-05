import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:4001',
    headers:{
        Accept: 'application/json'
    }
})

export default api