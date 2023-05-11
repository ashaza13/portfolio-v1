/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
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
      container: {
        padding: '2rem',
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
        }
      },
      animation: {
        typing: "typing 2s steps(20), blink 1s infinite"
      }
    },
    fontFamily: {
      abc: ['Space Grotesk', 'sans-serif']
    },
  },
  plugins: [],
}

