module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'auth': "url('/src/assets/auth.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
