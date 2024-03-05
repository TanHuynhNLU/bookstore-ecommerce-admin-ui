import { Link } from 'react-router-dom';
import { UserPlusIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import UserAvatar from '~/assets/images/user.png';
import { useEffect, useState } from 'react';
import * as userService from '~/services/UserService';
import { users as UserData } from '~/DummyData';
import { useDebounce } from '~/hooks';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Users() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [sortBy, setSortBy] = useState('id');
    const [sortDirection, setSortDirection] = useState('');
    const [totalUsers, setTotalUsers] = useState(100);
    const [totalPages, setTotalPages] = useState(10);
    const [searchValue, setSearchValue] = useState('');
    const debounce = useDebounce(searchValue, 500);
    const [isSearching, setIsSearching] = useState(false);

    const handleNextPageChange = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };
    const handlePreviousPageChange = () => {
        if (page > 0) setPage(page - 1);
    };
    const handleSortChange = (e) => {
        setIsSearching(false);
        setSortBy(e.target.value);
    };
    const handleSortDirectionChange = (e) => {
        setSortDirection(e.target.value);
    };
    const handlePageSizeChange = (e) => {
        setPageSize(e.target.value);
    };
    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value);
        setIsSearching(true);
    };
    const handleDeleteUserClick = (id) => {
        const fetchAPI = async () => {
            const res = await userService.deleteUser(id);
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
            text: 'Bạn có chắc là muốn xóa tài khoản này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                setUsers(
                    users.filter((item) => {
                        return item.id !== id;
                    }),
                );
                fetchAPI();
            }
        });
    };

    // Fetching user data from the API with pagination and sorting
    useEffect(() => {
        if (!isSearching) {
            const fetchAPI = async () => {
                const res = await userService.getUsersPagination(page, pageSize, `${sortDirection}${sortBy}`);
                setUsers(res.items);
                setTotalPages(res.totalPages);
                setTotalUsers(res.totalItems);
            };
            fetchAPI();
        } else {
            const fetchAPI = async () => {
                const res = await userService.searchByUsername(debounce, page, pageSize);
                setUsers(res.items);
                setTotalPages(res.totalPages);
                setTotalUsers(res.totalItems);
            };
            fetchAPI();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, pageSize, sortBy, sortDirection, debounce]);

    return (
        <div className="px-4 pb-6 dark:text-gray-400">
            <div className="px-3">
                <h2 className="text-3xl font-bold">Tài khoản</h2>
                <ul>
                    <li className="inline-block">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="inline-block pl-2">
                        <Link
                            to="/users"
                            className="text-slate-400 before:pr-2 before:content-['/'] dark:text-gray-500"
                        >
                            Tài khoản
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mt-6 px-3">
                <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                    <div className="p-3">
                        <div className="flex flex-row justify-between px-3 pt-3">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold">Tài khoản</h3>
                            </div>
                            <div>
                                <Link
                                    to="/add-user"
                                    className="flex flex-row items-center rounded-md border border-solid border-blue-700 px-2 py-1 text-blue-700 hover:bg-blue-700 hover:text-white"
                                >
                                    <UserPlusIcon className="inline-block h-4 w-4" />
                                    <span className="ml-1 inline-block">Thêm tài khoản</span>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col justify-between px-3 xl:flex-row xl:items-center">
                            <div className="flex w-[350px] flex-row items-center rounded-md border border-solid border-gray-300 bg-gray-100 p-2 focus-within:border-blue-700 dark:border-gray-600 dark:bg-slate-800">
                                <MagnifyingGlassIcon className="h-6 w-6" />
                                <input
                                    type="text"
                                    placeholder="Nhập tên tài khoản"
                                    className="ml-2 h-full w-full bg-gray-100 outline-none dark:bg-slate-800"
                                    onChange={handleSearchValueChange}
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
                                    onChange={handleSortChange}
                                >
                                    <option className="p-1" value="id">
                                        ID
                                    </option>
                                    <option value="username">Tên Đăng nhập</option>
                                    <option value="dateRegistered">Ngày đăng kí</option>
                                </select>
                                <select
                                    name="orderBy"
                                    id="orderBy"
                                    className="border border-solid border-gray-300 dark:border-gray-600 dark:bg-slate-800"
                                    onChange={handleSortDirectionChange}
                                >
                                    <option className="p-1" value="">
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
                                        <th className="w-12 p-3">ID</th>
                                        <th className="w-[300px] p-3">Tên</th>
                                        <th className="w-[200px] p-3">Ngày đăng kí</th>
                                        <th className="w-[200px] p-3">Quyền hạn</th>
                                        <th className="w-[200px] p-3">Trạng thái</th>
                                        <th className="w-[200px] p-3">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, id) => (
                                        <tr key={id} className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                            <td className="p-3">{user.id}</td>
                                            <td className="flex flex-row items-center p-3">
                                                <img
                                                    src={user.avatar ? user.avatar : UserAvatar}
                                                    alt="avatar"
                                                    className="h-10 w-10 rounded-full"
                                                />
                                                <div className="ml-3">
                                                    <p>{user.username}</p>
                                                    <p className="text-slate-400">{user.email}</p>
                                                </div>
                                            </td>
                                            <td className="p-3">{user.dateRegistered}</td>
                                            <td className="p-3">{user.role}</td>
                                            <td className="p-3">
                                                {user.status === 'Kích hoạt' ? (
                                                    <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                        Kích hoạt
                                                    </span>
                                                ) : (
                                                    <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                        Khóa
                                                    </span>
                                                )}

                                                {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                         Bị khóa
                                                    </span> */}
                                            </td>
                                            <td className="p-3">
                                                <div className="flex flex-row items-center">
                                                    <Link
                                                        to={`/update-user/${user.id}`}
                                                        className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                    >
                                                        <PencilIcon className="h-4 w-4 text-slate-600" />
                                                    </Link>
                                                    <button
                                                        id="deleteUser"
                                                        className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                        onClick={() => handleDeleteUserClick(user.id)}
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
                            <div className=" mt-4">
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
                                    {page * pageSize + 1}-{page * pageSize + users.length}{' '}
                                </b>
                                trong
                                <b> {totalUsers}</b>
                            </div>
                            <div className="mt-4 flex flex-row">
                                <button
                                    className="inline-block w-[120px] cursor-pointer rounded-l-xl border border-solid border-gray-300 px-4 py-2 text-center hover:bg-gray-100 dark:border-gray-600 dark:bg-slate-800 dark:hover:bg-slate-600"
                                    onClick={handlePreviousPageChange}
                                >
                                    Trang trước
                                </button>
                                <button
                                    className="inline-block w-[120px] cursor-pointer rounded-r-xl border border-solid border-gray-300 px-4 py-2 text-center hover:bg-gray-100 dark:border-gray-600 dark:bg-slate-800 dark:hover:bg-slate-600"
                                    onClick={handleNextPageChange}
                                >
                                    Trang sau
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Users;
