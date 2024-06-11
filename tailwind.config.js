import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000419',
        secondary: '#40CFF7',
      },
      textColor: 'white',
    },
    screens: {
      'sm': { 'max': '320px' },
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'max-sm': { 'max': '767px' },
    },
    fontFamily:{
      sans: ["Josefin Sans", "sans-serif"],
      'josefin-slab': ["Josefin Slab", "serif"]
    }
  },
  plugins: [],
});
