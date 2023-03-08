const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './src/**/*.{tsx,ts}',
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
    plugins: [require('flowbite/plugin')],
  }
}
