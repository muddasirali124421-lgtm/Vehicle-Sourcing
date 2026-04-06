/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heritage': {
          black: '#0a0a0a',
          charcoal: '#141414',
          dark: '#1a1a1a',
          'dark-light': '#252525',
          green: '#1b4d3e',
          'green-light': '#2d6a52',
          gold: '#c9aa6b',
          'gold-light': '#d4b978',
          'gold-dark': '#a88a4d',
          cream: '#f5f0e6',
          'gray-light': '#8a8a8a',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(201, 170, 107, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(201, 170, 107, 0.8), 0 0 40px rgba(201, 170, 107, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
