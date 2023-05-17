/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'symbiota': "url('../src/static/images/symbiota.png')",
        'matlab': "url('../src/static/images/chase.png')",
      },
      rotate: {
        '30': '30deg',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        lightGray: '#BCBFC6',
        gray: '#A09FA5',
        lightBlue: '#5A6988',
        navyBlue: '#3F4A60',
        slate: '#333743',
        darkSlate: '#242831',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        fadeIn: {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%"
          }
        },
        fadeInDown: {
          "0%": {
            opacity: "0%",
            transform: "translateY(-20px)"
          },
          "100%": {
            opacity: "100%",
            transform: "translateY(0px)"
          }
        },
        fadeInUp: {
          "0%": {
            opacity: "0%",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "100%",
            transform: "translateY(0px)"
          }
        },
      },
      animation: {
        typing: "typing 2s steps(20), blink 1s infinite",
        fadeIn: "fadeIn 1s ease-in forwards",
        fadeInDown: "fadeInDown 1s ease-in",
        fadeInUp: "fadeInUp 0.5s ease-in"
      }
    },
    fontFamily: {
      abc: ['Space Grotesk', 'sans-serif']
    },
  },
  plugins: [],
}

