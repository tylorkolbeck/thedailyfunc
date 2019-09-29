import axios from 'axios'

export let axiosInstance = axios.create({
    // baseURL: process.env.REACT_APP_SERVER_URL,
    baseURL: 'https://thedailyfunc.com/api',

    timeout: 10000
})

