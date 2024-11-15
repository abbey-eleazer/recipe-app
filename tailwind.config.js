/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        'dodgeroll-gold': '#f79f1a',
        'apple-green': '#046e18',
        'dire-wolf': '#292727'
      }
    },
    fontFamily: {
      Montserrat: 'Montserrat, sans-serif'
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  plugins: [],
}

