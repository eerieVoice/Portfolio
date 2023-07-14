/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        dashboard: "url('/src/assets/dashboard.png')",
        tictac: "url('/src/assets/tictactoe.png')",
      },
      colors: {
        backg: '#111111',
        textnani: '#eeeeee',
        primarypo: '#068fff',
        accentpo: '#4e4feb',
      },
      fontFamily: {
        def: ['DM Sans', 'sans-serif'],
        header: ['DM Serif Display', 'serif'],
        logo: ['Playfair Display', 'serif'],
      },
      fontSize: {
        xl: 'clamp(1.5rem, 3.5vw, 2rem)',
        md: 'clamp(1.25rem, 2.5vw, 1.5rem)',
      },
    },
  },
  plugins: [],
};
