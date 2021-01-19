module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    colors: {
      'blue': '#1DA1F2',
      'darkblue': '#2795D9',
      'lightblue': '#EFF9FF',
      'dark': '#657786',
      'light': '#AAB8C2',
      'lighter': '#E1E8ED',
      'lightest': '#F5F8FA',
    },
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
    }},
    extend: { },
  variants: {
    extend: {},
  },
  plugins: [
   // require('@tailwindcss/ui'),
  ],
}
