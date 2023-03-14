const defaultTheme = require('tailwindcss/defaultTheme');
const flowbite = require('flowbite/plugin');
const tailwindcss = require('tailwindcss');

/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: 'jit',
    content: [
      './index.html',
      './src/**/*.{ts,tsx}',
      './src/components/**/*.{ts,tsx}',
      './src/pages/**/*.{tsx,ts}',
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],

    darkMode: 'class',
    theme: {
      container: {
        center: true,
        padding: '2rem',
      },
      extend: { 
        fontFamily: {
        sans: ['Inter', 'Sarabun', ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [
      tailwindcss('./tailwind.config.cjs'),
      flowbite,
    ],
  }
}
