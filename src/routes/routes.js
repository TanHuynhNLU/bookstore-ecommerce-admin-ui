import Products from '~/pages/Products';
import Users from '~/pages/Users';
import AddUser from '~/pages/AddUser';
import UpdateUser from '~/pages/UpdateUser';
import AddProduct from '~/pages/AddProduct';
import UpdateProduct from '~/pages/UpdateProduct';
import Orders from '~/pages/Orders';
import UpdateOrder from '~/pages/UpdateOrder';
import Contacts from '~/pages/Contacts';
import UpdateContact from '~/pages/UpdateContact';
import Dashboard from '~/pages/Dashboard';
import Login from '~/pages/Login';

export const privateRoutes = [
    { path: '/', component: Dashboard },
    { path: '/dashboard', component: Dashboard },
    { path: '/products', component: Products },
    { path: '/users', component: Users },
    { path: '/add-user', component: AddUser },
    { path: '/update-user/:userId', component: UpdateUser },
    { path: '/add-product', component: AddProduct },
    { path: '/update-product/:productId', component: UpdateProduct },
    { path: '/orders', component: Orders },
    { path: '/update-order/:orderId', component: UpdateOrder },
    { path: '/contacts', component: Contacts },
    { path: '/update-contact/:contactId', component: UpdateContact },
];

export const publicRoutes = [{ path: '/login', component: Login, layout: null }];
