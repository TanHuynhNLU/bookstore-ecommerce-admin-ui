import * as request from '~/utils/request';

export const getBooks = async () => {
    try {
        const res = await request.get('/books');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getBooksPagination = async (page, size, sort) => {
    try {
        const res = await request.get('/books/pagination', {
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

export const searchBookPagination = async (q, page, size, sort) => {
    try {
        const res = await request.get('/books/search', {
            params: {
                q,
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

export const getBook = async (id) => {
    try {
        const res = await request.get(`/books/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const checkName = async (name) => {
    try {
        const res = await request.get(`/books/check-name/${name}`);
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

export const addNewBook = async (book) => {
    try {
        const res = await request.post('/books', book);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateBook = async (id, book) => {
    try {
        const res = await request.put(`/books/${id}`, book);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteBook = async (id) => {
    try {
        const res = await request.deletes(`/books/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
