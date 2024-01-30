import { Link } from 'react-router-dom';
import { UserPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Avatar from '~/assets/images/avatar.jpg';

function Users() {
    return (
        <div className="px-4 dark:text-gray-400">
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
            <div className="my-6 px-3">
                <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                    <div className="p-3">
                        <div className="flex flex-row justify-between px-3 pt-3">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold">Tài khoản</h3>
                                <p className="text-gray-400">1.234 tài khoản đã đăng kí</p>
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
                                >
                                    <option selected="" className="p-1">
                                        Không
                                    </option>
                                    <option value="name">Tên</option>
                                    <option value="dateRegistered">Ngày đăng kí</option>
                                </select>
                                <select
                                    name="orderBy"
                                    id="orderBy"
                                    className="border border-solid border-gray-300 dark:border-gray-600 dark:bg-slate-800"
                                >
                                    <option selected="" className="p-1">
                                        A-Z
                                    </option>
                                    <option value="name">Z-A</option>
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
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">1</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
                                            <div className="ml-3">
                                                <p>Tan Huynh</p>
                                                <p className="text-slate-400">tanhuynh@gmail.com</p>
                                            </div>
                                        </td>
                                        <td className="p-3">1/8/2023</td>
                                        <td className="p-3">Admin</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Kích hoạt
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="/update-user"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                        />
                                                    </svg>
                                                </Link>
                                                <a
                                                    id="deleteUser"
                                                    href="/#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">2</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
                                            <div className="ml-3">
                                                <p>Tan Huynh</p>
                                                <p className="text-slate-400">tanhuynh@gmail.com</p>
                                            </div>
                                        </td>
                                        <td className="p-3">1/8/2023</td>
                                        <td className="p-3">Admin</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Bị khóa
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="/update-user"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                        />
                                                    </svg>
                                                </Link>
                                                <a
                                                    id="deleteUser"
                                                    href="/#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">3</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
                                            <div className="ml-3">
                                                <p>Tan Huynh</p>
                                                <p className="text-slate-400">tanhuynh@gmail.com</p>
                                            </div>
                                        </td>
                                        <td className="p-3">1/8/2023</td>
                                        <td className="p-3">Admin</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Kích hoạt
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="/update-user"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                        />
                                                    </svg>
                                                </Link>
                                                <a
                                                    id="deleteUser"
                                                    href="/#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">4</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
                                            <div className="ml-3">
                                                <p>Tan Huynh</p>
                                                <p className="text-slate-400">tanhuynh@gmail.com</p>
                                            </div>
                                        </td>
                                        <td className="p-3">1/8/2023</td>
                                        <td className="p-3">Admin</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Bị khóa
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="/update-user"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                        />
                                                    </svg>
                                                </Link>
                                                <a
                                                    id="deleteUser"
                                                    href="/#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">5</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
                                            <div className="ml-3">
                                                <p>Tan Huynh</p>
                                                <p className="text-slate-400">tanhuynh@gmail.com</p>
                                            </div>
                                        </td>
                                        <td className="p-3">1/8/2023</td>
                                        <td className="p-3">Admin</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Kích hoạt
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="/update-user"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                        />
                                                    </svg>
                                                </Link>
                                                <a
                                                    id="deleteUser"
                                                    href="/#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">6</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
                                            <div className="ml-3">
                                                <p>Tan Huynh</p>
                                                <p className="text-slate-400">tanhuynh@gmail.com</p>
                                            </div>
                                        </td>
                                        <td className="p-3">1/8/2023</td>
                                        <td className="p-3">Admin</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Bị khóa
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="/update-user"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                        />
                                                    </svg>
                                                </Link>
                                                <a
                                                    id="deleteUser"
                                                    href="/#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">7</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
                                            <div className="ml-3">
                                                <p>Tan Huynh</p>
                                                <p className="text-slate-400">tanhuynh@gmail.com</p>
                                            </div>
                                        </td>
                                        <td className="p-3">1/8/2023</td>
                                        <td className="p-3">Admin</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Kích hoạt
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="/update-user"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                        />
                                                    </svg>
                                                </Link>
                                                <a
                                                    id="deleteUser"
                                                    href="/#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">8</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
                                            <div className="ml-3">
                                                <p>Tan Huynh</p>
                                                <p className="text-slate-400">tanhuynh@gmail.com</p>
                                            </div>
                                        </td>
                                        <td className="p-3">1/8/2023</td>
                                        <td className="p-3">Admin</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Bị khóa
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="/update-user"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                        />
                                                    </svg>
                                                </Link>
                                                <a
                                                    id="deleteUser"
                                                    href="/#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">9</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
                                            <div className="ml-3">
                                                <p>Tan Huynh</p>
                                                <p className="text-slate-400">tanhuynh@gmail.com</p>
                                            </div>
                                        </td>
                                        <td className="p-3">1/8/2023</td>
                                        <td className="p-3">Admin</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Kích hoạt
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="/update-user"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                        />
                                                    </svg>
                                                </Link>
                                                <a
                                                    id="deleteUser"
                                                    href="/#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">10</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={Avatar} alt="avatar" className="h-10 w-10 rounded-full" />
                                            <div className="ml-3">
                                                <p>Tan Huynh</p>
                                                <p className="text-slate-400">tanhuynh@gmail.com</p>
                                            </div>
                                        </td>
                                        <td className="p-3">1/8/2023</td>
                                        <td className="p-3">Admin</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Bị khóa
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="/update-user"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                        />
                                                    </svg>
                                                </Link>
                                                <a
                                                    id="deleteUser"
                                                    href="/#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-slate-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
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
                                >
                                    <option value={10} selected="">
                                        10
                                    </option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                </select>
                                <b>1-10 </b>
                                trong
                                <b> 120</b>
                            </div>
                            <div className="mt-4 flex flex-row">
                                <a
                                    href="/#"
                                    className="inline-block w-[120px] cursor-pointer rounded-l-xl border border-solid border-gray-300 px-4 py-2 text-center hover:bg-gray-100 dark:border-gray-600 dark:bg-slate-800 dark:hover:bg-slate-600"
                                >
                                    Trang trước
                                </a>
                                <a
                                    href="/#"
                                    className="inline-block w-[120px] cursor-pointer rounded-r-xl border border-solid border-gray-300 px-4 py-2 text-center hover:bg-gray-100 dark:border-gray-600 dark:bg-slate-800 dark:hover:bg-slate-600"
                                >
                                    Trang sau
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;
