import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#010b13',
        secondary: '#44ADF8',
        accent: '#D6F5FF',
        htmlColor: '#E5532C',
        cssColor: '#2965F1',
        jsColor: '#F7DF1E',
        tailwindColor:'#38B2AC',
        bootstrapColor:'#6F2CF5',
        reactColor:'#61DAFB',
        pythonColor:'#3776AB',
        djangoColor:'#0C4B33',
        wordpressColor: '#087AA0',
        figmaColor: '#F24E1E',
        vscodeColor: '#007ACC',
        githubColor: '#B3B3B3'
      },
      textColor: 'white',
      boxShadow: {
        'btn-glow': '0 0 5px #44ADF8, 0 0 25px #44ADF8',
        'card-glow':'0 0 40px #44adf8b4' ,
        'custom-card': '3px 3px 0 0 #ffffff',
      },
      borderRadius: {
        'custom-small': '8px', // Small radius
        'custom-large': '32px',  // Large radius
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
