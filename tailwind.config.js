/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                cairoPlay: [
                    'Cairo Play',
                    'system-ui',
                    'Avenir',
                    'Helvetica',
                    'Arial',
                    'sans-serif',
                ],
            },
            lineHeight: {
                normal: '1.5',
            },
            fontWeight: {
                normal: '400',
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
