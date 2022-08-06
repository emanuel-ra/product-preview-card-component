/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily:{
      'Fraunces': ['Fraunces', 'serif'] ,
      'Montserrat': ['Montserrat', 'sans-serif'] 
    },
    backgroundColor:{
      'cream':'var(--cream)',
      'very-dark-cyan':'var(--very-dark-cyan)',
      'dark-cyan':'var(--dark-cyan)',
      'very-dark-blue':'var(--very-dark-blue)',
      'dark-grayish-blue':'var(--dark-grayish-blue)',
      'white':'var(--white)',
    },
    textColor:{
      'dark-grayish-blue':'var(--dark-grayish-blue)',
      'dark-cyan':'var(--dark-cyan)',
      'white':'var(--white)',
    },
    extend: {},
  },
  plugins: [],
}
