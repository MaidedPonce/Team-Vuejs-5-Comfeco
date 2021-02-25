const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      gray: {
        300: '#F3F3F3',
        400: '#E3E3E3',
        500: '#C4C4C4',
        600: '#777879',
        700: '#555555',
        800: '#2E2E2E'
      },
      pink: {
        300: '#ECADF6',
        400: '#E480E5',
        500: '#D740DA',
        600: '#B824BB',
        700: '#8A178C',
        800: '#69156A'
      },
      purple: {
        300: '#D7B7FF',
        400: '#B983FF',
        500: '#9349DD',
        600: '#7535B6',
        700: '#521E87',
        800: '#390F64'
      },
      yellow: {
        300: '#FFE499',
        400: '#FFD767',
        500: '#FFCB38',
        600: '#FFC41F',
        700: '#F1B406',
        800: '#D39C00'
      },
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
      facebook: '#4867AA',
      twitter: '#00A2F3'
    },
    extend: {
      backgroundImage: theme => ({
        auth: "url('/src/assets/auth.jpg')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
