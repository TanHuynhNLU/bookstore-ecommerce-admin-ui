import { useState } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import {
    HomeIcon,
    UserGroupIcon,
    ArchiveBoxIcon,
    ShoppingCartIcon,
    ChatBubbleLeftRightIcon,
    CalendarDaysIcon,
    MapIcon,
    DocumentIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function Sidebar({ handlePaddingContent }) {
    const [isCollapse, setIsCollapse] = useState(false);

    const handleCollapse = () => {
        if (isCollapse) {
            setIsCollapse(false);
            handlePaddingContent(false);
        } else {
            setIsCollapse(true);
            handlePaddingContent(true);
        }
    };
    return (
        <div
            id="sidebar"
            className={`z-11 + fixed left-0 top-0 min-h-screen w-[--sidebar-width] overflow-y-auto bg-white shadow-md dark:bg-slate-900 dark:text-gray-400
              ${isCollapse ? 'sidebar-collapse' : ''}`}
        >
            <div className="flex flex-row-reverse items-center justify-between bg-blue-700 px-4 py-2 text-white">
                <button
                    id="sidebar-collapse-button"
                    className="inline-block h-[40px] w-[40px]"
                    onClick={handleCollapse}
                >
                    <ChevronLeftIcon className="inline-block h-6 w-6" />
                </button>
                <Link to="/" className="collapse-hidden inline-block">
                    Admin
                </Link>
            </div>
            <div className="sidebar-links p-3">
                <Link
                    to="/"
                    className="sidebar-link flex flex-row items-center rounded-md px-6 py-3 hover:bg-blue-700 hover:text-white"
                >
                    <HomeIcon className="sidebar-icon mr-6 inline-block h-6 w-6" />
                    <span className="Dashboard collapse-hidden">Trang chủ</span>
                </Link>
                {/* Begin Managements */}
                <div className="collapse-hidden mt-4 px-6 py-3 font-bold">Quản lý</div>
                <ul>
                    <li>
                        <Link
                            to="/users"
                            className="sidebar-link flex flex-row items-center justify-between rounded-md px-6 py-3 hover:bg-blue-700 hover:text-white"
                        >
                            <div className="flex flex-row items-center">
                                <UserGroupIcon className="sidebar-icon mr-6 inline-block h-6 w-6" />
                                <span className="collapse-hidden">Tài khoản</span>
                            </div>
                            {/* <div className="collapse-hidden rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-1 text-white">
                                123
                            </div> */}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products"
                            className="sidebar-link flex flex-row items-center justify-between rounded-md px-6 py-3 hover:bg-blue-700 hover:text-white"
                        >
                            <div className="flex flex-row items-center">
                                <ArchiveBoxIcon className="sidebar-icon mr-6 inline-block h-6 w-6" />
                                <span className="collapse-hidden">Sản phẩm</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/orders"
                            className="sidebar-link flex flex-row items-center justify-between rounded-md px-6 py-3 hover:bg-blue-700 hover:text-white"
                        >
                            <div className="flex flex-row items-center">
                                <ShoppingCartIcon className="sidebar-icon mr-6 inline-block h-6 w-6" />
                                <span className="collapse-hidden">Đơn hàng</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contacts"
                            className="sidebar-link flex flex-row items-center justify-between rounded-md px-6 py-3 hover:bg-blue-700 hover:text-white"
                        >
                            <div className="flex flex-row items-center">
                                <ChatBubbleLeftRightIcon className="sidebar-icon mr-6 inline-block h-6 w-6" />
                                <span className="collapse-hidden">Liên hệ</span>
                            </div>
                        </Link>
                    </li>
                </ul>
                {/* End Managements */}
                {/* Begin Plugins */}
                <div className="collapse-hidden mt-4 px-6 py-3 font-bold">Tiện ích</div>
                <ul>
                    <li>
                        <a
                            href="/#"
                            className="sidebar-link flex flex-row items-center justify-between rounded-md px-6 py-3 hover:bg-blue-700 hover:text-white"
                        >
                            <div className="flex flex-row items-center">
                                <CalendarDaysIcon className="sidebar-icon mr-6 inline-block h-6 w-6" />
                                <span className="collapse-hidden">Lịch</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#"
                            className="sidebar-link flex flex-row items-center justify-between rounded-md px-6 py-3 hover:bg-blue-700 hover:text-white"
                        >
                            <div className="flex flex-row items-center">
                                <MapIcon className="sidebar-icon mr-6 inline-block h-6 w-6" />
                                <span className="collapse-hidden">Google Maps</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#"
                            className="sidebar-link flex flex-row items-center justify-between rounded-md px-6 py-3 hover:bg-blue-700 hover:text-white"
                        >
                            <div className="flex flex-row items-center">
                                <DocumentIcon className="sidebar-icon mr-6 inline-block h-6 w-6" />
                                <span className="collapse-hidden">Tài liệu</span>
                            </div>
                        </a>
                    </li>
                </ul>
                {/* End Plugins */}
            </div>
        </div>
    );
}

export default Sidebar;
