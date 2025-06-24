/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'symbiota': "url('../src/static/images/symbiota.png')",
        'matlab': "url('../src/static/images/chase.png')",
        'gradient-main': 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)',
        'gradient-palantir': 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #0f172a 100%)',
        'gradient-accent': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(30, 58, 138, 0.1) 0%, rgba(15, 23, 42, 0.05) 100%)',
        'gradient-hover': 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        'gradient-purple': 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
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
        // Palantir-inspired color palette
        primary: '#1e40af',
        secondary: '#1e3a8a',
        accent: '#3b82f6',
        'palantir-blue': '#1e40af',
        'palantir-navy': '#1e3a8a',
        'palantir-dark': '#0f172a',
        'palantir-slate': '#0f1419',
        'palantir-gray': '#334155',
        'palantir-light': '#64748b',
        'blue-light': '#3b82f6',
        'blue-dark': '#1d4ed8',
        'navy-light': '#1e40af',
        'navy-dark': '#1e3a8a',
        'slate-light': '#475569',
        'slate-dark': '#334155',
        lightGray: '#94a3b8',
        customGray: '#64748b',
        lightBlue: '#3b82f6',
        navyBlue: '#1e40af',
        slate: '#0f172a',
        darkSlate: '#020617',
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
        'palantir-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(59, 130, 246, 0.3)',
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(59, 130, 246, 0.5)',
          },
        },
        'subtle-pulse': {
          '0%, 100%': {
            opacity: '0.8',
          },
          '50%': {
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
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
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
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
        'palantir-glow': 'palantir-glow 4s ease-in-out infinite',
        'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
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

