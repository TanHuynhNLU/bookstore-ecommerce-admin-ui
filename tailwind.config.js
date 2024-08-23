/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                login: "url('../public/images/login-bg.jpg')",
            },
        },
    },
    plugins: [],
};
