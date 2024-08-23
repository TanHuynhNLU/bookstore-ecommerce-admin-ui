import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from '~/utils/utils';

function RequireAuth({ children }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const isLoggedIn = () => {
        const token = localStorage.getItem('token');

        return token !== null && !isTokenExpired(token);
    };

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate('/login');
        } else {
            setLoading(false);
        }
    }, [navigate]);
    return loading ? null : children;
}

export default RequireAuth;
