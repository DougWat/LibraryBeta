module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [
    './src/**/*.liquid',
    './src/styles/partials/*.css'
  ],
  theme: {
    screens: {
      xl: {'max':'1240px'},
      lg: {'max':'1024px'},
      md: {'max':'767px'},
      sm: {'max':'639px'},
      xs: {'max': '500px'}
    },
    extend: {
        fontFamily:{
          body: ["Open Sans", "sans-serif"],
          header: ["Poppins", "sans-serif"],
        },
        colors:{

        },
        backgroundColor:{
          dark:'#1B1B1B',
          gray:'#F9F9F9',
          light:"#FFF;"
        },
        textColor:{
          light:'#FFFBFF',
          lightish:'#d5d5d5',
          dark:'#121417'
        }
    },
  },
  plugins: [],
}
