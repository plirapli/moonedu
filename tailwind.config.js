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
    },
  },
  plugins: [],
};
