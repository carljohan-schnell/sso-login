/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // 👈 allow manual toggling
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
