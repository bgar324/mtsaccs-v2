/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'border-pulse': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#edd7b4' },
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
        'border-pulse': 'border-pulse 2s infinite',
      }
    },
  },
  plugins: [],
}
