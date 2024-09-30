/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'usc-green': '#124d00',
      },
      fontFamily: {
        'sans': ['Times New Roman', 'Times', 'sans-serif']
      }
    },
  },
  plugins: [],
}

