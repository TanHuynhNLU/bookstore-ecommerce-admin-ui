import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import ProductImage from '~/assets/images/the-alchemist.jpg';
import { getOrderById, updateOrderStatus } from '~/services/OrderService';
import { addTimeLine, getTimeLines } from '~/services/TimeLineService';
import { formatNumber } from '~/utils/utils';

function UpdateOrder() {
    const { orderId } = useParams();
    const [order, setOrder] = useState();
    const [timelines, setTimeLines] = useState(['a', 'a']);
    const [status, setStatus] = useState('');
    const [isChange, setIsChange] = useState(false);
    const [event, setEvent] = useState('');

    const totalProduct = useMemo(() => {
        let sum = 0;
        if (order)
            order.orderDetails.forEach((orderDetail) => {
                sum += orderDetail.quantity;
            });
        return sum;
    }, [order]);

    const totalPrice = useMemo(() => {
        let sum = 0;
        if (order)
            order.orderDetails.forEach((orderDetail) => {
                sum += orderDetail.totalPrice;
            });
        return sum;
    }, [order]);

    const handleAddTimeline = () => {
        const fetchAPI = async () => {
            const res = await addTimeLine(orderId, event);
            if (res.status === 'CREATED') {
                setTimeLines([res.data, ...timelines]);
            }
        };
        fetchAPI();
    };

    // Handle call API retrieve Order by id
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getOrderById(orderId);
            const timelinesAPI = await getTimeLines(res.id);
            setOrder(res);
            setTimeLines(timelinesAPI);
            setStatus(res.status);
        };
        fetchAPI();
    }, []);
    // Handle call API update Order's status
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await updateOrderStatus(orderId, status);
            if (res.status === 'OK') {
                toast.success('Cập nhật trạng thái thành công', {
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
                toast.error('Cập nhật trạng thái thất bại', {
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
        if (isChange) fetchAPI();
    }, [status]);

    console.log(timelines);
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
                                <h3 className="mb-2 text-2xl font-bold">ID Đơn Hàng: {order && order.id}</h3>
                                <p>{order && order.dateCreated}</p>
                            </div>
                            <div className="flex w-full flex-row items-center px-3 pt-3 lg:w-6/12 lg:justify-end">
                                <span className="mr-4 inline-block font-bold">Trạng thái: </span>
                                <select
                                    name="status"
                                    id="status"
                                    value={status && status}
                                    onChange={(e) => {
                                        setStatus(e.target.value);
                                        setIsChange(true);
                                    }}
                                    className="w-[140px] rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                >
                                    <option value="Đang xử lý">Đang xử lý</option>
                                    <option value="Hủy">Hủy</option>
                                    <option value="Hoàn tất">Hoàn tất</option>
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
                                            {order &&
                                                order.orderDetails.map((orderDetail) => (
                                                    <tr
                                                        key={orderDetail.id}
                                                        className="hover:bg-gray-100 dark:hover:bg-slate-800"
                                                    >
                                                        <td className="p-3">{orderDetail.book.id}</td>
                                                        <td className="flex flex-row items-center p-3">
                                                            <img
                                                                src={orderDetail.book.image || ProductImage}
                                                                alt="product"
                                                                className="h-16 w-12 object-cover"
                                                            />
                                                            <div className="ml-3">
                                                                <p>{orderDetail.book.name}</p>
                                                                <p className="text-slate-400">
                                                                    {orderDetail.book.author}
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td className="p-3">{orderDetail.quantity}</td>
                                                        <td className="p-3">
                                                            {formatNumber(orderDetail.book.price)} vnd
                                                        </td>
                                                        <td className="p-3">
                                                            {formatNumber(orderDetail.totalPrice)} vnd
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="mt-4 px-3 pt-3 lg:w-8/12 xl:w-4/12">
                                <h3 className="mb-2 text-2xl font-bold">Thông tin khách hàng</h3>
                                <div className="mt-4 rounded-md border border-solid border-gray-300 p-2 dark:border-gray-600">
                                    <div className="mb-2">
                                        <p className="text-gray-400">Tên</p>
                                        <p className="font-bold">{order && order.customer.name}</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="text-gray-400">Email</p>
                                        <p className="font-bold">{order && order.customer.email}</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="text-gray-400">Địa chỉ giao hàng</p>
                                        <p className="font-bold">{order && order.customer.shippingAddress}</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="text-gray-400">Hình thức thanh toán</p>
                                        <p className="font-bold">{order && order.customer.payment}</p>
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
                                    <span className="block w-6/12 text-gray-400">{totalProduct} sản phẩm</span>
                                    <span className="block w-4/12 text-right text-gray-400">
                                        {formatNumber(totalPrice)} vnd
                                    </span>
                                </div>
                                <div className="mt-2 flex flex-row border-b border-solid border-gray-300 pb-2 dark:border-gray-600">
                                    <span className="block w-2/12 text-gray-400">Phí vận chuyển</span>
                                    <span className="block w-6/12 text-gray-400" />
                                    <span className="block w-4/12 text-right text-gray-400">
                                        {order && formatNumber(order.shippingTax)} vnd
                                    </span>
                                </div>
                                <div className="mt-2 flex flex-row">
                                    <span className="block w-6/12 font-bold">Tổng tiền thanh toán</span>
                                    <span className="block w-6/12 text-right font-bold">
                                        {order && formatNumber(totalPrice + order.shippingTax)} vnd
                                    </span>
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
                                            value={event}
                                            onChange={(e) => setEvent(e.target.value)}
                                        />
                                        <div className="flex flex-row-reverse">
                                            <button
                                                className="ml-auto rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-500"
                                                onClick={handleAddTimeline}
                                            >
                                                Xác nhận
                                            </button>
                                        </div>
                                    </li>
                                    {timelines &&
                                        timelines.map((timeline) => (
                                            <li key={timeline.id} className="relative mb-6 ml-4">
                                                <div className="absolute -left-[24px] top-0 mt-2 h-3 w-3 rounded-full bg-blue-700" />
                                                <p className="text-gray-400">{timeline.dateCreated}</p>
                                                <p className="font-bold">{timeline.event}</p>
                                            </li>
                                        ))}
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
