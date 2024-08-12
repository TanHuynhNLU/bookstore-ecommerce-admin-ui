import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

import ProductImage from '~/assets/images/book-image.png';
import AnimatedNumber from '~/components/animated/AnimatedNumber';
import BarChart from '~/components/chart/BarChart';
import LineChart from '~/components/chart/LineChart';
import { getOrderChartData, getOrders } from '~/services/OrderService';
import { getBooksPagination } from '~/services/ProductService';
import { getUsers } from '~/services/UserService';
import * as productService from '~/services/ProductService';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
    const currentMonth = moment().format('MM');
    const currentYear = moment().format('YYYY');

    const [orderData, setOrderData] = useState();
    const [users, setUsers] = useState();
    const [orders, setOrders] = useState();
    const [books, setBooks] = useState();

    const handleDeleteBookClick = (id) => {
        const fetchAPI = async () => {
            const res = await productService.deleteBook(id);
            if (res.status === 'OK') {
                toast.success('Xóa thành công', {
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
                toast.error('Xóa thất bại', {
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

        Swal.fire({
            title: 'Thông báo',
            text: 'Bạn có chắc là muốn xóa sách này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                setBooks(
                    books.filter((item) => {
                        return item.id !== id;
                    }),
                );
                fetchAPI();
            }
        });
    };

    useEffect(() => {
        const fetchAPI = async () => {
            const chartData = await getOrderChartData();
            const orders = await getOrders();
            const users = await getUsers();
            const books = await getBooksPagination(0, 10, '-id');
            setOrderData(chartData);
            setUsers(users);
            setOrders(orders);
            setBooks(books.items);
        };
        fetchAPI();
    }, []);
    return (
        <div className="px-4 dark:text-gray-400">
            <div className="px-3">
                <h2 className="text-3xl font-bold">Dashboard</h2>
            </div>
            <div className="mt-6 flex flex-col xl:flex-row">
                <div className="flex w-full flex-col xl:w-4/12">
                    <div className="mb-6 px-3">
                        <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                            <div className="p-6">
                                <div className="flex flex-row">
                                    <div className="w-1/2">
                                        <h3 className="mb-2 text-2xl font-bold">Đơn hàng</h3>
                                        <p className="text-gray-400">
                                            01/{currentYear} - {currentMonth}/{currentYear}
                                        </p>
                                    </div>
                                    <div className="w-1/2 text-right text-2xl text-blue-700">
                                        {orderData && <AnimatedNumber number={orderData.income} />} vnđ
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 h-[150px]">{orderData && <LineChart chartData={orderData} />}</div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-6 w-full px-3 lg:w-1/2">
                            <div className="rounded-xl border border-solid bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-slate-900">
                                <div className="flex flex-row justify-between">
                                    <h4 className="text-gray-400">Tài khoản</h4>
                                    <div className="bg-[--bg-blue-700-opacity-20] p-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6 text-blue-700"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="mb-4 text-xl font-bold">
                                    {users && <AnimatedNumber number={users.length} />}
                                </div>
                            </div>
                        </div>
                        <div className="mb-6 w-full px-3 lg:w-1/2">
                            <div className="rounded-xl border border-solid bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-slate-900">
                                <div className="flex flex-row justify-between">
                                    <h4 className="text-gray-400">Orders</h4>
                                    <div className="bg-[--bg-blue-700-opacity-20] p-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6 text-blue-700"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="mb-4 text-xl font-bold">
                                    {orders && <AnimatedNumber number={users.length} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-8/12">
                    <div className="mb-6 px-3">
                        <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                            <div className="p-6">
                                <h3 className="mb-2 text-2xl font-bold">Thu nhập</h3>
                                <p className="text-gray-400">
                                    01/{currentYear} - {currentMonth}/{currentYear}
                                </p>
                            </div>
                            <div className="mt-4 h-[292px]">{orderData && <BarChart chartData={orderData} />}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-6 px-3">
                <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                    <div className="p-3">
                        <div className="px-3 pt-3">
                            <h3 className="mb-2 text-2xl font-bold">Sản phẩm mới</h3>
                        </div>
                        <div className="overflow-x-auto px-3">
                            <table className="mt-4 w-full table-fixed border border-solid border-gray-300 text-left dark:border-gray-600">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-slate-800">
                                        <th className="w-8 p-3">ID</th>
                                        <th className="w-[250px] p-3">Sản phẩm</th>
                                        <th className="w-[120px] p-3">Thể loại</th>
                                        <th className="w-[100px] p-3">Số lượng</th>
                                        <th className="w-[150px] p-3">Giá</th>
                                        <th className="w-[120px] p-3">Đã bán</th>
                                        <th className="w-[150px] p-3">Trạng thái</th>
                                        <th className="w-[150px] p-3">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books &&
                                        books.map((book, id) => (
                                            <tr key={id} className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                                <td className="p-3">{book.id}</td>
                                                <td className="flex flex-row items-center p-3">
                                                    <img
                                                        src={book.image || ProductImage}
                                                        alt="product"
                                                        className="h-16 w-12 object-cover"
                                                    />
                                                    <div className="ml-3">
                                                        <p>{book.name}</p>
                                                        <p className="text-slate-400">{book.author}</p>
                                                    </div>
                                                </td>
                                                <td className="p-3">{book.genre}</td>
                                                <td className="p-3">{book.stock}</td>
                                                <td className="p-3">{book.price} vnd</td>
                                                <td className="p-3">{book.sales}</td>
                                                <td className="p-3">
                                                    {book.status === 'Mở bán' ? (
                                                        <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                            Mở bán
                                                        </span>
                                                    ) : (
                                                        <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                            Hết hàng
                                                        </span>
                                                    )}
                                                    {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Hết hàng
                                            </span> */}
                                                </td>
                                                <td className="p-3">
                                                    <div className="flex flex-row items-center">
                                                        <Link
                                                            to={`/update-product/${book.id}`}
                                                            className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                        >
                                                            <PencilIcon className="h-4 w-4 text-slate-600" />
                                                        </Link>
                                                        <button
                                                            id="deleteUser"
                                                            onClick={() => handleDeleteBookClick(book.id)}
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
