import axios from 'axios'

export let axiosInstance = axios.create({
    // baseURL: 'http://localhost:8000' + process.env.REACT_APP_SERVER_URL,
    baseURL: 'https://thedailyfunc.com' + process.env.REACT_APP_SERVER_URL,

    timeout: 10000
})

