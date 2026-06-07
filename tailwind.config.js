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
                // secondary > primary > tertiary > surface
                'bg-primary': '#252526',
                'bg-secondary': '#1E1E1E', //darker primary
                'bg-tertiary': '#2D2D30', //lighter primary
                'surface': '#3E3E42', // lighter tertiary

                'text-primary': '#D4D4D4',  // white
                'text-secondary': '#CCCCCC', // darker primary
                'text-muted': '#858585', // darker secondary

                'light-accent': '#38bdf8', //sky 400
                'accent': '#007ACC', //vs blue
                'border': '#3C3C3C', // neutral

                'success': '#4EC9B0', //light cyan
                'warning': '#CEA14C', //light orange
                'error': '#F48771', //orange

                'bg-primary-light': '#FFFFFF', // white
                'bg-secondary-light': '#F3F3F3',
                'surface-light': '#FAFAFA',

                'text-primary-light': '#1E1E1E',
                'text-secondary-light': '#3E3E42',
                'text-muted-light': '#6E6E6E',
                
                'border-light': '#E5E5E5',
            }
        },
    },

    plugins: [forms],
};
