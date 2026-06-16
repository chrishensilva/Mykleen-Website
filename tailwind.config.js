/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mykleen-blue':       '#2C6B9E',
        'mykleen-blue-light': '#4192D0',
        'mykleen-blue-dark':  '#1D4ED8',
        'mykleen-green':      '#4CAF50',
        'mykleen-green-light':'#68B94A',
        'mykleen-slate':      '#1E293B',
        'mykleen-bg':         '#F8FAFC',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':   'fadeIn 0.7s ease-out forwards',
        'slide-up':  'slideUp 0.7s ease-out forwards',
        'float':     'float 5s ease-in-out infinite',
        'pulse-slow':'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float:   { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        'blue-gradient': 'linear-gradient(135deg, #2C6B9E, #4192D0)',
        'green-gradient':'linear-gradient(135deg, #4CAF50, #68B94A)',
      },
    },
  },
  plugins: [],
}
