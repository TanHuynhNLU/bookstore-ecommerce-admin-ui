import * as request from '~/utils/request';

export const getContactsPagination = async (page, size, sort) => {
    try {
        const res = await request.get('/contacts/pagination', {
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

export const getContactById = async (id) => {
    try {
        const res = await request.get(`/contacts/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const addContactReply = async (id, reply) => {
    try {
        const res = await request.patch(`/contacts/${id}`, { reply });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteContact = async (id) => {
    try {
        const res = await request.deletes(`/contacts/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
