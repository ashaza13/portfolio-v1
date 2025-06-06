/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'symbiota': "url('../src/static/images/symbiota.png')",
        'matlab': "url('../src/static/images/chase.png')",
        'gradient-main': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-purple': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'gradient-blue': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
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
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#f093fb',
        'purple-light': '#a8edea',
        'purple-dark': '#764ba2',
        'blue-light': '#667eea',
        'blue-dark': '#4c63d2',
        lightGray: '#BCBFC6',
        customGray: '#A09FA5',
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
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(100px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20), blink 1s infinite",
        fadeIn: "fadeIn 1s ease-in forwards",
        fadeInDown: "fadeInDown 1s ease-in",
        fadeInUp: "fadeInUp 0.5s ease-in",
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
      }
    },
    fontFamily: {
      abc: ['Space Grotesk', 'sans-serif']
    },
  },
  plugins: [],
}

