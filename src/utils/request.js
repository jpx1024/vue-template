import axios from 'axios'

import {
    contentType,
    requestTimeout,
    successCode,
    tokenName,
} from '@/config'

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: requestTimeout,
    headers: {
        'Content-Type': contentType,
    },
})

instance.interceptors.request.use(config => {
    if (localStorage.getItem(tokenName)) {
        config.headers.Authorization = localStorage.getItem(tokenName)
    }
    return config
}, (error) => {
    Promise.reject(error)
});

instance.interceptors.response.use(response => {
    const res = response.data;

    if (res.code != successCode) {
        return Promise.reject()
    }

    return res;
}, (error) => {
    return Promise.reject(error)
});

export default instance;