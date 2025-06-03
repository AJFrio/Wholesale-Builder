/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // blue-600
          dark: '#1E40AF', // blue-800
        },
        secondary: {
          DEFAULT: '#22C55E', // green-500
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}