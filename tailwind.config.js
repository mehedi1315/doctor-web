/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        lato: ["Lato", 'sans-serif'],
        roboto:["Roboto",'sans-serif'],
      },

      colors: {
        doctor: {
          primary: '#0170B9',
          secondary: '#171151',
          teal: '#10D0A1',
          white: '#FFFFFF',
          gray00: '#F5F5F5',
          gray10: '#F2F5F7',
          gray20: '#424242',
          gray30: '#4B4F58',
          gray30: '#3a3a3a',
          black: '#000000',
          border: '#332E66',
          text: '#A9B7D1'
        },
      },
    },
  },
  plugins: [],
}
