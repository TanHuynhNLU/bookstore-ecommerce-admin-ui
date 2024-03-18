import { Link } from 'react-router-dom';
import ProductImage from '~/assets/images/book-image.png';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as bookService from '~/services/ProductService';

function AddProduct() {
    const [formData, setFormData] = useState({
        name: '',
        genre: '',
        stock: 0,
        price: 0,
        author: '',
        publisher: '',
        numberOfPage: 0,
        published: 0,
        status: 'Mở bán',
        image: '',
    });
    const [isNameExists, setIsNameExists] = useState(false);
    const debounce = useDebounce(formData.name, 500);
    const [selectedImage, setSelectedImage] = useState({
        file: null,
        preview: ProductImage,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

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

    // Handle the API call to add a new book when the submit button is clicked
    const handleSubmit = (e) => {
        e.preventDefault();

        const fetchAPI = async () => {
            if (selectedImage.file) {
                const uploadFileAPI = await bookService.uploadFile(selectedImage.file);
                if (uploadFileAPI.status === 'CREATED')
                    formData.image = `http://localhost:8080/api/FileUpload/files/${uploadFileAPI.data}`;
            }
            const addNewUserAPI = await bookService.addNewBook(formData);
            if (addNewUserAPI.status === 'CREATED') {
                toast.success('Thêm sản phẩm thành công', {
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
                toast.error('Thêm sản phẩm thất bại', {
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
    // Make an API call to check if the book's name exists
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await bookService.checkName(debounce);
            if (res.status === 'OK') setIsNameExists(true);
            else setIsNameExists(false);
        };
        if (debounce) fetchAPI();
    }, [debounce]);
    return (
        <div className="px-4 pb-6 dark:text-gray-400">
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
            <div className="mt-6 px-3">
                <div className="rounded-xl border border-solid bg-white shadow-sm dark:border-gray-600 dark:bg-slate-900">
                    <div className="p-3">
                        <div className="px-3 pt-3">
                            <h3 className="mb-2 text-2xl font-bold">Thêm sản phẩm</h3>
                        </div>
                        <form className="mt-4 max-w-[800px]" onSubmit={handleSubmit}>
                            <div className="relative mx-auto mb-6 block h-[200px] w-[200px]">
                                <img
                                    src={selectedImage.preview}
                                    alt="ProductImage"
                                    className="mx-auto block h-[200px] w-[200px]"
                                />
                                <label
                                    htmlFor="image"
                                    className="absolute bottom-[50%] right-0 translate-y-4 cursor-pointer"
                                >
                                    <ArrowUpCircleIcon className="mt-4 h-8 w-8 rounded-full bg-white text-blue-700" />
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
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
                                        onChange={handleInputChange}
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                    {isNameExists && <span className="text-red-500">Tên sách đã tồn tại</span>}
                                </div>
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="genre" className="mb-2 block">
                                        Thể loại
                                    </label>
                                    <select
                                        name="genre"
                                        id="genre"
                                        onChange={handleInputChange}
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
                                        min="0"
                                        placeholder="Nhập số lượng sách"
                                        onChange={handleInputChange}
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
                                        onChange={handleInputChange}
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
                                        onChange={handleInputChange}
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
                                        onChange={handleInputChange}
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="numberOfPage" className="mb-2 block">
                                        Số trang
                                    </label>
                                    <input
                                        id="numberOfPage"
                                        name="numberOfPage"
                                        type="number"
                                        min="0"
                                        placeholder="Nhập số trang sách"
                                        onChange={handleInputChange}
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
                                        min="0"
                                        placeholder="Nhập năm xuất bản"
                                        onChange={handleInputChange}
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="my-2 w-full px-3 lg:w-1/2">
                                    <label htmlFor="status" className="mb-2 block">
                                        Trạng thái
                                    </label>
                                    <select
                                        name="status"
                                        id="status"
                                        onChange={handleInputChange}
                                        className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
                                    >
                                        <option value="Mở bán">Mở bán</option>
                                        <option value="Hết hàng">Hết hàng</option>
                                    </select>
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
                                    onChange={handleInputChange}
                                    className="w-full rounded-md border border-solid border-gray-300 bg-gray-100 p-2 outline-none focus:border-blue-700 dark:border-gray-600 dark:bg-slate-800"
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
            <ToastContainer />
        </div>
    );
}

export default AddProduct;
