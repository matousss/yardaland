/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#181A1B'
            },
            keyframes: {
                'spin-y': {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': { transform: 'rotateY(360deg)' }
                },
                'spin-z': {
                    '0%': { transform: 'rotateZ(0deg)' },
                    '100%': { transform: 'rotateZ(360deg)' }
                }
            },
            animation: {
                'spin-y': 'spin-y 14s linear infinite',
                'spin-z': 'spin-z 14s linear infinite',

            }
        },
    },
    plugins: [
        require('tailwindcss-animate')
    ],
}