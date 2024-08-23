import { jwtDecode } from 'jwt-decode';

export const formatNumber = (n) => {
    return new Intl.NumberFormat('en-US').format(n).replace(/,/g, '.');
};

export const isTokenExpired = (token) => {
    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert to seconds

        if (decodedToken.exp < currentTime) {
            return true; // Token is expired
        } else {
            return false; // Token is not expired
        }
    } catch (error) {
        console.error('Invalid token:', error);
        return true; // Treat invalid token as expired
    }
};
