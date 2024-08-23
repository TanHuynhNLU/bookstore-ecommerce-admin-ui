import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { login } from '~/services/AuthenticationService';

function Login() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleToggleShowPassword = () => {
        setIsShowPassword((prevState) => !prevState);
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            const fetchAPI = async () => {
                const res = await login({ username: formData.username, password: formData.password });
                if (res) {
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('user', JSON.stringify(res.user));
                    navigate('/');
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thông báo',
                        text: 'Sai tên đăng nhập hoặc mật khẩu',
                    });
                }
            };
            fetchAPI();
        } else {
            setErrors(formErrors);
        }
    };

    const validate = () => {
        let formErrors = {};

        if (formData.username.trim().length === 0) {
            formErrors.username = 'Vui lòng nhập số thẻ';
        }

        if (formData.password.length < 6) {
            formErrors.password = 'Mật khẩu phải ít nhất 6 kí tự';
        }

        return formErrors;
    };

    const renderShowPasswordIcon = () => {
        if (isShowPassword)
            return (
                <EyeSlashIcon
                    className="absolute right-2 top-[50%] inline-block h-6 w-6 -translate-y-3 cursor-pointer text-slate-500"
                    onClick={handleToggleShowPassword}
                />
            );
        else
            return (
                <EyeIcon
                    className="absolute right-2 top-[50%] inline-block h-6 w-6 -translate-y-3 cursor-pointer text-slate-500"
                    onClick={handleToggleShowPassword}
                />
            );
    };

    console.log(formData);

    return (
        <div className="flex h-screen items-center justify-center bg-login bg-cover bg-center p-3 text-[--text-color] md:p-6">
            <div className="w-[600px] max-w-full overflow-hidden rounded-3xl bg-white p-3 shadow-md md:p-8">
                <h3 className="mb-3 text-center text-2xl font-bold md:mb-6">Đăng nhập</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col">
                        <label className="mb-2 text-base" htmlFor="username">
                            Tên đăng nhập
                        </label>
                        <input
                            id="username"
                            className={`rounded-lg border border-solid p-2 text-base outline-none focus:border-[--primary-color]`}
                            name="username"
                            type="text"
                            placeholder="Tên đăng nhập"
                            onChange={handleOnChange}
                        />
                        {errors.username && <p className="mt-1 text-red-500">{errors.username}</p>}
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label className="mb-2 text-base" htmlFor="password">
                            Mật khẩu
                        </label>
                        <div className="relative h-[42px]">
                            <input
                                id="password"
                                className="h-full w-full rounded-lg border border-solid border-gray-200 p-2 text-base outline-none focus:border-[--primary-color]"
                                name="password"
                                type={isShowPassword ? 'text' : 'password'}
                                placeholder="Mật khẩu"
                                onChange={handleOnChange}
                            />
                            {renderShowPasswordIcon()}
                        </div>
                        {errors.password && <p className="mt-1 text-red-500">{errors.password}</p>}
                    </div>
                    <div className="mb-4 flex flex-col">
                        <button
                            type="submit"
                            className="w-full rounded-md bg-blue-700 px-4 py-2 text-white  hover:bg-blue-500"
                        >
                            Xác nhận
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
