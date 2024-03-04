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

export const deleteUser = async (id) => {
    try {
        const res = await request.deletes(`/users/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
