import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                vazir: ['"vazir"', "sans-serif"],
            },
            colors: {

                'primary': '#4daafc',
                'bg-primary': '#252526',
                'btn-bg': '#0078d4',
                'btn-hover': '#015ea5',
            }
        },
    },

    plugins: [forms],
    plugins: [require("daisyui")],
};
