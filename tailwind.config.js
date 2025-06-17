/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'symbiota': "url('../src/static/images/symbiota.png')",
        'matlab': "url('../src/static/images/chase.png')",
        'gradient-main': 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
        'gradient-purple': 'linear-gradient(135deg, #FFB340 0%, #FF8A65 100%)',
        'gradient-blue': 'linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FF6B35 0%, #FFB340 50%, #4FC3F7 100%)',
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
        primary: '#FF6B35',        // Warm orange (main brand color)
        secondary: '#F7931E',      // Golden orange
        accent: '#FFB340',         // Light orange/yellow
        'orange-light': '#FFB340', // Light orange
        'orange-dark': '#FF6B35',  // Deep orange
        'blue-light': '#4FC3F7',   // Soft blue
        'blue-dark': '#29B6F6',    // Medium blue
        'green-light': '#81C784',  // Soft green
        'green-dark': '#66BB6A',   // Medium green
        'warm-white': '#FEFEFE',   // Clean white
        'warm-gray': '#F5F5F5',    // Very light gray
        lightGray: '#E0E0E0',      // Light gray
        customGray: '#BDBDBD',     // Medium gray
        lightBlue: '#E3F2FD',      // Very light blue
        navyBlue: '#1565C0',       // Deep blue
        slate: '#37474F',          // Dark slate
        darkSlate: '#263238',      // Darker slate
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
        'bounce-soft': {
          '0%, 100%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
          '50%': {
            transform: 'translateY(-10px)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
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
        'bounce-soft': 'bounce-soft 2s infinite',
      }
    },
    fontFamily: {
      abc: ['Inter', 'Space Grotesk', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      space: ['Space Grotesk', 'sans-serif']
    },
  },
  plugins: [],
}

