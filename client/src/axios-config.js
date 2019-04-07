import axios from 'axios'

export let axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    timeout: 1000
})

