/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A5C6B',
        accent: '#00B4C8',
        light: '#E8F7F9',
        dark: '#061D22',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-cormorant)', 'serif'],
      },
    },
  },
  plugins: [],
}
