/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src//**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',    // Include all files in pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};