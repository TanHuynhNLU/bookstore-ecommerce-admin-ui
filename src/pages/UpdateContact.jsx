import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/24/outline';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import UserImage from '~/assets/images/user.png';
import * as userService from '~/services/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContactReply, getContactById } from '~/services/ContactService';
import { updateOrderStatus } from '~/services/OrderService';

function UpdateContact() {
    const { contactId } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        content: '',
        reply: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Handle the API call to update a user when the submit button is clicked
    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchAPI = async () => {
            const res = await addContactReply(contactId, formData.reply);
            if (res.status === 'OK') {
                toast.success('Cập nhật liên hệ thành công', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            } else {
                toast.error('Cập nhật liên hệ thất bại', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            }
        };
        fetchAPI();
    };

    // Make an API call to fetch a user by user ID
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getContactById(contactId);
            setFormData(res);
        };

        fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="px-4 dark:text-gray-400">
            <div className="px-3">
                <h2 className="text-3xl font-bold">Cập nhật liên hệ</h2>
                <ul>
                    <li className="inline-block">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="inline-block pl-2">
                        <Link
                            className="text-slate-400 before:pr-2 before:content-['/'] dark:text-gray-500"
                            to="/users"
                        >
                            Liên hệ
                        </Link>
                    </li>
                    <li className="inline-block pl-2">
                        <Link
                            className="text-slate-400 before:pr-2 before:content-['/'] dark:text-gray-500"
                            to="/update-user"
                        >
                            Cập nhật liên hệ
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="my-6 px-3">
                <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                    <div className="p-3">
                        <form className="mt-4 max-w-[800px]" onSubmit={handleSubmit}>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="name" className="mb-2 block">
                                        Họ và tên
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Họ và tên"
                                        value={formData.name || ''}
                                        disabled
                                        onChange={handleInputChange}
                                        className="w-full cursor-not-allowed rounded-md border border-solid border-gray-300 bg-gray-300 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-600"
                                    />
                                </div>
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="email" className="mb-2 block">
                                        Email (*)
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        required
                                        disabled
                                        value={formData.email || ''}
                                        onChange={handleInputChange}
                                        className="w-full cursor-not-allowed rounded-md border border-solid border-gray-300 bg-gray-300 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-600"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="title" className="mb-2 block">
                                        Tiêu đề
                                    </label>
                                    <div className="flex w-full flex-row rounded-md border border-solid border-gray-300 bg-gray-300 outline-none focus-within:border-blue-700 dark:border-gray-600 dark:bg-slate-600">
                                        <input
                                            id="title"
                                            name="title"
                                            type="title"
                                            required
                                            disabled
                                            value={formData.title || ''}
                                            onChange={handleInputChange}
                                            className="w-full cursor-not-allowed rounded-md bg-gray-300 p-2 outline-none dark:bg-slate-600"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3">
                                    <label htmlFor="content" className="mb-2 block">
                                        Nội dung
                                    </label>
                                    <textarea
                                        id="content"
                                        name="content"
                                        type="text"
                                        rows={5}
                                        placeholder="Nhập nội dung"
                                        value={formData.content || ''}
                                        onChange={handleInputChange}
                                        disabled
                                        className="w-full cursor-not-allowed rounded-md border border-solid border-gray-300 bg-gray-300 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3">
                                    <label htmlFor="reply" className="mb-2 block">
                                        Phản hồi
                                    </label>
                                    <textarea
                                        id="reply"
                                        name="reply"
                                        type="text"
                                        rows={5}
                                        placeholder="Nhập phản hồi"
                                        value={formData.reply || ''}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col p-[1px] sm:flex-row-reverse">
                                <div className="my-2 w-full px-3 sm:w-1/2 lg:w-[150px]">
                                    <button
                                        type="submit"
                                        className="w-full rounded-md bg-blue-700 px-4 py-2 text-white  hover:bg-blue-500"
                                    >
                                        Xác nhận
                                    </button>
                                </div>
                                <div className="my-2 w-full px-3 sm:w-1/2 lg:w-[150px]">
                                    <button className="h-[40px] w-full rounded-md border border-blue-700 px-4 py-2 text-blue-700 hover:bg-blue-500 hover:text-white">
                                        Hủy
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default UpdateContact;
