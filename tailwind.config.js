import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#020411',
        secondary: '#40CFF7',
        accent: '#D6F5FF'
      },
      textColor: 'white',
      boxShadow: {
        'btn-glow': '0 0 5px #40CFF7, 0 0 25px #40CFF7',
        'custom-card': '3px 3px 0 0 #ffffff',
      },
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
