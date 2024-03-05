import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/24/outline';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import UserImage from '~/assets/images/user.png';
import * as userService from '~/services/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateUser() {
    const { userId } = useParams();
    const [formData, setFormData] = useState({
        avatar: '',
        fullName: '',
        username: '',
        password: '',
        email: '',
        role: 'User',
        birthday: '',
        gender: 'Khác',
        address: '',
        phone: '',
        dateRegistered: '',
        status: 'Bị khóa',
    });
    const [selectedImage, setSelectedImage] = useState({
        file: null,
        preview: UserImage,
    });

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            // Use FileReader to convert the selected image to a data URL
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedImage({
                    file: selectedFile,
                    preview: reader.result,
                });
            };

            reader.readAsDataURL(selectedFile);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Handle the API call to add a new user when the submit button is clicked
    const handleSubmit = (e) => {
        e.preventDefault();

        const fetchAPI = async () => {
            if (selectedImage.file) {
                const uploadFileAPI = await userService.uploadFile(selectedImage.file);
                if (uploadFileAPI.status === 'CREATED')
                    formData.avatar = `http://localhost:8080/api/FileUpload/files/${uploadFileAPI.data}`;
            }
            const addNewUserAPI = await userService.updateUser(userId, formData);
            if (addNewUserAPI.status === 'OK') {
                toast.success('Cập nhật tài khoản thành công', {
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
                toast.error('Cập nhật tài khoản thất bại', {
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

    useEffect(() => {
        // Cleanup function to revoke the object URL when component unmounts
        return () => {
            if (selectedImage) {
                URL.revokeObjectURL(selectedImage.preview);
            }
        };
    }, [selectedImage]);

    // Make an API call to fetch a user by user ID
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await userService.getUser(userId);
            setFormData(res);
            setSelectedImage({
                file: null,
                preview: res.avatar,
            });
        };

        fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="px-4 dark:text-gray-400">
            <div className="px-3">
                <h2 className="text-3xl font-bold">Cập nhật tài khoản</h2>
                <ul>
                    <li className="inline-block">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="inline-block pl-2">
                        <Link
                            className="text-slate-400 before:pr-2 before:content-['/'] dark:text-gray-500"
                            to="/users"
                        >
                            Tài khoản
                        </Link>
                    </li>
                    <li className="inline-block pl-2">
                        <Link
                            className="text-slate-400 before:pr-2 before:content-['/'] dark:text-gray-500"
                            to="/update-user"
                        >
                            Cập nhật tài khoản
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="my-6 px-3">
                <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                    <div className="p-3">
                        <div className="px-3 pt-3">
                            <h3 className="mb-2 text-2xl font-bold">Thông tin chung</h3>
                        </div>
                        <form className="mt-4 max-w-[800px]" onSubmit={handleSubmit}>
                            <div className="relative mx-auto mb-6 block h-[100px] w-[100px] rounded-full">
                                <img
                                    src={selectedImage.preview}
                                    alt="Avatar"
                                    className="mx-auto block h-[100px] w-[100px] rounded-full object-cover"
                                />
                                <label htmlFor="avatar" className="absolute bottom-0 right-0 cursor-pointer">
                                    <ArrowUpCircleIcon className="h-8 w-8 rounded-full bg-white text-blue-700" />
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
                                    <label htmlFor="fullName" className="mb-2 block">
                                        Họ và tên
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        placeholder="Nhập Họ và tên"
                                        defaultValue={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="username" className="mb-2 block">
                                        Tên đăng nhập (*)
                                    </label>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        disabled
                                        defaultValue={formData.username}
                                        onChange={handleInputChange}
                                        className="w-full cursor-not-allowed rounded-md border border-solid border-gray-300 bg-gray-300 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-600"
                                    />
                                </div>
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="password" className="mb-2 block">
                                        Mật khẩu (*)
                                    </label>
                                    <div className="flex w-full flex-row rounded-md border border-solid border-gray-300 bg-gray-300 outline-none focus-within:border-blue-700 dark:border-gray-600 dark:bg-slate-600">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            disabled
                                            defaultValue={formData.password}
                                            onChange={handleInputChange}
                                            className="w-full cursor-not-allowed rounded-md bg-gray-300 p-2 outline-none dark:bg-slate-600"
                                        />
                                        <EyeIcon className="w-8 cursor-not-allowed pr-2" />
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
                                        placeholder="Nhập vào email"
                                        onChange={handleInputChange}
                                        defaultValue={formData.email}
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
                                        onChange={handleInputChange}
                                        value={formData.role}
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    >
                                        <option value="Admin">Admin</option>
                                        <option value="User">User</option>
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
                                        placeholder="Nhập ngày sinh"
                                        onChange={handleInputChange}
                                        defaultValue={formData.birthday}
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="gender" className="mb-2 block">
                                        Giới tính
                                    </label>
                                    <select
                                        name="gender"
                                        id="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    >
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
                                        onChange={handleInputChange}
                                        defaultValue={formData.address}
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="Phone" className="mb-2 block">
                                        Số điện thoại
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        placeholder="Nhập vào số điện thoại"
                                        onChange={handleInputChange}
                                        defaultValue={formData.phone}
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="gender" className="mb-2 block">
                                        Trạng thái
                                    </label>
                                    <select
                                        name="status"
                                        id="status"
                                        onChange={handleInputChange}
                                        value={formData.status}
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    >
                                        <option value="Kích hoạt">Kích hoạt</option>
                                        <option value="Khóa">Khóa</option>
                                    </select>
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
                                    <button className="w-full rounded-md border border-blue-700 px-4 py-2 text-blue-700 hover:bg-blue-500 hover:text-white">
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

export default UpdateUser;
