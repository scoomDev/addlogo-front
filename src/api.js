import axios from 'axios'

export const Api =  () => {
    return axios.create({
        baseURL: `http://localhost:8000/api`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
};
