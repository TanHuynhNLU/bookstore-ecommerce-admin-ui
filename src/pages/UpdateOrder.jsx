import { Link } from 'react-router-dom';
import ProductImage from '~/assets/images/the-alchemist.jpg';

function UpdateOrder() {
    return (
        <div className="px-4 dark:text-gray-400">
            <div className="px-3">
                <h2 className="text-3xl font-bold">Cập nhật đơn hàng</h2>
                <ul>
                    <li className="inline-block">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="inline-block pl-2">
                        <Link
                            to="/update-order"
                            className="text-slate-400 before:pr-2 before:content-['/'] dark:text-gray-500"
                        >
                            Cập nhật đơn hàng
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="my-6 px-3">
                <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                    <div className="p-3">
                        {/* Start base infomation */}
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full px-3 pt-3 lg:w-6/12">
                                <h3 className="mb-2 text-2xl font-bold">ID Đơn Hàng: 1</h3>
                                <p>2024-3-1 9:02 PM 2024-3-15 10:30 AM</p>
                            </div>
                            <div className="flex w-full flex-row items-center px-3 pt-3 lg:w-6/12 lg:justify-end">
                                <span className="mr-4 inline-block font-bold">Trạng thái: </span>
                                <select
                                    name="status"
                                    id="status"
                                    className="w-[140px] rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                >
                                    <option value="pending">Đang xử lý</option>
                                    <option value="cancel">Hủy</option>
                                    <option value="completed">Hoàn tất</option>
                                </select>
                            </div>
                        </div>
                        {/* End base infomation */}
                        {/* Start Order Details */}
                        <div className="flex flex-col-reverse xl:flex-row">
                            <div className="mt-4 px-3 pt-3 lg:w-8/12">
                                <h3 className="mb-2 text-2xl font-bold">Chi tiết sản phẩm</h3>
                                <div className="mt-4 overflow-x-auto">
                                    <table className="w-full table-fixed border-separate border-spacing-0 overflow-hidden rounded-md border border-solid border-gray-300 text-left dark:border-gray-600">
                                        <thead>
                                            <tr className="bg-gray-100 dark:bg-slate-800">
                                                <th className="w-8 p-3">ID</th>
                                                <th className="w-[160px] p-3">Sản phẩm</th>
                                                <th className="w-[100px] p-3">Số lượng mua</th>
                                                <th className="w-[100px] p-3">Giá</th>
                                                <th className="w-[120px] p-3">Tổng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                                <td className="p-3">1</td>
                                                <td className="flex flex-row items-center p-3">
                                                    <img
                                                        src={ProductImage}
                                                        alt="product"
                                                        className="h-16 w-12 object-cover"
                                                    />
                                                    <div className="ml-3">
                                                        <p>Nhà giả kim</p>
                                                        <p className="text-slate-400">Paulo Coelho</p>
                                                    </div>
                                                </td>
                                                <td className="p-3">1</td>
                                                <td className="p-3">110.000 vnd</td>
                                                <td className="p-3">110.000 vnd</td>
                                            </tr>
                                            <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                                <td className="p-3">2</td>
                                                <td className="flex flex-row items-center p-3">
                                                    <img
                                                        src={ProductImage}
                                                        alt="product"
                                                        className="h-16 w-12 object-cover"
                                                    />
                                                    <div className="ml-3">
                                                        <p>Nhà giả kim</p>
                                                        <p className="text-slate-400">Paulo Coelho</p>
                                                    </div>
                                                </td>
                                                <td className="p-3">2</td>
                                                <td className="p-3">110.000 vnd</td>
                                                <td className="p-3">220.000 vnd</td>
                                            </tr>
                                            <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                                <td className="p-3">3</td>
                                                <td className="flex flex-row items-center p-3">
                                                    <img
                                                        src={ProductImage}
                                                        alt="product"
                                                        className="h-16 w-12 object-cover"
                                                    />
                                                    <div className="ml-3">
                                                        <p>Nhà giả kim</p>
                                                        <p className="text-slate-400">Paulo Coelho</p>
                                                    </div>
                                                </td>
                                                <td className="p-3">3</td>
                                                <td className="p-3">110.000 vnd</td>
                                                <td className="p-3">330.000 vnd</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="mt-4 px-3 pt-3 lg:w-8/12 xl:w-4/12">
                                <h3 className="mb-2 text-2xl font-bold">Thông tin khách hàng</h3>
                                <div className="mt-4 rounded-md border border-solid border-gray-300 p-2 dark:border-gray-600">
                                    <div className="mb-2">
                                        <p className="text-gray-400">Tên</p>
                                        <p className="font-bold">Tan Huynh</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="text-gray-400">Email</p>
                                        <p className="font-bold">tanhuynh@gmail.com</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="text-gray-400">Địa chỉ giao hàng</p>
                                        <p className="font-bold">Thị trấn Bình Đại, tỉnh Bến Tre</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="text-gray-400">Hình thức thanh toán</p>
                                        <p className="font-bold">Tiền mặt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Order Details */}
                        {/* Start Paid by Customer */}
                        <div className="mt-4 px-3 pt-3 lg:w-8/12">
                            <h3 className="mb-2 text-2xl font-bold">Thanh toán</h3>
                            <div className="rounded-md border border-solid border-gray-300 p-2 dark:border-gray-600">
                                <div className="flex flex-row">
                                    <span className="block w-2/12 text-gray-400">Tổng sản phẩm</span>
                                    <span className="block w-6/12 text-gray-400">6 sản phẩm</span>
                                    <span className="block w-4/12 text-right text-gray-400">660.000 vnd</span>
                                </div>
                                <div className="mt-2 flex flex-row border-b border-solid border-gray-300 pb-2 dark:border-gray-600">
                                    <span className="block w-2/12 text-gray-400">Phí vận chuyển</span>
                                    <span className="block w-6/12 text-gray-400" />
                                    <span className="block w-4/12 text-right text-gray-400">30.000 vnd</span>
                                </div>
                                <div className="mt-2 flex flex-row">
                                    <span className="block w-6/12 font-bold">Tổng tiền thanh toán</span>
                                    <span className="block w-6/12 text-right font-bold">690.000 vnd</span>
                                </div>
                            </div>
                        </div>
                        {/* End Paid by Customer */}
                        {/* Start Timeline */}
                        <div className="mb-3 mt-4 px-3 pt-3 lg:w-8/12">
                            <h3 className="mb-2 text-2xl font-bold">Timeline</h3>
                            <div className="rounded-md border border-solid border-gray-300 p-2 dark:border-gray-600">
                                <ol className="border-l-4 border-solid border-gray-300 dark:border-gray-600">
                                    <li className="relative mb-6 ml-4">
                                        <div className="absolute -left-[24px] top-0 mt-2 h-3 w-3 rounded-full bg-blue-700" />
                                        <textarea
                                            id="newEvent"
                                            name="newEvent"
                                            type="text"
                                            rows={3}
                                            placeholder="Nhập vào sự kiện"
                                            className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                            defaultValue={''}
                                        />
                                        <div className="flex flex-row-reverse">
                                            <button className="ml-auto rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-500">
                                                Xác nhận
                                            </button>
                                        </div>
                                    </li>
                                    <li className="relative mb-6 ml-4">
                                        <div className="absolute -left-[24px] top-0 mt-2 h-3 w-3 rounded-full bg-blue-700" />
                                        <p className="text-gray-400">2024-3-8 9:02PM</p>
                                        <p className="font-bold">Đang giao hàng</p>
                                    </li>
                                    <li className="relative mb-6 ml-4">
                                        <div className="absolute -left-[24px] top-0 mt-2 h-3 w-3 rounded-full bg-blue-700" />
                                        <p className="text-gray-400">2024-3-2 9:02PM</p>
                                        <p className="font-bold">Cửa hàng đã xác nhận đơn hàng</p>
                                    </li>
                                    <li className="relative ml-4">
                                        <div className="absolute -left-[24px] top-0 mt-2 h-3 w-3 rounded-full bg-blue-700" />
                                        <p className="text-gray-400">2024-3-1 9:02PM</p>
                                        <p className="font-bold">Tan Huynh đặt hàng</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        {/* End Timeline */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateOrder;
