import { Link } from 'react-router-dom';
import { ArchiveBoxIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import ProductImage from '~/assets/images/the-alchemist.jpg';

function Products() {
    return (
        <div className="px-4 dark:text-gray-400">
            <div className="px-3">
                <h2 className="text-3xl font-bold">Sản phẩm</h2>
                <ul>
                    <li className="inline-block">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="inline-block pl-2">
                        <Link
                            className="text-slate-400 before:pr-2 before:content-['/'] dark:text-gray-500"
                            to="/products"
                        >
                            Sản phẩm
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="my-6 px-3">
                <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                    <div className="p-3">
                        <div className="flex flex-row justify-between px-3 pt-3">
                            <div>
                                <h3 className="mb-2 text-2xl font-bold">Sản phẩm</h3>
                            </div>
                            <div>
                                <Link
                                    to="/add-product"
                                    className="flex flex-row items-center rounded-md border border-solid border-blue-700 px-2 py-1 text-blue-700 hover:bg-blue-700 hover:text-white"
                                >
                                    <ArchiveBoxIcon className="inline-block h-4 w-4" />
                                    <span className="ml-1 inline-block">Thêm sản phẩm</span>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col justify-between px-3 xl:flex-row xl:items-center">
                            <div className="flex w-[350px] flex-row items-center rounded-md border border-solid border-gray-300 bg-gray-100 p-2 focus-within:border-blue-700 dark:border-gray-600 dark:bg-slate-800">
                                <MagnifyingGlassIcon className="h-6 w-6" />
                                <input
                                    type="text"
                                    placeholder="Nhập tên sách, tác giả, <= giá"
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
                                        ID
                                    </option>
                                    <option value="name">Tên sách</option>
                                    <option value="genre">Thể loại</option>
                                    <option value="stock">Số lượng</option>
                                    <option value="price">Giá</option>
                                    <option value="sales">Đã bán</option>
                                    <option value="dateRegistered">Ngày cập nhật</option>
                                </select>
                                <select
                                    name="orderBy"
                                    id="orderBy"
                                    className="border border-solid border-gray-300 dark:border-gray-600 dark:bg-slate-800"
                                >
                                    <option selected="" className="p-1">
                                        A-Z
                                    </option>
                                    <option>Z-A</option>
                                </select>
                            </div>
                        </div>
                        <div className="overflow-x-auto px-3">
                            <table className="mt-4 w-full table-fixed border border-solid border-gray-300 text-left dark:border-gray-600">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-slate-800">
                                        <th className="w-8 p-3">ID</th>
                                        <th className="w-[250px] p-3">Sản phẩm</th>
                                        <th className="w-[120px] p-3">Thể loại</th>
                                        <th className="w-[100px] p-3">Số lượng</th>
                                        <th className="w-[150px] p-3">Giá</th>
                                        <th className="w-[120px] p-3">Đã bán</th>
                                        <th className="w-[150px] p-3">Trạng thái</th>
                                        <th className="w-[150px] p-3">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">1</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={ProductImage} alt="product" className="h-16 w-12 object-cover" />
                                            <div className="ml-3">
                                                <p>Nhà Giả Kim</p>
                                                <p className="text-slate-400">Paulo Coelho</p>
                                            </div>
                                        </td>
                                        <td className="p-3">Tiểu thuyết </td>
                                        <td className="p-3">123456</td>
                                        <td className="p-3">70.000 vnd</td>
                                        <td className="p-3">110</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Mở bán
                                            </span>
                                            {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Hết hàng
                                            </span> */}
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="./update-product"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <PencilIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                                <Link
                                                    id="deleteUser"
                                                    href="#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <TrashIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">2</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={ProductImage} alt="product" className="h-16 w-12 object-cover" />
                                            <div className="ml-3">
                                                <p>Nhà Giả Kim</p>
                                                <p className="text-slate-400">Paulo Coelho</p>
                                            </div>
                                        </td>
                                        <td className="p-3">Tiểu thuyết </td>
                                        <td className="p-3">123456</td>
                                        <td className="p-3">70.000 vnd</td>
                                        <td className="p-3">110</td>
                                        <td className="p-3">
                                            {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Mở bán
                                            </span> */}
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Hết hàng
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="./update-product"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <PencilIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                                <Link
                                                    id="deleteUser"
                                                    href="#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <TrashIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">3</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={ProductImage} alt="product" className="h-16 w-12 object-cover" />
                                            <div className="ml-3">
                                                <p>Nhà Giả Kim</p>
                                                <p className="text-slate-400">Paulo Coelho</p>
                                            </div>
                                        </td>
                                        <td className="p-3">Tiểu thuyết </td>
                                        <td className="p-3">123456</td>
                                        <td className="p-3">70.000 vnd</td>
                                        <td className="p-3">110</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Mở bán
                                            </span>
                                            {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Hết hàng
                                            </span> */}
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="./update-product"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <PencilIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                                <Link
                                                    id="deleteUser"
                                                    href="#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <TrashIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">4</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={ProductImage} alt="product" className="h-16 w-12 object-cover" />
                                            <div className="ml-3">
                                                <p>Nhà Giả Kim</p>
                                                <p className="text-slate-400">Paulo Coelho</p>
                                            </div>
                                        </td>
                                        <td className="p-3">Tiểu thuyết </td>
                                        <td className="p-3">123456</td>
                                        <td className="p-3">70.000 vnd</td>
                                        <td className="p-3">110</td>
                                        <td className="p-3">
                                            {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Mở bán
                                            </span> */}
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Hết hàng
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="./update-product"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <PencilIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                                <Link
                                                    id="deleteUser"
                                                    href="#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <TrashIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">5</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={ProductImage} alt="product" className="h-16 w-12 object-cover" />
                                            <div className="ml-3">
                                                <p>Nhà Giả Kim</p>
                                                <p className="text-slate-400">Paulo Coelho</p>
                                            </div>
                                        </td>
                                        <td className="p-3">Tiểu thuyết </td>
                                        <td className="p-3">123456</td>
                                        <td className="p-3">70.000 vnd</td>
                                        <td className="p-3">110</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Mở bán
                                            </span>
                                            {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Hết hàng
                                            </span> */}
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="./update-product"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <PencilIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                                <Link
                                                    id="deleteUser"
                                                    href="#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <TrashIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">6</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={ProductImage} alt="product" className="h-16 w-12 object-cover" />
                                            <div className="ml-3">
                                                <p>Nhà Giả Kim</p>
                                                <p className="text-slate-400">Paulo Coelho</p>
                                            </div>
                                        </td>
                                        <td className="p-3">Tiểu thuyết </td>
                                        <td className="p-3">123456</td>
                                        <td className="p-3">70.000 vnd</td>
                                        <td className="p-3">110</td>
                                        <td className="p-3">
                                            {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Mở bán
                                            </span> */}
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Hết hàng
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="./update-product"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <PencilIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                                <Link
                                                    id="deleteUser"
                                                    href="#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <TrashIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">7</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={ProductImage} alt="product" className="h-16 w-12 object-cover" />
                                            <div className="ml-3">
                                                <p>Nhà Giả Kim</p>
                                                <p className="text-slate-400">Paulo Coelho</p>
                                            </div>
                                        </td>
                                        <td className="p-3">Tiểu thuyết </td>
                                        <td className="p-3">123456</td>
                                        <td className="p-3">70.000 vnd</td>
                                        <td className="p-3">110</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Mở bán
                                            </span>
                                            {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Hết hàng
                                            </span> */}
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="./update-product"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <PencilIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                                <Link
                                                    id="deleteUser"
                                                    href="#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <TrashIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">8</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={ProductImage} alt="product" className="h-16 w-12 object-cover" />
                                            <div className="ml-3">
                                                <p>Nhà Giả Kim</p>
                                                <p className="text-slate-400">Paulo Coelho</p>
                                            </div>
                                        </td>
                                        <td className="p-3">Tiểu thuyết </td>
                                        <td className="p-3">123456</td>
                                        <td className="p-3">70.000 vnd</td>
                                        <td className="p-3">110</td>
                                        <td className="p-3">
                                            {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Mở bán
                                            </span> */}
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Hết hàng
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="./update-product"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <PencilIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                                <Link
                                                    id="deleteUser"
                                                    href="#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <TrashIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">9</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={ProductImage} alt="product" className="h-16 w-12 object-cover" />
                                            <div className="ml-3">
                                                <p>Nhà Giả Kim</p>
                                                <p className="text-slate-400">Paulo Coelho</p>
                                            </div>
                                        </td>
                                        <td className="p-3">Tiểu thuyết </td>
                                        <td className="p-3">123456</td>
                                        <td className="p-3">70.000 vnd</td>
                                        <td className="p-3">110</td>
                                        <td className="p-3">
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Mở bán
                                            </span>
                                            {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Hết hàng
                                            </span> */}
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="./update-product"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <PencilIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                                <Link
                                                    id="deleteUser"
                                                    href="#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <TrashIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                        <td className="p-3">10</td>
                                        <td className="flex flex-row items-center p-3">
                                            <img src={ProductImage} alt="product" className="h-16 w-12 object-cover" />
                                            <div className="ml-3">
                                                <p>Nhà Giả Kim</p>
                                                <p className="text-slate-400">Paulo Coelho</p>
                                            </div>
                                        </td>
                                        <td className="p-3">Tiểu thuyết </td>
                                        <td className="p-3">123456</td>
                                        <td className="p-3">70.000 vnd</td>
                                        <td className="p-3">110</td>
                                        <td className="p-3">
                                            {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                Mở bán
                                            </span> */}
                                            <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Hết hàng
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-row items-center">
                                                <Link
                                                    to="./update-product"
                                                    className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                >
                                                    <PencilIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
                                                <Link
                                                    id="deleteUser"
                                                    href="#"
                                                    className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                >
                                                    <TrashIcon className="h-4 w-4 text-slate-600" />
                                                </Link>
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
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                </select>
                                <b> 1-10 </b>
                                of
                                <b> 120</b>
                            </div>
                            <div className="mt-4 flex flex-row">
                                <button className="inline-block w-[120px] cursor-pointer rounded-l-xl border border-solid border-gray-300 px-4 py-2 text-center hover:bg-gray-100 dark:border-gray-600 dark:bg-slate-800 dark:hover:bg-slate-600">
                                    Trang trước
                                </button>
                                <button className="inline-block w-[120px] cursor-pointer rounded-r-xl border border-solid border-gray-300 px-4 py-2 text-center hover:bg-gray-100 dark:border-gray-600 dark:bg-slate-800 dark:hover:bg-slate-600">
                                    Trang sau
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
