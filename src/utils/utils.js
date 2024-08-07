export const formatNumber = (n) => {
    return new Intl.NumberFormat('en-US').format(n).replace(/,/g, '.');
};
