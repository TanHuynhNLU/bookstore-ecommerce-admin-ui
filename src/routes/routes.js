import Home from '~/pages/Home';
import Products from '~/pages/Products';
import Users from '~/pages/Users';
import AddUser from '~/pages/AddUser';
import UpdateUser from '~/pages/UpdateUser';

export const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/users', component: Users },
    { path: '/add-user', component: AddUser },
    { path: '/update-user', component: UpdateUser },
];
