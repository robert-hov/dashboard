import axios from "axios";

export const URL = axios.create({
    baseURL: 'http://165.22.83.19:3040/api',
})