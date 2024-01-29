import {
    SunIcon,
    BellIcon,
    UserPlusIcon,
    UserMinusIcon,
    ChartBarIcon,
    ListBulletIcon,
    EnvelopeOpenIcon,
    MoonIcon,
    DocumentCheckIcon,
    UserIcon,
    Cog6ToothIcon,
    ArrowLeftEndOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import Avatar from '~/assets/images/avatar.jpg';

function Header() {
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    // Initial theme load from Local Storage.
    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(storedDarkMode);
        setIsInitialLoad(false);
    }, []);

    // Synchronize state with Local Storage when it changes.
    useEffect(() => {
        // Check if it's not the initial load before updating Local Storage
        if (!isInitialLoad) {
            document.documentElement.classList.toggle('dark', darkMode);
            localStorage.setItem('darkMode', darkMode);
        }
    }, [darkMode, isInitialLoad]);

    const handleSetDarkMode = () => {
        setDarkMode(true);
    };

    const handleSetLightMode = () => {
        setDarkMode(false);
    };

    return (
        <header className="sticky top-0 z-10 mb-8 flex w-full flex-row justify-end bg-blue-700 px-4 py-2 shadow-sm dark:bg-blue-600">
            <ul className="mr-8 flex flex-row items-center">
                {/*Start notifications */}
                <li className="group/notifications relative">
                    <a
                        href="/#"
                        id="notifications"
                        className="flex cursor-pointer items-center justify-center px-4 py-2 text-white opacity-60 hover:opacity-100"
                    >
                        <BellIcon className="h-6 w-6" />
                    </a>
                    <span className="absolute right-3 top-1 rounded-full bg-red-600 px-1 text-[10px] text-white opacity-75">
                        3
                    </span>
                    {/* Start notification popup */}
                    <div className="absolute right-0 top-full hidden min-w-[200px] overflow-hidden rounded-md border border-solid bg-white text-[14px] shadow-sm group-hover/notifications:block dark:border-gray-600 dark:bg-black">
                        <div className="bg-slate-200 px-4 py-2 font-bold text-slate-400 dark:bg-slate-800">
                            Bạn có 3 thông báo mới
                        </div>
                        <ul className="flex flex-col dark:bg-slate-900 dark:text-gray-400">
                            <li className="block w-full">
                                <a
                                    href="/#"
                                    className="block cursor-pointer px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                >
                                    <UserPlusIcon className="mr-2 inline-block h-6 w-6 text-green-400" />
                                    Người dùng mới
                                </a>
                            </li>
                            <li className="block w-full">
                                <a
                                    href="/#"
                                    className="block cursor-pointer px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                >
                                    <UserMinusIcon className="mr-2 inline-block h-6 w-6 text-red-400" />
                                    Người dùng đã xóa
                                </a>
                            </li>
                            <li className="block w-full">
                                <a
                                    href="/#"
                                    className="block cursor-pointer px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                >
                                    <ChartBarIcon className="mr-2 inline-block h-6 w-6 text-green-400" />
                                    Thông tin bán hàng
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* End notification popup */}
                </li>
                {/*End notifications */}
                {/* Start tasks */}
                <li className="group/tasks relative">
                    <a
                        id="tasks"
                        href="/#"
                        className="flex cursor-pointer items-center justify-center px-4 py-2 text-white opacity-60 hover:opacity-100"
                    >
                        <ListBulletIcon className="h-6 w-6" />
                    </a>
                    <span className="absolute right-3 top-1 rounded-full bg-red-600 px-1 text-[10px] text-white opacity-75">
                        3
                    </span>
                    {/* Start tasks popup */}
                    <div className="absolute right-0 top-full hidden min-w-[300px] overflow-hidden rounded-md border border-solid bg-white text-[14px] shadow-sm group-hover/tasks:block dark:border-gray-600">
                        <div className="bg-slate-200 px-4 py-2 text-[14px] font-bold text-slate-400 dark:bg-slate-800">
                            Bạn có 3 công việc
                        </div>
                        <ul className="flex flex-col dark:bg-slate-900 dark:text-gray-400">
                            <li className="block w-full">
                                <a
                                    href="/#"
                                    className="block cursor-pointer px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                >
                                    <div className="flex flex-row">
                                        <div className="w-[60%] truncate">Phản hồi liên hệ</div>
                                        <div className="w-[40%] text-right font-bold">25%</div>
                                    </div>
                                    <div className="h-1 rounded-md bg-slate-300">
                                        <div className="h-full w-1/4 bg-red-400" />
                                    </div>
                                </a>
                            </li>
                            <li className="block w-full">
                                <a
                                    href="/#"
                                    className="block cursor-pointer px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                >
                                    <div className="flex flex-row">
                                        <div className="w-[60%] truncate">Thêm trang mới</div>
                                        <div className="w-[40%] text-right font-bold">50%</div>
                                    </div>
                                    <div className="h-1 rounded-md bg-slate-300">
                                        <div className="h-full w-1/2 bg-yellow-400" />
                                    </div>
                                </a>
                            </li>
                            <li className="block w-full">
                                <a
                                    href="/#"
                                    className="block cursor-pointer px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                >
                                    <div className="flex flex-row">
                                        <div className="w-[60%] truncate">Thêm sản phẩm mới</div>
                                        <div className="w-[40%] text-right font-bold">100%</div>
                                    </div>
                                    <div className="h-1 rounded-md bg-slate-300">
                                        <div className="h-full w-full bg-green-400" />
                                    </div>
                                </a>
                            </li>
                            <a
                                href="/#"
                                className="mx-4 my-2 inline-block rounded-xl border border-solid border-blue-600 px-3 py-2 text-center text-blue-600 hover:bg-blue-600 hover:text-white"
                            >
                                Xem tất cả công việc
                            </a>
                        </ul>
                    </div>
                    {/* End tasks popup */}
                </li>
                {/* End tasks */}
                {/* Start messages */}
                <li className="group/messages relative">
                    <a
                        href="/#"
                        id="messages"
                        className="flex cursor-pointer items-center justify-center px-4 py-2 text-white opacity-60 hover:opacity-100"
                    >
                        <EnvelopeOpenIcon className="h-6 w-6" />
                    </a>
                    <span className="absolute right-3 top-1 rounded-full bg-red-600 px-1 text-[10px] text-white opacity-75">
                        3
                    </span>
                    {/* Start messages popup */}
                    <div className="absolute right-0 top-full hidden min-w-[550px] overflow-hidden rounded-md border border-solid bg-white text-[14px] shadow-sm group-hover/messages:block dark:border-gray-600">
                        <div className="bg-slate-200 px-4 py-2 text-[14px] font-bold text-slate-400 dark:bg-slate-800">
                            Bạn có 3 tin nhắn
                        </div>
                        <ul className="flex max-h-[50vh] flex-col overflow-y-scroll dark:bg-slate-900 dark:text-gray-400">
                            <li className="block w-full">
                                <a
                                    href="/#"
                                    className="block cursor-pointer px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                >
                                    <div className="flex flex-row items-center">
                                        <img
                                            src={Avatar}
                                            alt="avatar"
                                            className="mr-2 block h-[40px] w-[40px] rounded-full bg-cover object-cover"
                                        />
                                        <div className="w-full text-slate-400">
                                            <div className="flex flex-row justify-between">
                                                <span className="text-left">Tan Huynh</span>
                                                <span className="inline-block text-right">just now</span>
                                            </div>
                                            <div className="text-slate-700">Lorem ipsum dolor sit amet</div>
                                            <div className="w-[450px] truncate">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                                                molestiae eligendi quibusdam sunt deleniti sint? Sunt quae alias rerum
                                                nam illum dignissimos, eveniet obcaecati quia ad officiis soluta nulla
                                                dolorem.
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="block w-full">
                                <a
                                    href="/#"
                                    className="block cursor-pointer px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                >
                                    <div className="flex flex-row items-center">
                                        <img
                                            src={Avatar}
                                            alt="avatar"
                                            className="mr-2 block h-[40px] w-[40px] rounded-full bg-cover object-cover"
                                        />
                                        <div className="w-full text-slate-400">
                                            <div className="flex flex-row justify-between">
                                                <span className="text-left">Tan Huynh</span>
                                                <span className="inline-block text-right">5 minutes ago</span>
                                            </div>
                                            <div className="text-slate-700">Lorem ipsum dolor sit amet</div>
                                            <div className="w-[450px] truncate">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                                                molestiae eligendi quibusdam sunt deleniti sint? Sunt quae alias rerum
                                                nam illum dignissimos, eveniet obcaecati quia ad officiis soluta nulla
                                                dolorem.
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="block w-full">
                                <a
                                    href="/#"
                                    className="block cursor-pointer px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                >
                                    <div className="flex flex-row items-center">
                                        <img
                                            src={Avatar}
                                            alt="avatar"
                                            className="mr-2 block h-[40px] w-[40px] rounded-full bg-cover object-cover"
                                        />
                                        <div className="w-full text-slate-400">
                                            <div className="flex flex-row justify-between">
                                                <span className="text-left">Tan Huynh</span>
                                                <span className="inline-block text-right">2 hours ago</span>
                                            </div>
                                            <div className="text-slate-700">Lorem ipsum dolor sit amet</div>
                                            <div className="w-[450px] truncate">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                                                molestiae eligendi quibusdam sunt deleniti sint? Sunt quae alias rerum
                                                nam illum dignissimos, eveniet obcaecati quia ad officiis soluta nulla
                                                dolorem.
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="w-full p-[1px] dark:bg-slate-900">
                            <a
                                href="/#"
                                className="mx-4 my-2 block rounded-xl border border-solid border-blue-600 px-3 py-2 text-center text-blue-600 hover:bg-blue-600 hover:text-white"
                            >
                                Xem tất cả tin nhắn
                            </a>
                        </div>
                    </div>
                    {/* End messages popup */}
                </li>
                {/* End messages */}
            </ul>
            <div>
                <ul className="flex flex-row items-center">
                    {/* Start light/dark theme */}
                    <li className="group/theme relative border-l border-solid border-gray-700 border-opacity-30">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            id="theme-toggle"
                            className="flex w-[56px] cursor-pointer items-center justify-center px-4 py-2 text-white opacity-60 hover:opacity-100"
                        >
                            {darkMode ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
                        </a>
                        {/* Start light/dark theme popup */}
                        <ul className="absolute right-0 top-full hidden w-[128px] flex-col rounded-md border border-solid bg-white py-2 text-gray-400 shadow-sm group-hover/theme:flex dark:border-gray-600 dark:bg-slate-900">
                            <li className="hover:bg-blue-700 hover:text-white">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    id="theme-toggle-light-button"
                                    className="flex cursor-pointer items-center px-4 py-1"
                                    onClick={handleSetLightMode}
                                >
                                    <SunIcon className="mr-2 inline-block h-6 w-6" />
                                    Sáng
                                </a>
                            </li>
                            <li className="hover:bg-blue-700 hover:text-white">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    id="theme-toggle-dark-button"
                                    className="flex cursor-pointer items-center px-4 py-1"
                                    onClick={handleSetDarkMode}
                                >
                                    <MoonIcon className="mr-2 inline-block h-6 w-6" />
                                    Tối
                                </a>
                            </li>
                        </ul>
                        {/* End light/dark theme popup */}
                    </li>
                    {/* End light/dark theme */}
                    {/* Start acount */}
                    <li className="group/account relative cursor-pointer border-l border-solid border-gray-700 border-opacity-30 px-4">
                        <img src={Avatar} alt="avatar" className="h-[40px] w-[40px] rounded-full" />
                        {/* Start acount popup */}
                        <div className="absolute right-4 top-[40px] hidden min-w-[200px] overflow-hidden rounded-md border border-solid bg-white text-[14px] shadow-sm group-hover/account:block dark:border-gray-600 dark:bg-black">
                            {/* Start account */}
                            <div className="bg-slate-200 px-4 py-2 font-bold text-slate-400 dark:bg-slate-800">
                                Tài khoản
                            </div>
                            <ul className="flex flex-col dark:bg-slate-900 dark:text-gray-400">
                                <li className="block w-full">
                                    <a
                                        href="/#"
                                        className="flex cursor-pointer flex-row items-center px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                    >
                                        <EnvelopeOpenIcon className="mr-2 inline-block h-6 w-6 text-slate-500" />
                                        <span>Tin nhắn</span>
                                        <span className="ml-2 inline-block rounded-md bg-gradient-to-tr from-green-400 to-green-700 px-2 text-[10px] text-white">
                                            3
                                        </span>
                                    </a>
                                </li>
                                <li className="block w-full">
                                    <a
                                        href="/#"
                                        className="flex cursor-pointer flex-row items-center px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                    >
                                        <DocumentCheckIcon className="mr-2 inline-block h-6 w-6 text-slate-500" />
                                        <span>Công việc</span>
                                        <span className="ml-2 inline-block rounded-md bg-gradient-to-tr from-red-400 to-red-700 px-2 text-[10px] text-white">
                                            3
                                        </span>
                                    </a>
                                </li>
                                <li className="block w-full">
                                    <a
                                        href="/#"
                                        className="flex cursor-pointer flex-row items-center px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                    >
                                        <ChartBarIcon className="mr-2 inline-block h-6 w-6 text-slate-500" />
                                        <span>Bình luận</span>
                                        <span className="ml-2 inline-block rounded-md bg-gradient-to-tr from-yellow-400 to-yellow-700 px-2 text-[10px] text-white">
                                            3
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            {/* End account */}
                            {/* Start settings */}
                            <div className="bg-slate-200 px-4 py-2 font-bold text-slate-400 dark:bg-slate-800">
                                Cài đặt
                            </div>
                            <ul className="flex flex-col dark:bg-slate-900 dark:text-gray-400">
                                <li className="block w-full">
                                    <a
                                        href="/#"
                                        className="flex cursor-pointer flex-row items-center px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                    >
                                        <UserIcon className="mr-2 inline-block h-6 w-6 text-slate-500" />
                                        <span>Thông tin cá nhân</span>
                                    </a>
                                </li>
                                <li className="block w-full">
                                    <a
                                        href="/#"
                                        className="flex cursor-pointer flex-row items-center px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                    >
                                        <Cog6ToothIcon className="mr-2 inline-block h-6 w-6 text-slate-500" />
                                        <span>Cài đặt</span>
                                    </a>
                                </li>
                                <li className="block w-full">
                                    <a
                                        href="/#"
                                        className="flex cursor-pointer flex-row items-center px-4 py-1 hover:bg-slate-200 dark:hover:bg-slate-800"
                                    >
                                        <ArrowLeftEndOnRectangleIcon className="mr-2 inline-block h-6 w-6 text-slate-500" />
                                        <span>Đăng xuất</span>
                                    </a>
                                </li>
                            </ul>
                            {/* End settings */}
                        </div>
                        {/* End acount popup */}
                    </li>
                    {/* End acount */}
                </ul>
            </div>
        </header>
    );
}

export default Header;
