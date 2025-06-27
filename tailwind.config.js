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
          DEFAULT: '#8B5CF6', // purple-500
          light: '#A78BFA', // purple-400
          dark: '#7C3AED', // purple-600
        },
        accent: {
          DEFAULT: '#F97316', // orange-500
          light: '#FB923C', // orange-400
          dark: '#EA580C', // orange-600
        },
      },
    },
  },
  plugins: [],
}

