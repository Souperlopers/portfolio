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
                'btn-primary': '#0078d4',
                'btn-secundary': '#e6eefa',
                'btn-hover': '#015ea5',
            }
        },
    },
    daisyui: {
        themes: [
            {
                souperlopers: {
                    "primary": "#007ACC",
                    "primary-content": "#FFFFFF",

                    "secondary": "#252526",
                    "secondary-content": "#9FB1D1",

                    "accent": "#3794FF",
                    "accent-content": "#FFFFFF",

                    "neutral": "#1E1E1E",
                    "neutral-content": "#FFFFFF",

                    "base-100": "#070B14", // Header / Navbar
                    "base-200": "#0E1420", // Cards
                    "base-300": "#151C2B", // Main Background
                    "base-content": "#CCCCCC",

                    "info": "#3794FF",
                    "success": "#4EC9B0",
                    "warning": "#CCA700",
                    "error": "#F14C4C",
                },
            },
        ],
    },

    plugins: [
        forms,
        require("daisyui"),
    ],
};
