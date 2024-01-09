import axios from 'axios'
import 'dotenv/config'

const instance = axios.create({
    baseURL: process.env.PORT || "http://localhost:10000"
})

export default instance
