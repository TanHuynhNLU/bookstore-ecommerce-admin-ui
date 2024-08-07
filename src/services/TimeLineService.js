import * as request from '~/utils/request';

export const getTimeLines = async (orderId) => {
    try {
        const res = await request.get(`/orders/${orderId}/timeline-entries`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const addTimeLine = async (orderId, event) => {
    try {
        const res = await request.post(`/orders/${orderId}/timeline-entries`, { event });
        return res;
    } catch (error) {
        console.log(error);
    }
};
