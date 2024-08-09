import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

import { formatNumber } from '~/utils/utils';
import UserAvatar from '~/assets/images/user.png';
import { getOrdersPagination } from '~/services/OrderService';
import { useEffect, useState } from 'react';
import moment from 'moment';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [sortBy, setSortBy] = useState('id');
    const [sortDirection, setSortDirection] = useState('');
    const [pageSize, setPageSize] = useState(10);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalPages, setTotalPages] = useState(10);
    const [page, setPage] = useState(0);

    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
    };
    const handleSortDirectionChange = (e) => {
        setSortDirection(e.target.value);
    };
    const handlePageSizeChange = (e) => {
        setPageSize(e.target.value);
    };
    const handleNextPageClick = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };
    const handlePreviousPageClick = () => {
        if (page > 0) setPage(page - 1);
    };

    // Fetching user data from the API with pagination and sorting
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getOrdersPagination(page, pageSize, sortBy);
            setOrders(res.items);
            setTotalPages(res.totalPages);
            setTotalOrders(res.totalItems);
        };
        fetchAPI();
    }, [sortBy, sortDirection, pageSize, page]);
    return (
        <div className="px-4 pb-6 dark:text-gray-400">
            <div className="px-3">
                <h2 className="text-3xl font-bold">Users</h2>
                <ul>
                    <li className="inline-block">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="inline-block pl-2">
                        <Link
                            to="/orders"
                            className="text-slate-400 before:pr-2 before:content-['/'] dark:text-gray-500"
                        >
                            Đơn hàng
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mt-6 px-3">
                <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                    <div className="p-3">
                        <div className="flex flex-row justify-between px-3 pt-3">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold">Đơn hàng</h3>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col justify-between px-3 xl:flex-row xl:items-center">
                            <div className="flex w-[350px] flex-row items-center rounded-md border border-solid border-gray-300 bg-gray-100 p-2 focus-within:border-blue-700 dark:border-gray-600 dark:bg-slate-800">
                                <MagnifyingGlassIcon className="h-6 w-6" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="ml-2 h-full w-full bg-gray-100 outline-none dark:bg-slate-800"
                                />
                            </div>
                            <div className="mt-4 flex flex-row xl:mt-0">
                                <label htmlFor="filter" className="inline-block">
                                    Sắp xếp:{' '}
                                </label>
                                <select
                                    name="filter"
                                    id="filter"
                                    className="border border-solid border-gray-300 dark:border-gray-600 dark:bg-slate-800"
                                    onChange={handleSortByChange}
                                >
                                    <option value="id" className="p-1">
                                        ID
                                    </option>
                                    <option value="customer.name">Tên</option>
                                    <option value="customer.email">Email</option>
                                    <option value="dateCreated">Ngày đặt</option>
                                    <option value="status">Trạng thái</option>
                                </select>
                                <select
                                    name="orderBy"
                                    id="orderBy"
                                    className="border border-solid border-gray-300 dark:border-gray-600 dark:bg-slate-800"
                                    onChange={handleSortDirectionChange}
                                >
                                    <option value="" className="p-1">
                                        A-Z
                                    </option>
                                    <option value="-">Z-A</option>
                                </select>
                            </div>
                        </div>
                        <div className="overflow-x-auto px-3">
                            <table className="mt-4 w-full table-fixed border border-solid border-gray-300 text-left dark:border-gray-600">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-slate-800">
                                        <th className="w-8 p-3">ID</th>
                                        <th className="w-[300px] p-3">Tên</th>
                                        <th className="w-[200px] p-3">Ngày đặt</th>
                                        <th className="w-[200px] p-3">Tổng giá</th>
                                        <th className="w-[200px] p-3">Trạng thái</th>
                                        <th className="w-[200px] p-3">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                            <td className="p-3">{order.id}</td>
                                            <td className="flex flex-row items-center p-3">
                                                <img
                                                    src={order.customer.avatar || UserAvatar}
                                                    alt="avatar"
                                                    className="h-10 w-10 rounded-full"
                                                />
                                                <div className="ml-3">
                                                    <p>{order.customer.name}</p>
                                                    <p className="text-slate-400">{order.customer.email}</p>
                                                </div>
                                            </td>
                                            <td className="p-3">{moment(order.dateCreated).format('DD/MM/YYYY')}</td>
                                            <td className="p-3">{formatNumber(order.totalPrice)} vnd</td>
                                            <td className="p-3">
                                                {order.status === 'Hoàn tất' && (
                                                    <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                        Hoàn tất
                                                    </span>
                                                )}
                                                {order.status === 'Đang xử lý' && (
                                                    <span class="inline-block rounded-xl bg-gradient-to-tr from-yellow-400 to-yellow-500 px-2 text-white">
                                                        Đang xử lý
                                                    </span>
                                                )}
                                                {order.status === 'Hủy' && (
                                                    <span class="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                        Hủy
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-3">
                                                <div className="flex flex-row items-center">
                                                    <Link
                                                        to={`/update-order/${order.id}`}
                                                        className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                    >
                                                        <PencilIcon className="h-4 w-4 text-slate-600" />
                                                    </Link>
                                                    <button
                                                        id="deleteOrder"
                                                        className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                    >
                                                        <TrashIcon className="h-4 w-4 text-slate-600" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col justify-between px-3 xl:flex-row xl:items-center">
                            <div className="mt-4">
                                Số hàng
                                <select
                                    name="entries"
                                    id="entries"
                                    className="border border-solid border-gray-300 dark:border-gray-600 dark:bg-slate-800"
                                    onChange={handlePageSizeChange}
                                >
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                </select>
                                <b>
                                    {' '}
                                    {page * pageSize + 1}-{page * pageSize + orders.length}{' '}
                                </b>
                                trong
                                <b> {totalOrders}</b>
                            </div>
                            <div className="mt-4 flex flex-row">
                                <button
                                    onClick={handlePreviousPageClick}
                                    className="inline-block w-[120px] cursor-pointer rounded-l-xl border border-solid border-gray-300 px-4 py-2 text-center hover:bg-gray-100 dark:border-gray-600 dark:bg-slate-800 dark:hover:bg-slate-600"
                                >
                                    Trang trước
                                </button>
                                <button
                                    onClick={handleNextPageClick}
                                    className="inline-block w-[120px] cursor-pointer rounded-r-xl border border-solid border-gray-300 px-4 py-2 text-center hover:bg-gray-100 dark:border-gray-600 dark:bg-slate-800 dark:hover:bg-slate-600"
                                >
                                    Trang sau
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;
