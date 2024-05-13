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
    },
    screens: {
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'max-sm': { 'max': '767px' },
    },
    fontFamily:{
      'josefin-sans': ["Josefin Sans", "sans-serif"],
      'josefin-slab': ["Josefin Slab", "serif"]
    }
  },
  plugins: [],
});
