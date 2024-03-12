import { Link } from 'react-router-dom';
import ProductImage from '~/assets/images/the-alchemist.jpg';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';

function AddProduct() {
    return (
        <div className="px-4 dark:text-gray-400">
            <div className="px-3">
                <h2 className="text-3xl font-bold">Thêm sản phẩm</h2>
                <ul>
                    <li className="inline-block">
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="inline-block pl-2">
                        <Link
                            className="text-slate-400 before:pr-2 before:content-['/'] dark:text-gray-500"
                            to="/add-product"
                        >
                            Thêm sản phẩm
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="my-6 px-3">
                <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                    <div className="p-3">
                        <div className="px-3 pt-3">
                            <h3 className="mb-2 text-2xl font-bold">Thêm sản phẩm</h3>
                        </div>
                        <form className="mt-4 max-w-[800px]">
                            <div className="relative mx-auto mb-6 block h-[200px] w-[200px]">
                                <img
                                    src={ProductImage}
                                    alt="ProductImage"
                                    className="mx-auto block h-[200px] w-[200px]"
                                />
                                <label
                                    htmlFor="image"
                                    className="absolute bottom-[50%] right-0 translate-y-4 cursor-pointer"
                                >
                                    <ArrowUpCircleIcon className="mt-4 h-8 w-8 rounded-full bg-white text-blue-700" />
                                </label>
                                <input type="file" name="image" id="image" className="hidden" />
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="name" className="mb-2 block">
                                        Tên
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Nhập tên sách"
                                        required
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="genre" className="mb-2 block">
                                        Thể loại
                                    </label>
                                    <select
                                        name="genre"
                                        id="genre"
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    >
                                        <option value="" />
                                        <option value="Làm Giàu">Làm giàu</option>
                                        <option value="Kinh điển">Kinh điển</option>
                                        <option value="Thiếu nhi">Thiếu nhi</option>
                                        <option value="Tiểu thuyết">Tiểu thuyết</option>
                                        <option value="Manga">Manga</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="stock" className="mb-2 block">
                                        Số lượng
                                    </label>
                                    <input
                                        id="stock"
                                        name="stock"
                                        type="number"
                                        placeholder="Nhập số lượng sách"
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="price" className="mb-2 block">
                                        Giá (vnd)
                                    </label>
                                    <input
                                        id="price"
                                        name="price"
                                        type="number"
                                        min="0"
                                        placeholder="Nhập giá"
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="author" className="mb-2 block">
                                        Tác giả
                                    </label>
                                    <input
                                        id="author"
                                        name="author"
                                        type="text"
                                        placeholder="Nhập tên tác giả"
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="publisher" className="mb-2 block">
                                        Nhà xuất bản
                                    </label>
                                    <input
                                        id="publisher"
                                        name="publisher"
                                        type="text"
                                        placeholder="Nhập tên nhà xuất bản"
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="pages" className="mb-2 block">
                                        Số trang
                                    </label>
                                    <input
                                        id="pages"
                                        name="pages"
                                        type="number"
                                        min="0"
                                        placeholder="Nhập số trang sách"
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="published" className="mb-2 block">
                                        Năm xuất bản
                                    </label>
                                    <input
                                        id="published"
                                        name="published"
                                        type="number"
                                        placeholder="Nhập năm xuất bản"
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                            </div>
                            <div className="my-2 px-3">
                                <label htmlFor="description" className="mb-2 block">
                                    Mô tả
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    type="text"
                                    rows={5}
                                    placeholder="Nhập mô tả sách"
                                    className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    defaultValue={''}
                                />
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

export default AddProduct;
