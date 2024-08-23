import { PencilIcon, ShoppingCartIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

import 'react-toastify/dist/ReactToastify.css';
import ProductImage from '~/assets/images/book-image.png';
import AnimatedNumber from '~/components/animated/AnimatedNumber';
import BarChart from '~/components/chart/BarChart';
import LineChart from '~/components/chart/LineChart';
import { getOrderChartData, getOrders } from '~/services/OrderService';
import * as productService from '~/services/ProductService';
import { getBooksPagination } from '~/services/ProductService';
import { getUsers } from '~/services/UserService';

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
                                        <UsersIcon className="h-6 w-6 text-blue-700" />
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
                                        <ShoppingCartIcon className="h-6 w-6 text-blue-700" />
                                    </div>
                                </div>
                                <div className="mb-4 text-xl font-bold">
                                    {orders && <AnimatedNumber number={orders.length} />}
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
