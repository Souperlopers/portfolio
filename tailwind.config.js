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
                'bg-primary': '#252526',
                'btn-primary': '#0078d4',
                'btn-secondary': '#e6eefa',
                'btn-hover': '#015ea5',
            },
            screens: {
                'xs-h': { raw: '(min-height: 480px)' },
                'sm-h': { raw: '(min-height: 640px)' },
                'md-h': { raw: '(min-height: 768px)' },
                'lg-h': { raw: '(min-height: 1024px)' },
                'xl-h': { raw: '(min-height: 1280px)' },
                '2xl-h': { raw: '(min-height: 1536px)' },
            }
        },
    },
    daisyui: {
        themes: [
            {
                dark: {
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
            {
                light: {
                    "primary": "#007ACC",
                    "primary-content": "#FFFFFF",

                    "secondary": "#EAF3FF",
                    "secondary-content": "#35506B",

                    "accent": "#3794FF",
                    "accent-content": "#FFFFFF",

                    "neutral": "#1F2937",
                    "neutral-content": "#FFFFFF",

                    "base-100": "#FFFFFF",
                    "base-200": "#F8FAFC",
                    "base-300": "#EEF2F7",
                    "base-content": "#334155",

                    "info": "#3B82F6",
                    "success": "#10B981",
                    "warning": "#F59E0B",
                    "error": "#EF4444",
                },
            },
        ],
    },

    plugins: [
        forms,
        require("daisyui"),
    ],
};
