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
        secondary: '#44ADF8',
        accent: '#D6F5FF'
      },
      textColor: 'white',
      boxShadow: {
        'btn-glow': '0 0 5px #44ADF8, 0 0 25px #44ADF8',
        'card-glow':'0 0 40px #44adf8b4' ,
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
      sans: ["Karla", "sans-serif"],
      'cairo': ["Cairo", "serif"]
    }
  },
  plugins: [],
});
