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
                'btn-secondary': '#e6eefa',
                'btn-hover': '#015ea5',
            },
            screens: {
                'xs'    :   '480px'                          ,
                'h-xs'  : { 'raw'  : '(min-height: 480px)' } ,
                'h-sm'  : { 'raw'  : '(min-height: 640px)' } ,
                'h-md'  : { 'raw'  : '(min-height: 768px)' } ,
                'h-lg'  : { 'raw'  : '(min-height: 1024px)' },
                'h-xl'  : { 'raw'  : '(min-height: 1280px)' },
                'h-2xl' : { 'raw'  : '(min-height: 1536px)' },
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

                    "base-100": "#070B14", 
                    "base-200": "#0E1420",
                    "base-300": "#151C2B",
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
