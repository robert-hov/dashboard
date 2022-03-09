import axios from "axios";

// export default axios.create({
//     baseURL: ""
// })

export const URL = axios.create({
    baseURL: 'http://165.22.83.19:3040/api',
})