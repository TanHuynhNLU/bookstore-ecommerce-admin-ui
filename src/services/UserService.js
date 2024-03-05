import * as request from '~/utils/request';

export const getUsers = async () => {
    try {
        const res = await request.get('/users');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUsersPagination = async (page, size, sort) => {
    try {
        const res = await request.get('/users/pagination', {
            params: {
                page,
                size,
                sort,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async (id) => {
    try {
        const res = await request.get(`/users/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const searchByUsername = async (username, page, size) => {
    try {
        const res = await request.get('/users/search', {
            params: {
                username,
                page,
                size,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const checkUsername = async (username) => {
    try {
        const res = await request.get(`/users/check-username/${username}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const uploadFile = async (file) => {
    try {
        let formdata = new FormData();
        formdata.append('file', file);
        const res = await request.post('/FileUpload', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const addNewUser = async (user) => {
    try {
        const res = await request.post('/users', user);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = async (id, user) => {
    try {
        const res = await request.put(`/users/${id}`, user);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteUser = async (id) => {
    try {
        const res = await request.deletes(`/users/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
