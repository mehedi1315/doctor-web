/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        lato: ["Lato", 'sans-serif'],
        roboto:["Roboto",'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        'days-one': ['Days One', 'sans-serif'],
      },

      colors: {
        doctor: {
          primary: '#171151',
          secondary: '#10D0A1',
          green: '#10D0A1',
          'green-light': '#E7FAF6',
          blue: '#0E63FF',
          'blue-light': '#E7efFF',
          pink: '#F72A75',
          'pink-light': '#FEEAf1',
          sky: '#42BFFF',
          'sky-light': '#ECF9FF',
          white: '#FFFFFF',
          gray00: '#F5F5F5',
          gray10: '#F2F5F7',
          gray20: '#424242',
          gray30: '#4B4F58',
          gray30: '#3a3a3a',
          black: '#000000',
          border: '#332E66',
          text01: '#A9B7D1',
          text02: '#8A879F',
          text03: '#B7B6C4',
        },
      },
    },
  },
  plugins: [],
}
