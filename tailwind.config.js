/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FEFCF9',
          100: '#FDF8F3',
          200: '#FAF0E6',
          300: '#F5E6D8',
          400: '#EDD5BC',
        },
        rose: {
          brand:  '#C9784A',
          dark:   '#A85F35',
          light:  '#E8A882',
          pale:   '#F5DDD0',
        },
        navy: {
          brand: '#1A1A2E',
          mid:   '#2D2D4E',
          light: '#4A4A6E',
        },
        gold: {
          brand: '#D4A853',
          light: '#EDD090',
          pale:  '#FAF0D7',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease-out',
        'slide-up':   'slideUp 0.5s ease-out',
        'bounce-slow':'bounce 2s infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' },              '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
