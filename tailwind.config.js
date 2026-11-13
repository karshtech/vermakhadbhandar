/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#103D28',
          forest: '#082B1C',
          secondary: '#1D603A',
          fresh: '#83B83D',
          lime: '#B5D957',
          gold: '#E8B94F',
          warmWhite: '#F7F6EF',
          softBg: '#EDEFE5',
          textDark: '#14251A',
          textMuted: '#657266',
        },
      },
      fontFamily: {
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
        sans: ['Manrope', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
