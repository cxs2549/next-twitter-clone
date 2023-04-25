/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
        sm: '500px',
        lg: '988px',
        xl: '1200px',
      },
      colors: {
        twitter: "#1D9BF0"
      }
    },
  },
  plugins: [],
}
