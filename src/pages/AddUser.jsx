import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserImage from '~/assets/images/user.png';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

function AddUser() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const handleShowPassword = () => setIsShowPassword((prevState) => !prevState);
    const [selectedImage, setSelectedImage] = useState(UserImage);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            // Use FileReader to convert the selected image to a data URL
            const reader = new FileReader();

            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        // Cleanup function to revoke the object URL when component unmounts
        return () => {
            if (selectedImage) {
                URL.revokeObjectURL(selectedImage);
            }
        };
    }, [selectedImage]);
    return (
        <div className="px-4 pb-6 dark:text-gray-400">
            <div className="px-3">
                <h2 className="text-3xl font-bold">Thêm tài khoản</h2>
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
                    <li className="inline-block pl-2">
                        <Link
                            to="/add-user"
                            className="text-slate-400 before:pr-2 before:content-['/'] dark:text-gray-500"
                        >
                            Thêm tài khoản
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mt-6 px-3">
                <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                    <div className="p-3">
                        <div className="px-3 pt-3">
                            <h3 className="mb-2 text-2xl font-bold">Thông tin chung</h3>
                        </div>
                        <form className="mt-4 max-w-[800px]">
                            <div className="relative mx-auto mb-6 block h-[100px] w-[100px] rounded-full">
                                <img
                                    src={selectedImage}
                                    alt="Avatar"
                                    className="mx-auto block h-[100px] w-[100px] rounded-full object-cover"
                                    onChange={handleImageChange}
                                />
                                <label htmlFor="avatar" className="absolute bottom-0 right-0 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-8 w-8 rounded-full bg-white text-blue-700"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </label>
                                <input
                                    type="file"
                                    name="avatar"
                                    id="avatar"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3">
                                    <label htmlFor="name" className="mb-2 block">
                                        Họ và tên
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Nhập Họ và tên"
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="username" className="mb-2 block">
                                        Tên tài khoản (*)
                                    </label>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Nhập tên tài khoản"
                                        required=""
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="password" className="mb-2 block">
                                        Mật khẩu (*)
                                    </label>
                                    <div className="flex w-full flex-row rounded-md border border-solid border-gray-300 bg-gray-100 outline-none focus-within:border-blue-700 dark:border-gray-600 dark:bg-slate-800">
                                        <input
                                            id="password"
                                            name="password"
                                            type={isShowPassword ? 'text' : 'password'}
                                            placeholder="Nhập mật khẩu"
                                            required=""
                                            className="w-full rounded-md bg-gray-100 p-2 outline-none dark:bg-slate-800"
                                        />
                                        {isShowPassword ? (
                                            <EyeSlashIcon className="w-8 pr-2" onClick={handleShowPassword} />
                                        ) : (
                                            <EyeIcon className="w-8 pr-2" onClick={handleShowPassword} />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="email" className="mb-2 block">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Nhập địa chỉ Email"
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="role" className="mb-2 block">
                                        Quyền
                                    </label>
                                    <select
                                        name="role"
                                        id="role"
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    >
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                            </div>
                            <div className="px-3 pt-3">
                                <h3 className="mb-2 text-2xl font-bold">Thông tin bổ sung</h3>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="birthday" className="mb-2 block">
                                        Ngày sinh
                                    </label>
                                    <input
                                        id="birthday"
                                        name="birthday"
                                        type="date"
                                        className="h-10 w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="gender" className="mb-2 block">
                                        Giới tính
                                    </label>
                                    <select
                                        name="gender"
                                        id="gender"
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    >
                                        <option value="" />
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                        <option value="Khác">Khác</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="address" className="mb-2 block">
                                        Địa chỉ
                                    </label>
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        placeholder="Nhập vào địa chỉ"
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="phone" className="mb-2 block">
                                        Số điện thoại
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        placeholder="Nhập vào số điện thoại"
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col p-[1px] sm:flex-row-reverse">
                                <div className="my-2 w-full px-3 sm:w-1/2 lg:w-[150px]">
                                    <button className="w-full rounded-md bg-blue-700 px-4 py-2 text-white  hover:bg-blue-500">
                                        Xác nhận
                                    </button>
                                </div>
                                <div className="my-2 w-full px-3 sm:w-1/2 lg:w-[150px]">
                                    <button className="w-full rounded-md border border-blue-700 px-4 py-2 text-blue-700 hover:bg-blue-500 hover:text-white">
                                        Hủy
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUser;
