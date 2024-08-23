import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8080/api',
});

request.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export const post = async (path, data, option = {}) => {
    const response = await request.post(path, data, option);
    return response.data;
};

export const put = async (path, data, option = {}) => {
    const response = await request.put(path, data, option);
    return response.data;
};

export const patch = async (path, data, option = {}) => {
    const response = await request.patch(path, data, option);
    return response.data;
};

export const deletes = async (path, option = {}) => {
    const response = await request.delete(path, option);
    return response.data;
};
