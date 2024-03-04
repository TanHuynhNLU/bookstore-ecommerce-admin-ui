import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8080/api',
});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export const post = async (path, data, option = {}) => {
    const response = await request.post(path, data, option);
    return response.data;
};

export const deletes = async (path, option = {}) => {
    const response = await request.delete(path, option);
    return response.data;
};