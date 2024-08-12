import { Link } from 'react-router-dom';
import { ArchiveBoxIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import ProductImage from '~/assets/images/book-image.png';
import { useEffect, useState } from 'react';
// import { books as BookData } from '~/DummyData';
import { useDebounce } from '~/hooks';
import * as productService from '~/services/ProductService';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products() {
    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [sortBy, setSortBy] = useState('id');
    const [sortDirection, setSortDirection] = useState('');
    const [pageSize, setPageSize] = useState(10);
    const [totalBooks, setTotalBooks] = useState(0);
    const [totalPages, setTotalPages] = useState(10);
    const [page, setPage] = useState(0);
    const debounce = useDebounce(searchValue, 500);

    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    };
    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
    };
    const handleSortDirectionChange = (e) => {
        setSortDirection(e.target.value);
    };
    const handlePageSizeChange = (e) => {
        setPageSize(e.target.value);
    };
    const handleNextPageClick = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };
    const handlePreviousPageClick = () => {
        if (page > 0) setPage(page - 1);
    };
    const handleDeleteBookClick = (id) => {
        const fetchAPI = async () => {
            const res = await productService.deleteBook(id);
            if (res.status === 'OK') {
                toast.success('Xóa thành công', {
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
                toast.error('Xóa thất bại', {
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

        Swal.fire({
            title: 'Thông báo',
            text: 'Bạn có chắc là muốn xóa sách này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                setBooks(
                    books.filter((item) => {
                        return item.id !== id;
                    }),
                );
                fetchAPI();
            }
        });
    };

    // Fetching user data from the API with pagination and sorting
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await productService.searchBookPagination(
                debounce,
                page,
                pageSize,
                `${sortDirection}${sortBy}`,
            );
            setBooks(res.items);
            setTotalPages(res.totalPages);
            setTotalBooks(res.totalItems);
        };
        fetchAPI();
    }, [debounce, sortBy, sortDirection, pageSize, page]);

    return (
        <div className="px-4 pb-6 dark:text-gray-400">
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
            <div className="mt-6 px-3">
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
                                    value={searchValue}
                                    onChange={handleSearchValueChange}
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
                                    onChange={handleSortByChange}
                                    className="border border-solid border-gray-300 dark:border-gray-600 dark:bg-slate-800"
                                >
                                    <option value="id" className="p-1">
                                        ID
                                    </option>
                                    <option value="name">Tên sách</option>
                                    <option value="genre">Thể loại</option>
                                    <option value="stock">Số lượng</option>
                                    <option value="price">Giá</option>
                                    <option value="sales">Đã bán</option>
                                    <option value="status">Trạng thái</option>
                                </select>
                                <select
                                    name="orderBy"
                                    id="orderBy"
                                    onChange={handleSortDirectionChange}
                                    className="border border-solid border-gray-300 dark:border-gray-600 dark:bg-slate-800"
                                >
                                    <option value="" className="p-1">
                                        A-Z
                                    </option>
                                    <option value="-">Z-A</option>
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
                                    {books.map((book, id) => (
                                        <tr key={id} className="hover:bg-gray-100 dark:hover:bg-slate-800">
                                            <td className="p-3">{book.id}</td>
                                            <td className="flex flex-row items-center p-3">
                                                <img
                                                    src={book.image || ProductImage}
                                                    alt="product"
                                                    className="h-16 w-12 object-cover"
                                                />
                                                <div className="ml-3">
                                                    <p>{book.name}</p>
                                                    <p className="text-slate-400">{book.author}</p>
                                                </div>
                                            </td>
                                            <td className="p-3">{book.genre}</td>
                                            <td className="p-3">{book.stock}</td>
                                            <td className="p-3">{book.price} vnd</td>
                                            <td className="p-3">{book.sales}</td>
                                            <td className="p-3">
                                                {book.status === 'Mở bán' ? (
                                                    <span className="inline-block rounded-xl bg-gradient-to-tr from-green-400 to-green-500 px-2 text-white">
                                                        Mở bán
                                                    </span>
                                                ) : (
                                                    <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                        Hết hàng
                                                    </span>
                                                )}
                                                {/* <span className="inline-block rounded-xl bg-gradient-to-tr from-red-400 to-red-500 px-2 text-white">
                                                Hết hàng
                                            </span> */}
                                            </td>
                                            <td className="p-3">
                                                <div className="flex flex-row items-center">
                                                    <Link
                                                        to={`/update-product/${book.id}`}
                                                        className="inline-block rounded-md bg-green-500 p-2 hover:opacity-80"
                                                    >
                                                        <PencilIcon className="h-4 w-4 text-slate-600" />
                                                    </Link>
                                                    <button
                                                        id="deleteUser"
                                                        onClick={() => handleDeleteBookClick(book.id)}
                                                        className="ml-2 inline-block rounded-md bg-red-500 p-2 hover:opacity-80"
                                                    >
                                                        <TrashIcon className="h-4 w-4 text-slate-600" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col justify-between px-3 xl:flex-row xl:items-center">
                            <div className=" mt-4">
                                Số hàng
                                <select
                                    name="entries"
                                    id="entries"
                                    onChange={handlePageSizeChange}
                                    className="border border-solid border-gray-300 dark:border-gray-600 dark:bg-slate-800"
                                >
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                </select>
                                <b>
                                    {' '}
                                    {page * pageSize + 1}-{page * pageSize + books.length}{' '}
                                </b>
                                trong
                                <b> {totalBooks}</b>
                            </div>
                            <div className="mt-4 flex flex-row">
                                <button
                                    onClick={handlePreviousPageClick}
                                    className="inline-block w-[120px] cursor-pointer rounded-l-xl border border-solid border-gray-300 px-4 py-2 text-center hover:bg-gray-100 dark:border-gray-600 dark:bg-slate-800 dark:hover:bg-slate-600"
                                >
                                    Trang trước
                                </button>
                                <button
                                    onClick={handleNextPageClick}
                                    className="inline-block w-[120px] cursor-pointer rounded-r-xl border border-solid border-gray-300 px-4 py-2 text-center hover:bg-gray-100 dark:border-gray-600 dark:bg-slate-800 dark:hover:bg-slate-600"
                                >
                                    Trang sau
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Products;
