import * as request from '~/utils/request';

export const getOrders = async () => {
    try {
        const res = await request.get('/orders');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getOrdersPagination = async (page, size, sort) => {
    try {
        const res = await request.get('/orders/pagination', {
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
