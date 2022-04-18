module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      fontSize: {
        tiny: '0.5rem',
      },
      colors: {
        primary: {
          base: '#7455F7',
          gradient: '#937BF9',
          sub: '#E4DDFD',
          bg: '#FAF9FF',
        },
        secondary: '#F8AE2D',
        gray: '#9A9A9A',
      },
      margin: {
        34: '8.5rem',
      },
      borderRadius: {
        large: '3rem',
      },
      boxShadow: {
        navBar: '0px -1px 6px 0px rgba(154, 154, 154, 0.25)',
        card: '1.5px 1.5px 6px rgba(154, 154, 154, 0.15)',
        container: '0px -2px 6px 2px #E4DDFD',
      },
    },
  },
  plugins: [],
};
