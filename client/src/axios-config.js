import axios from 'axios'

let DB_URL = ''

if (process.env.NODE_ENV === 'development') {
    DB_URL = 'http://localhost:8000'
} else {
    DB_URL = 'https://thedailyfunc.com/api'
}

export let axiosInstance = axios.create({
    // baseURL: process.env.REACT_APP_SERVER_URL,
    baseURL: DB_URL,

    timeout: 10000
})

