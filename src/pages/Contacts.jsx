import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import * as userService from '~/services/UserService';
import moment from 'moment';
// import { users as UserData } from '~/DummyData';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteContact, getContactsPagination } from '~/services/ContactService';

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [sortBy, setSortBy] = useState('id');
    const [sortDirection, setSortDirection] = useState('');
    const [totalContacts, setTotalContacts] = useState(100);
    const [totalPages, setTotalPages] = useState(10);

    const handleNextPageClick = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };
    const handlePreviousPageClick = () => {
        if (page > 0) setPage(page - 1);
    };
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };
    const handleSortDirectionChange = (e) => {
        setSortDirection(e.target.value);
    };
    const handlePageSizeChange = (e) => {
        setPageSize(e.target.value);
    };
    const handleDeleteUserClick = (id) => {
        const fetchAPI = async () => {
            const res = await deleteContact(id);
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
                setContacts(
                    contacts.filter((item) => {
                        return item.id !== id;
                    }),
                );
                fetchAPI();
            }
        });
    };

    // Fetching user data from the API with pagination and sorting
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getContactsPagination(page, pageSize, `${sortDirection}${sortBy}`);
            setContacts(res.items);
            setTotalPages(res.totalPages);
            setTotalContacts(res.totalItems);
        };
        fetchAPI();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, pageSize, sortBy, sortDirection]);

    return (
        <div className="px-4 pb-6 dark:text-gray-400">
            <div className="px-3">
                <h2 className="text-3xl font-bold">Liên hệ</h2>
                <ul>
                    <li className="inline-block">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="inline-block pl-2">
                        <Link
                            to="/contacts"
                            className="text-slate-400 before:pr-2 before:content-['/'] dark:text-gray-500"
                        >
                            Liên hệ
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mt-6 px-3">
                <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                    <div className="p-3">
                        <div className="flex flex-row justify-between px-3 pt-3">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold">Liên hệ</h3>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col justify-between px-3 xl:flex-row xl:items-center">
                            <div></div>
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
                                    <option value="name">Tên</option>
                                    <option value="email">Email</option>
                                    <option value="title">Tiêu đề</option>
                                    <option value="content">Nội dung</option>
                                    <option value="reply">Phản hồi</option>
                                    <option value="createdDate">Ngày tạo</option>
                                    <option value="repliedDate">Ngày phản hồi</option>
                                    <option value="repliedDate">Trạng thái</option>
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
                                        <th className="w-[200px] p-3">Tiêu đề</th>
                                        <th className="w-[200px] p-3">Nội dung</th>
                                        <th className="w-[200px] p-3">Phản hồi</th>
                                        <th className="w-[200px] p-3">Ngày tạo</th>
                                        <th className="w-[200px] p-3">Ngày phản hồi</th>
                                        <th className="w-[200px] p-3">Trạng thái</th>
                                        <th className="w-[200px] p-3">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.map((contact, id) => (
                                        <tr key={contact.id} className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                            <td className="p-3">{contact.id}</td>
                                            <td className="flex flex-row items-center p-3">
                                                <div className="ml-3">
                                                    <p>{contact.name}</p>
                                                    <p className="text-slate-400">{contact.email}</p>
                                                </div>
                                            </td>
                                            <td className="p-3">{contact.title}</td>
                                            <td className="truncate p-3">{contact.content}</td>
                                            <td className="truncate p-3">{contact.reply}</td>
                                            <td className="truncate p-3">
                                                {moment(contact.createdDate).format('DD-MM-YYYY')}
                                            </td>
                                            <td className="truncate p-3">
                                                {contact.repliedDate &&
                                                    moment(contact.repliedDate).format('DD-MM-YYYY')}
                                            </td>
                                            <td className="p-3">
                                                {contact.status === 'Chưa phản hồi' ? (
                                                    <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                        Chưa phản hồi
                                                    </span>
                                                ) : (
                                                    <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                        Đã phản hồi
                                                    </span>
                                                )}

                                                {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                         Bị khóa
                                                    </span> */}
                                            </td>
                                            <td className="p-3">
                                                <div className="flex flex-row items-center">
                                                    <Link
                                                        to={`/update-contact/${contact.id}`}
                                                        className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                    >
                                                        <PencilIcon className="h-4 w-4 text-slate-600" />
                                                    </Link>
                                                    <button
                                                        id="deleteUser"
                                                        className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                        onClick={() => handleDeleteUserClick(contact.id)}
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
                                    {page * pageSize + 1}-{page * pageSize + contacts.length}{' '}
                                </b>
                                trong
                                <b> {totalContacts}</b>
                            </div>
                            <div className="mt-4 flex flex-row">
                                <button
                                    className="inline-block w-[120px] cursor-pointer rounded-l-xl border border-solid border-gray-300 px-4 py-2 text-center hover:bg-gray-100 dark:border-gray-600 dark:bg-slate-800 dark:hover:bg-slate-600"
                                    onClick={handlePreviousPageClick}
                                >
                                    Trang trước
                                </button>
                                <button
                                    className="inline-block w-[120px] cursor-pointer rounded-r-xl border border-solid border-gray-300 px-4 py-2 text-center hover:bg-gray-100 dark:border-gray-600 dark:bg-slate-800 dark:hover:bg-slate-600"
                                    onClick={handleNextPageClick}
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

export default Contacts;
