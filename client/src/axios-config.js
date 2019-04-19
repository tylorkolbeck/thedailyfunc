import axios from 'axios'

export let axiosInstance = axios.create({
    baseURL: 'http://localhost:8000' + process.env.REACT_APP_SERVER_URL,
    timeout: 1000
})

